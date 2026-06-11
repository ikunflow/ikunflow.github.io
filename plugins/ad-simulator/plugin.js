/**
 * 可试玩广告模拟器 Pro - 支持多平台广告包 + 环境模拟 + 合规检测
 * 
 * 支持平台: app / mo / unity / google / mintegral
 * 核心能力:
 *   1. 拖入 ZIP/HTML 广告包，自动解析入口
 *   2. 模拟真实用户环境（UA、屏幕、浏览器版本、时区、语言、网络等）
 *   3. 平台兼容性检测（加载时间、资源大小、FPS、触控响应等）
 *   4. 生成检测报告
 *   5. 开发者调试控制台（Console / State / Network）
 *   6. 极端测试模式（超时/丢包/内存压力/低帧率/断网/触控洪水）
 *   7. 预设测试用例（低端机/弱网/横屏/长时间运行）
 */
PM.register({
    id: 'ad-simulator',
    name: '可试玩广告模拟器',
    icon: '\ud83d\udcf1',
    description: '拖入广告包，模拟真实用户环境测试，输出合规检测报告',
    color: '--primary-color',
    colorHover: '--primary-hover',
    cardClass: 'ad-simulator-card',
    uploadClass: 'ad-upload',

    _device: null,
    _fpsHistory: [],
    _fpsTimer: null,
    _fpsRafId: null,
    _frameTimings: [],
    _lastFrameTime: 0,
    _frameCount: 0,
    _currentFPS: 0,
    _fps1PercentLow: 0,
    _isTouchMode: true,
    _elapsedTimer: null,
    _startTime: 0,
    _report: null,
    _adContent: null,
    _platform: 'app',
    _debugConsoleVisible: false,
    _extremeMode: false,
    _extremeIntervals: [],
    _consoleLogs: [],
    _consoleFilter: 'all',
    _stateUpdateTimer: null,
    _networkCondition: null,

    // ===== 设备预设 =====
    DEVICES: [
        { name: 'iPhone 14 Pro', width: 393, height: 852, dpr: 3, ua: 'iPhone', os: 'iOS', browser: 'Safari 17', browserVer: 17 },
        { name: 'iPhone SE', width: 375, height: 667, dpr: 2, ua: 'iPhone', os: 'iOS', browser: 'Safari 16', browserVer: 16 },
        { name: 'iPhone 14 Pro Max', width: 430, height: 932, dpr: 3, ua: 'iPhone', os: 'iOS', browser: 'Safari 17', browserVer: 17 },
        { name: 'Pixel 7', width: 412, height: 915, dpr: 2.625, ua: 'Android', os: 'Android', browser: 'Chrome 120', browserVer: 120 },
        { name: 'Galaxy S23', width: 360, height: 780, dpr: 3, ua: 'Android', os: 'Android', browser: 'Chrome 119', browserVer: 119 },
        { name: 'Galaxy A54', width: 412, height: 915, dpr: 1.5, ua: 'Android', os: 'Android', browser: 'Chrome 115', browserVer: 115 },
        { name: 'iPad Air', width: 820, height: 1180, dpr: 2, ua: 'iPad', os: 'iOS', browser: 'Safari 17', browserVer: 17 },
        { name: '小米 13', width: 393, height: 851, dpr: 3, ua: 'Android', os: 'Android', browser: '小米浏览器 14', browserVer: 14 },
        { name: '华为 P60', width: 393, height: 852, dpr: 3, ua: 'Android', os: 'Android', browser: '华为浏览器 13', browserVer: 13 },
        { name: '自定义', width: 375, height: 812, dpr: 2, ua: 'Custom', os: 'Custom', browser: 'Chrome 120', browserVer: 120 }
    ],

    // ===== 浏览器预设 =====
    BROWSERS: [
        { name: 'Chrome 120', ua: 'Mozilla/5.0 (Linux; Android 13; Pixel 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36' },
        { name: 'Chrome 119', ua: 'Mozilla/5.0 (Linux; Android 13; Pixel 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Mobile Safari/537.36' },
        { name: 'Chrome 115', ua: 'Mozilla/5.0 (Linux; Android 13; Pixel 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Mobile Safari/537.36' },
        { name: 'Safari 17 (iOS)', ua: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.2 Mobile/15E148 Safari/604.1' },
        { name: 'Safari 16 (iOS)', ua: 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1' },
        { name: '小米浏览器 14', ua: 'Mozilla/5.0 (Linux; Android 13; Xiaomi 13) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.6099.105 Mobile Safari/537.36 XiaoMi/MiuiBrowser/14.0.0' },
        { name: '华为浏览器 13', ua: 'Mozilla/5.0 (Linux; Android 13; HUAWEI P60) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.6099.105 Mobile Safari/537.36 HuaweiBrowser/13.0.0' },
        { name: 'Samsung Browser 21', ua: 'Mozilla/5.0 (Linux; Android 13; SM-S918B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.6099.144 SamsungBrowser/21.0' },
        { name: 'UC Browser 13', ua: 'Mozilla/5.0 (Linux; Android 13; Pixel 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.6099.144 UCBrowser/13.4.0.1036 Mobile' }
    ],

    // ===== 平台配置 =====
    PLATFORMS: [
        { id: 'app', name: 'App 可试玩广告', color: '#3498db', icon: '\ud83d\udce6' },
        { id: 'mo', name: 'Mo 可试玩广告', color: '#9b59b6', icon: '\ud83c\udfaf' },
        { id: 'unity', name: 'Unity 可试玩广告', color: '#2ecc71', icon: '\ud83c\udfae' },
        { id: 'google', name: 'Google 可试玩广告', color: '#e74c3c', icon: '\ud83d\udd35' },
        { id: 'mintegral', name: 'Mintegral 可试玩广告', color: '#f39c12', icon: '\u2b50' }
    ],

    // ===== 合规检测阈值 =====
    THRESHOLDS: {
        loadTime: 5000,
        resourceSize: 5 * 1024 * 1024,
        fpsMin: 30,
        fpsAvg: 55,
        touchResponse: 200,
        memoryLimit: 150 * 1024 * 1024
    },

    // ===== 测试用例预设 =====
    TEST_CASES: [
        { id: 'lowend', name: '\ud83d\udcf1 低端机测试', desc: 'iPhone SE + 3G网络 + 低电量', device: 'iPhone SE', browser: 'Safari 16 (iOS)', network: '3g', battery: '20', orientation: 'portrait', extreme: true, extremePreset: 'lowend' },
        { id: 'poornet', name: '\ud83c\udf10 网络差测试', desc: '3G慢速 + 50%丢包 + 2000ms延迟', device: 'Galaxy A54', browser: 'Chrome 115', network: '3g', battery: '50', orientation: 'portrait', extreme: true, extremePreset: 'poornet' },
        { id: 'landscape', name: '\ud83d\udd04 横屏测试', desc: '横屏 + WiFi + 满电', device: 'iPad Air', browser: 'Safari 17 (iOS)', network: 'wifi', battery: '100', orientation: 'landscape', extreme: false },
        { id: 'longrun', name: '\u23f1\ufe0f 长时间运行测试', desc: 'Pixel 7 + 运行10分钟 + 监控内存', device: 'Pixel 7', browser: 'Chrome 120', network: 'wifi', battery: '100', orientation: 'portrait', extreme: true, extremePreset: 'longrun' },
        { id: 'offline', name: '\ud83d\udeab 离线断网测试', desc: '离线模式 + 检测降级策略', device: 'iPhone 14 Pro', browser: 'Safari 17 (iOS)', network: 'offline', battery: '100', orientation: 'portrait', extreme: true, extremePreset: 'offline' },
        { id: 'touchflood', name: '\ud83d\udc46 触控洪水测试', desc: '高频触控注入 + 检测响应', device: 'Pixel 7', browser: 'Chrome 120', network: '4g', battery: '100', orientation: 'portrait', extreme: true, extremePreset: 'touchflood' }
    ],

    render: function () {
        var self = this;
        var deviceOptions = this.DEVICES.map(function (d) {
            return '<option value="' + d.name + '">' + d.name + ' (' + d.width + '\u00d7' + d.height + ')</option>';
        }).join('');

        var browserOptions = this.BROWSERS.map(function (b) {
            return '<option value="' + b.name + '">' + b.name + '</option>';
        }).join('');

        var platformCards = this.PLATFORMS.map(function (p) {
            return '<div class="ads-platform-card" data-platform="' + p.id + '" style="border-color:' + p.color + ';background:' + p.color + '22;">' +
                   '  <span style="font-size:20px;">' + p.icon + '</span>' +
                   '  <span style="font-size:12px;color:#333;">' + p.name + '</span>' +
                   '</div>';
        }).join('');

        var testCaseButtons = this.TEST_CASES.map(function (tc) {
            return '<button class="ads-testcase-btn" data-testcase="' + tc.id + '" style="padding:8px 12px;border:1px solid #e2e8f0;border-radius:8px;background:white;cursor:pointer;font-size:12px;text-align:left;transition:all 0.2s;width:100%;" title="' + tc.desc + '">' +
                   tc.name + '<br><span style="font-size:10px;color:#888;">' + tc.desc + '</span></button>';
        }).join('');

        return '' +
            '<div class="header-area"><h2>\ud83d\udcf1 可试玩广告模拟器 Pro</h2><p>拖入广告包，模拟真实用户环境，输出合规检测报告</p></div>' +

            // ---- 平台选择 ----
            '<div style="margin-bottom:16px;">' +
            '  <label style="font-size:13px;font-weight:600;color:#4a5568;display:block;margin-bottom:8px;">\ud83d\udee0\ufe0f 广告平台</label>' +
            '  <div style="display:flex;gap:10px;flex-wrap:wrap;">' + platformCards + '</div>' +
            '</div>' +

            // ---- 参数栏 ----
            '<div class="settings-bar" style="flex-wrap:wrap;">' +
            '  <div class="setting-item">' +
            '    <label>设备:</label>' +
            '    <select id="adsDeviceSelect">' + deviceOptions + '</select>' +
            '  </div>' +
            '  <div class="setting-item">' +
            '    <label>宽:</label>' +
            '    <input type="number" id="adsWidth" value="375" min="200" max="1920" style="width:70px;">' +
            '  </div>' +
            '  <div class="setting-item">' +
            '    <label>高:</label>' +
            '    <input type="number" id="adsHeight" value="667" min="200" max="1920" style="width:70px;">' +
            '  </div>' +
            '  <div class="setting-item">' +
            '    <label>DPR:</label>' +
            '    <select id="adsDpr"><option value="1">1x</option><option value="2" selected>2x</option><option value="3">3x</option></select>' +
            '  </div>' +
            '  <div class="setting-item">' +
            '    <label>浏览器:</label>' +
            '    <select id="adsBrowserSelect">' + browserOptions + '</select>' +
            '  </div>' +
            '  <div class="setting-item" style="margin-left:12px;">' +
            '    <label>\ud83e\uddea 极端模式:</label>' +
            '    <label class="ads-toggle-switch" style="display:inline-flex;align-items:center;gap:6px;cursor:pointer;">' +
            '      <input type="checkbox" id="adsExtremeMode" style="display:none;">' +
            '      <span id="adsExtremeToggle" style="width:44px;height:24px;background:#ccc;border-radius:12px;display:inline-block;position:relative;transition:0.3s;">' +
            '        <span style="position:absolute;top:2px;left:2px;width:20px;height:20px;background:white;border-radius:50%;transition:0.3s;"></span>' +
            '      </span>' +
            '    </label>' +
            '  </div>' +
            '  <div class="setting-item">' +
            '    <button id="adsToggleDebug" style="padding:6px 12px;border:1px solid #e2e8f0;border-radius:6px;background:white;cursor:pointer;font-size:12px;color:#4a5568;">\ud83d\udc1b 调试台</button>' +
            '  </div>' +
            '</div>' +

            // ---- 高级参数 ----
            '<details style="margin-bottom:16px;border:1px solid #e2e8f0;border-radius:8px;padding:12px;background:#f8f9fa;">' +
            '  <summary style="font-weight:600;cursor:pointer;color:#4a5568;font-size:13px;">\u26a1 高级环境参数</summary>' +
            '  <div style="display:flex;gap:20px;flex-wrap:wrap;margin-top:12px;">' +
            '    <div class="setting-item">' +
            '      <label>语言:</label>' +
            '      <select id="adsLanguage" style="font-size:12px;">' +
            '        <option value="zh-CN" selected>中文简体</option>' +
            '        <option value="zh-TW">中文繁体</option>' +
            '        <option value="en-US">English</option>' +
            '        <option value="ja-JP">日本語</option>' +
            '        <option value="ko-KR">한국어</option>' +
            '      </select>' +
            '    </div>' +
            '    <div class="setting-item">' +
            '      <label>时区:</label>' +
            '      <select id="adsTimezone" style="font-size:12px;">' +
            '        <option value="Asia/Shanghai" selected>北京时间</option>' +
            '        <option value="America/New_York">美东时间</option>' +
            '        <option value="Europe/London">伦敦时间</option>' +
            '        <option value="Asia/Tokyo">东京时间</option>' +
            '      </select>' +
            '    </div>' +
            '    <div class="setting-item">' +
            '      <label>网络:</label>' +
            '      <select id="adsNetwork" style="font-size:12px;">' +
            '        <option value="4g" selected>4G 快速</option>' +
            '        <option value="3g">3G 慢速</option>' +
            '        <option value="wifi">WiFi</option>' +
            '        <option value="offline">离线</option>' +
            '      </select>' +
            '    </div>' +
            '    <div class="setting-item">' +
            '      <label>电池:</label>' +
            '      <select id="adsBattery" style="font-size:12px;">' +
            '        <option value="100" selected>100%</option>' +
            '        <option value="50">50%</option>' +
            '        <option value="20">20%（低电量）</option>' +
            '        <option value="5">5%（极低）</option>' +
            '      </select>' +
            '    </div>' +
            '  </div>' +
            '</details>' +

            // ---- 上传区 ----
            '<div style="display:flex;gap:12px;margin-bottom:20px;flex-wrap:wrap;">' +
            '  <div id="adsDropZone" class="upload-area ad-upload" style="flex:1;min-width:280px;padding:30px;">' +
            '    <p style="font-size:16px;margin-bottom:8px;">\ud83d\udce6 拖拽广告包到这里</p>' +
            '    <p style="font-size:12px;color:#888;">支持 HTML / ZIP（包含 index.html）</p>' +
            '    <p style="font-size:11px;color:#aaa;margin-top:8px;">支持的平台: App / Mo / Unity / Google / Mintegral</p>' +
            '    <input type="file" id="adsFileInput" class="file-input-hidden" accept=".html,.htm,.zip">' +
            '  </div>' +
            '  <div style="flex:1;min-width:280px;display:flex;flex-direction:column;gap:8px;">' +
            '    <input type="text" id="adsUrlInput" placeholder="或输入线上广告 URL..." style="padding:10px 14px;border:2px dashed #e2e8f0;border-radius:8px;font-size:14px;">' +
            '    <button id="adsLoadUrlBtn" class="btn-all-download" style="background:var(--primary-color);padding:10px 20px;font-size:14px;">\ud83d\udd17 加载 URL</button>' +
            '  </div>' +
            '</div>' +

            '<div id="adsStatus" class="status-msg" style="color:var(--primary-color)"></div>' +

            // ---- 模拟器主体 ----
            '<div id="adsSimulator" style="display:none;">' +
            '  <div style="display:flex;gap:20px;flex-wrap:wrap;align-items:flex-start;">' +
            '    <!-- 手机外壳 -->' +
            '    <div style="flex:0 0 auto;">' +
            '      <div id="adsDeviceFrame" style="background:#1a1a2e;border-radius:24px;padding:12px;box-shadow:0 8px 30px rgba(0,0,0,0.3);display:inline-block;">' +
            '        <!-- 状态栏 -->' +
            '        <div id="adsStatusBar" style="display:flex;justify-content:space-between;align-items:center;padding:8px 16px;color:#fff;font-size:11px;font-family:monospace;">' +
            '          <span id="adsTimeDisplay">9:41</span>' +
            '          <div style="display:flex;gap:4px;align-items:center;">' +
            '            <span id="adsSignalBars">\ud83d\udcf6</span>' +
            '            <span id="adsNetworkType">4G</span>' +
            '            <span id="adsBatteryIcon">\ud83d\udd0b</span>' +
            '            <span id="adsBatteryText">85%</span>' +
            '          </div>' +
            '        </div>' +
            '        <!-- 屏幕区 -->' +
            '        <div id="adsScreenWrapper" style="background:#fff;overflow:hidden;position:relative;transition:all 0.3s;">' +
            '          <iframe id="adsIframe" sandbox="allow-scripts allow-same-origin allow-forms" style="border:none;width:100%;height:100%;display:block;" allow="autoplay"></iframe>' +
            '          <!-- FPS 叠加层 -->' +
            '          <div id="adsFpsOverlay" style="position:absolute;top:4px;right:6px;background:rgba(0,0,0,0.7);color:#0f0;font-size:10px;font-family:monospace;padding:3px 6px;border-radius:4px;pointer-events:none;z-index:100;line-height:1.3;">FPS: --</div>' +
            '          <!-- 触控提示 -->' +
            '          <div id="adsTouchHint" style="position:absolute;pointer-events:none;display:none;z-index:99;"></div>' +
            '        </div>' +
            '        <!-- 底部导航条 -->' +
            '        <div style="height:20px;display:flex;align-items:center;justify-content:center;">' +
            '          <div style="width:80px;height:4px;background:rgba(255,255,255,0.3);border-radius:2px;"></div>' +
            '        </div>' +
            '      </div>' +
            '    </div>' +

            '    <!-- 右侧控制面板 -->' +
            '    <div style="flex:1;min-width:280px;background:#f8f9fa;border-radius:12px;padding:20px;border:1px solid #e2e8f0;">' +
            '      <h4 style="margin:0 0 16px 0;color:#2d3748;">\u2699\ufe0f 模拟控制</h4>' +

            '      <!-- 方向旋转 -->' +
            '      <div style="margin-bottom:20px;">' +
            '        <label style="font-size:13px;font-weight:600;color:#4a5568;display:block;margin-bottom:8px;">屏幕方向</label>' +
            '        <div style="display:flex;gap:8px;">' +
            '          <button id="adsRotatePortrait" class="ads-ctrl-btn active" data-ori="portrait" style="flex:1;padding:8px;background:var(--primary-color);color:#fff;border:none;border-radius:8px;cursor:pointer;font-size:13px;">\ud83d\udcf1 竖屏</button>' +
            '          <button id="adsRotateLandscape" class="ads-ctrl-btn" data-ori="landscape" style="flex:1;padding:8px;background:#e2e8f0;color:#4a5568;border:none;border-radius:8px;cursor:pointer;font-size:13px;">\ud83d\udd04 横屏</button>' +
            '        </div>' +
            '      </div>' +

            '      <!-- 性能数据 -->' +
            '      <div style="margin-bottom:20px;">' +
            '        <label style="font-size:13px;font-weight:600;color:#4a5568;display:block;margin-bottom:8px;">\ud83d\udcca 性能监控</label>' +
            '        <div style="background:white;border-radius:8px;padding:12px;border:1px solid #e2e8f0;">' +
            '          <div style="display:flex;justify-content:space-between;margin-bottom:6px;font-size:13px;">' +
            '            <span>实时 FPS</span><span id="adsLiveFPS" style="font-weight:bold;color:var(--success-color);">--</span>' +
            '          </div>' +
            '          <div style="display:flex;justify-content:space-between;margin-bottom:6px;font-size:13px;">' +
            '            <span>平均 FPS</span><span id="adsAvgFPS" style="font-weight:bold;color:var(--primary-color);">--</span>' +
            '          </div>' +
            '          <div style="display:flex;justify-content:space-between;margin-bottom:6px;font-size:13px;">' +
            '            <span>最低 FPS</span><span id="adsMinFPS" style="font-weight:bold;color:var(--warning-color);">--</span>' +
            '          </div>' +
            '          <div style="display:flex;justify-content:space-between;margin-bottom:6px;font-size:13px;">' +
            '            <span>1% Low FPS</span><span id="ads1PercentLow" style="font-weight:bold;color:var(--orange-color);">--</span>' +
            '          </div>' +
            '          <div style="display:flex;justify-content:space-between;margin-bottom:6px;font-size:13px;">' +
            '            <span>资源大小</span><span id="adsResourceSize" style="font-weight:bold;">--</span>' +
            '          </div>' +
            '          <div style="display:flex;justify-content:space-between;font-size:13px;">' +
            '            <span>运行时长</span><span id="adsElapsed" style="font-weight:bold;">0s</span>' +
            '          </div>' +
            '        </div>' +
            '      </div>' +

            '      <!-- 操作按钮 -->' +
            '      <div style="display:flex;flex-direction:column;gap:8px;">' +
            '        <button id="adsReloadBtn" class="btn-all-download" style="background:var(--primary-color);font-size:13px;padding:8px 16px;">\ud83d\udd04 重新加载</button>' +
            '        <button id="adsScreenshotBtn" class="btn-all-download" style="background:var(--teal-color);font-size:13px;padding:8px 16px;">\ud83d\udcf8 截图</button>' +
            '        <button id="adsCheckBtn" class="btn-all-download" style="background:var(--purple-color);font-size:13px;padding:8px 16px;">\u2705 合规检测</button>' +
            '        <button id="adsReportBtn" class="btn-all-download" style="background:var(--success-color);font-size:13px;padding:8px 16px;">\ud83d\udccb 生成报告</button>' +
            '        <button id="adsResetBtn" class="btn-all-download" style="background:#e74c3c;font-size:13px;padding:8px 16px;">\ud83d\uddd1\ufe0f 清除</button>' +
            '      </div>' +

            '      <!-- 事件日志 -->' +
            '      <div style="margin-top:20px;">' +
            '        <label style="font-size:13px;font-weight:600;color:#4a5568;display:block;margin-bottom:8px;">\ud83d\udccb 交互日志</label>' +
            '        <div id="adsEventLog" style="background:#1a1a2e;color:#0f0;border-radius:8px;padding:10px;max-height:120px;overflow-y:auto;font-family:monospace;font-size:11px;line-height:1.6;"></div>' +
            '      </div>' +
            '    </div>' +
            '  </div>' +

            '  <!-- 测试用例面板 -->' +
            '  <div style="margin-top:20px;background:#f8f9fa;border-radius:12px;padding:20px;border:1px solid #e2e8f0;">' +
            '    <h4 style="margin:0 0 12px 0;color:#2d3748;display:flex;align-items:center;gap:8px;">\ud83e\uddea 预设测试场景</h4>' +
            '    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:10px;">' + testCaseButtons + '</div>' +
            '  </div>' +
            '</div>' +

            // ---- 检测报告弹窗 ----
            '<div id="adsReportModal" style="display:none;position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.5);z-index:1000;align-items:center;justify-content:center;">' +
            '  <div style="background:white;border-radius:12px;padding:30px;max-width:600px;max-height:80vh;overflow-y:auto;width:90%;">' +
            '    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px;">' +
            '      <h3 style="margin:0;">\ud83d\udccb 合规检测报告</h3>' +
            '      <button id="adsReportClose" style="background:none;border:none;font-size:24px;cursor:pointer;">\u00d7</button>' +
            '    </div>' +
            '    <div id="adsReportContent"></div>' +
            '    <button id="adsReportDownload" class="btn-all-download" style="background:var(--success-color);margin-top:20px;width:100%;">\ud83d\udcbe 导出报告</button>' +
            '  </div>' +
            '</div>' +

            // ---- 调试控制台面板 ----
            '<div id="adsDebugPanel" style="display:none;position:fixed;bottom:20px;right:20px;width:520px;min-height:320px;max-height:60vh;background:#1e1e2e;border-radius:12px;box-shadow:0 8px 40px rgba(0,0,0,0.5);z-index:999;overflow:hidden;border:1px solid #333;flex-direction:column;">' +
            '  <!-- 标题栏 + 拖拽手柄 -->' +
            '  <div id="adsDebugHeader" style="display:flex;justify-content:space-between;align-items:center;padding:8px 14px;background:#2a2a3e;cursor:move;user-select:none;">' +
            '    <div style="display:flex;gap:4px;">' +
            '      <button class="ads-debug-tab active" data-tab="console" style="padding:4px 10px;border:none;border-radius:4px;background:#444;color:#ccc;cursor:pointer;font-size:11px;">Console</button>' +
            '      <button class="ads-debug-tab" data-tab="state" style="padding:4px 10px;border:none;border-radius:4px;background:transparent;color:#888;cursor:pointer;font-size:11px;">State</button>' +
            '      <button class="ads-debug-tab" data-tab="network" style="padding:4px 10px;border:none;border-radius:4px;background:transparent;color:#888;cursor:pointer;font-size:11px;">Network</button>' +
            '    </div>' +
            '    <div style="display:flex;gap:6px;align-items:center;">' +
            '      <span style="font-size:10px;color:#666;">拖拽移动 | Ctrl+~ 切换</span>' +
            '      <button id="adsDebugClose" style="background:none;border:none;color:#888;cursor:pointer;font-size:16px;">\u00d7</button>' +
            '    </div>' +
            '  </div>' +
            '  <!-- Console Tab -->' +
            '  <div id="adsDebugConsoleTab" class="ads-debug-content" style="flex:1;display:flex;flex-direction:column;overflow:hidden;">' +
            '    <div style="display:flex;gap:6px;padding:6px 10px;background:#252535;align-items:center;">' +
            '      <button id="adsDebugClearConsole" style="padding:2px 8px;border:1px solid #444;border-radius:4px;background:transparent;color:#888;cursor:pointer;font-size:10px;">清空</button>' +
            '      <select id="adsDebugFilter" style="padding:2px 6px;border:1px solid #444;border-radius:4px;background:#333;color:#ccc;font-size:10px;">' +
            '        <option value="all">全部</option>' +
            '        <option value="log">log</option>' +
            '        <option value="warn">warn</option>' +
            '        <option value="error">error</option>' +
            '      </select>' +
            '      <span style="font-size:10px;color:#666;margin-left:auto;">iframe console 拦截中</span>' +
            '    </div>' +
            '    <div id="adsDebugConsoleOutput" style="flex:1;overflow-y:auto;padding:8px 10px;font-family:monospace;font-size:11px;line-height:1.5;color:#ddd;"></div>' +
            '  </div>' +
            '  <!-- State Tab -->' +
            '  <div id="adsDebugStateTab" class="ads-debug-content" style="flex:1;display:none;overflow-y:auto;padding:10px;">' +
            '    <pre id="adsDebugStateOutput" style="font-family:monospace;font-size:11px;color:#0f0;margin:0;white-space:pre-wrap;word-break:break-all;"></pre>' +
            '  </div>' +
            '  <!-- Network Tab -->' +
            '  <div id="adsDebugNetworkTab" class="ads-debug-content" style="flex:1;display:none;overflow-y:auto;padding:10px;">' +
            '    <div style="display:flex;flex-direction:column;gap:12px;">' +
            '      <div>' +
            '        <label style="font-size:11px;color:#888;display:block;margin-bottom:4px;">模拟延迟 (ms)</label>' +
            '        <input type="range" id="adsDebugNetDelay" min="0" max="5000" value="0" step="100" style="width:100%;">' +
            '        <span id="adsDebugNetDelayVal" style="font-size:10px;color:#666;">0ms</span>' +
            '      </div>' +
            '      <div>' +
            '        <label style="font-size:11px;color:#888;display:block;margin-bottom:4px;">模拟丢包率 (%)</label>' +
            '        <input type="range" id="adsDebugNetLoss" min="0" max="100" value="0" step="5" style="width:100%;">' +
            '        <span id="adsDebugNetLossVal" style="font-size:10px;color:#666;">0%</span>' +
            '      </div>' +
            '      <div>' +
            '        <label style="font-size:11px;color:#888;display:block;margin-bottom:4px;">模拟带宽限制 (KB/s)</label>' +
            '        <input type="range" id="adsDebugNetBandwidth" min="10" max="10000" value="10000" step="10" style="width:100%;">' +
            '        <span id="adsDebugNetBandwidthVal" style="font-size:10px;color:#666;">无限制</span>' +
            '      </div>' +
            '      <button id="adsDebugNetApply" style="padding:6px 14px;background:var(--primary-color);color:#fff;border:none;border-radius:6px;cursor:pointer;font-size:12px;">应用网络条件</button>' +
            '      <button id="adsDebugNetReset" style="padding:6px 14px;background:#555;color:#fff;border:none;border-radius:6px;cursor:pointer;font-size:12px;">重置网络</button>' +
            '      <div id="adsDebugNetStatus" style="font-size:10px;color:#888;"></div>' +
            '    </div>' +
            '  </div>' +
            '</div>' +

            '<style>' +
            '  .ad-upload { border: 2px dashed var(--primary-color) !important; background:#f8fbfe; }' +
            '  .ads-platform-card { padding:12px 16px;border-radius:8px;border:2px solid;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:4px;transition:all 0.2s;min-width:90px; }' +
            '  .ads-platform-card:hover { transform:scale(1.05); }' +
            '  .ads-platform-card.active { box-shadow:0 0 0 3px currentColor; }' +
            '  .ads-ctrl-btn.active { background: var(--primary-color) !important; color: #fff !important; }' +
            '  @keyframes adsPulse { 0% { transform:translate(-50%,-50%) scale(0.5); opacity:1; } 100% { transform:translate(-50%,-50%) scale(1.5); opacity:0; } }' +
            '  @keyframes adsRipple { 0% { transform:translate(-50%,-50%) scale(0); opacity:0.5; } 100% { transform:translate(-50%,-50%) scale(2); opacity:0; } }' +
            '  .ads-report-pass { color:#2ecc71; }' +
            '  .ads-report-fail { color:#e74c3c; }' +
            '  .ads-report-warn { color:#f39c12; }' +
            '  .ads-debug-tab.active { background:#555 !important; color:#fff !important; }' +
            '  .ads-testcase-btn:hover { background:#eef2ff !important; border-color:var(--primary-color) !important; }' +
            '  .ads-log-warn { color:#fbbf24; }' +
            '  .ads-log-error { color:#f87171; }' +
            '</style>';
    },

    init: function () {
        var self = this;
        self._fpsHistory = [];
        self._frameTimings = [];
        self._currentFPS = 0;
        self._fps1PercentLow = 0;
        self._frameCount = 0;
        self._lastFrameTime = 0;
        self._isTouchMode = true;
        self._report = null;
        self._startTime = 0;
        self._debugConsoleVisible = false;
        self._extremeMode = false;
        self._extremeIntervals = [];
        self._consoleLogs = [];
        self._consoleFilter = 'all';
        self._networkCondition = null;

        // 平台选择
        document.querySelectorAll('.ads-platform-card').forEach(function(card) {
            card.addEventListener('click', function() {
                document.querySelectorAll('.ads-platform-card').forEach(function(c) { c.classList.remove('active'); });
                card.classList.add('active');
                self._platform = card.dataset.platform;
                self._log('平台切换: ' + self._platform);
            });
        });
        var firstCard = document.querySelector('.ads-platform-card');
        if (firstCard) firstCard.classList.add('active');

        // 设备预设切换
        var deviceSelect = document.getElementById('adsDeviceSelect');
        deviceSelect.addEventListener('change', function() {
            var d = self._findDevice(this.value);
            if (d) self._applyDevice(d);
        });

        // 自定义尺寸
        document.getElementById('adsWidth').addEventListener('input', function() {
            deviceSelect.value = '自定义';
            self._updateScreenSize();
        });
        document.getElementById('adsHeight').addEventListener('input', function() {
            deviceSelect.value = '自定义';
            self._updateScreenSize();
        });
        document.getElementById('adsDpr').addEventListener('change', function() {
            deviceSelect.value = '自定义';
            self._updateScreenSize();
        });

        // 浏览器选择
        document.getElementById('adsBrowserSelect').addEventListener('change', function() {
            var browser = self._findBrowser(this.value);
            if (browser) self._log('浏览器 UA: ' + browser.ua.substring(0, 60) + '...');
        });

        // 方向切换
        document.getElementById('adsRotatePortrait').addEventListener('click', function() { self._setOrientation('portrait'); });
        document.getElementById('adsRotateLandscape').addEventListener('click', function() { self._setOrientation('landscape'); });

        // 文件拖放
        self._setupDropZone();

        // URL 加载
        document.getElementById('adsLoadUrlBtn').addEventListener('click', function() {
            var url = document.getElementById('adsUrlInput').value.trim();
            if (url) self._loadFromURL(url);
        });

        // 操作按钮
        document.getElementById('adsReloadBtn').addEventListener('click', function() { self._reloadAd(); });
        document.getElementById('adsScreenshotBtn').addEventListener('click', function() { self._takeScreenshot(); });
        document.getElementById('adsCheckBtn').addEventListener('click', function() { self._runCheck(); });
        document.getElementById('adsReportBtn').addEventListener('click', function() { self._showReport(); });
        document.getElementById('adsResetBtn').addEventListener('click', function() { self._reset(); });

        // 报告弹窗关闭
        document.getElementById('adsReportClose').addEventListener('click', function() {
            document.getElementById('adsReportModal').style.display = 'none';
        });
        document.getElementById('adsReportDownload').addEventListener('click', function() {
            self._downloadReport();
        });

        // 屏幕点击
        var screenWrapper = document.getElementById('adsScreenWrapper');
        screenWrapper.addEventListener('click', function(e) {
            var rect = screenWrapper.getBoundingClientRect();
            var x = e.clientX - rect.left;
            var y = e.clientY - rect.top;
            self._log('点击: (' + Math.round(x) + ', ' + Math.round(y) + ')');
            self._showTouchHint(x, y);
        });

        // 屏幕滑动
        var lastY = 0;
        screenWrapper.addEventListener('touchstart', function(e) {
            lastY = e.touches[0].clientY;
        });
        screenWrapper.addEventListener('touchmove', function(e) {
            var deltaY = lastY - e.touches[0].clientY;
            if (Math.abs(deltaY) > 30) {
                self._log('滑动: ' + (deltaY > 0 ? '\u2193 下' : '\u2191 上'));
                lastY = e.touches[0].clientY;
            }
        });

        // ===== 极端测试模式 =====
        var extremeCheckbox = document.getElementById('adsExtremeMode');
        extremeCheckbox.addEventListener('change', function() {
            self._extremeMode = this.checked;
            var toggle = document.getElementById('adsExtremeToggle');
            if (this.checked) {
                toggle.style.background = '#e74c3c';
                toggle.querySelector('span').style.left = '22px';
                self._log('\u26a0\ufe0f 极端测试模式: 开启');
                self._injectExtremeConditions();
            } else {
                toggle.style.background = '#ccc';
                toggle.querySelector('span').style.left = '2px';
                self._log('极端测试模式: 关闭');
                self._removeExtremeConditions();
            }
        });

        // ===== 调试控制台 =====
        document.getElementById('adsToggleDebug').addEventListener('click', function() {
            self._toggleDebugConsole();
        });

        document.getElementById('adsDebugClose').addEventListener('click', function() {
            self._toggleDebugConsole();
        });

        // 调试面板 Tab 切换
        document.querySelectorAll('.ads-debug-tab').forEach(function(tab) {
            tab.addEventListener('click', function() {
                document.querySelectorAll('.ads-debug-tab').forEach(function(t) { t.classList.remove('active'); });
                this.classList.add('active');
                var tabName = this.dataset.tab;
                document.getElementById('adsDebugConsoleTab').style.display = tabName === 'console' ? 'flex' : 'none';
                document.getElementById('adsDebugStateTab').style.display = tabName === 'state' ? 'block' : 'none';
                document.getElementById('adsDebugNetworkTab').style.display = tabName === 'network' ? 'block' : 'none';
                if (tabName === 'state') self._updateStateTab();
            });
        });

        // Console 清空和过滤
        document.getElementById('adsDebugClearConsole').addEventListener('click', function() {
            self._consoleLogs = [];
            document.getElementById('adsDebugConsoleOutput').innerHTML = '';
        });
        document.getElementById('adsDebugFilter').addEventListener('click', function() {
            self._consoleFilter = this.value;
            self._renderConsoleOutput();
        });

        // Network 模拟
        document.getElementById('adsDebugNetDelay').addEventListener('input', function() {
            document.getElementById('adsDebugNetDelayVal').textContent = this.value + 'ms';
        });
        document.getElementById('adsDebugNetLoss').addEventListener('input', function() {
            document.getElementById('adsDebugNetLossVal').textContent = this.value + '%';
        });
        document.getElementById('adsDebugNetBandwidth').addEventListener('input', function() {
            var v = parseInt(this.value);
            document.getElementById('adsDebugNetBandwidthVal').textContent = v >= 10000 ? '无限制' : v + ' KB/s';
        });
        document.getElementById('adsDebugNetApply').addEventListener('click', function() {
            var delay = parseInt(document.getElementById('adsDebugNetDelay').value);
            var loss = parseInt(document.getElementById('adsDebugNetLoss').value);
            var bw = parseInt(document.getElementById('adsDebugNetBandwidth').value);
            self._applyNetworkCondition(delay, loss, bw);
        });
        document.getElementById('adsDebugNetReset').addEventListener('click', function() {
            self._applyNetworkCondition(0, 0, 10000);
            document.getElementById('adsDebugNetDelay').value = 0;
            document.getElementById('adsDebugNetLoss').value = 0;
            document.getElementById('adsDebugNetBandwidth').value = 10000;
            document.getElementById('adsDebugNetDelayVal').textContent = '0ms';
            document.getElementById('adsDebugNetLossVal').textContent = '0%';
            document.getElementById('adsDebugNetBandwidthVal').textContent = '无限制';
        });

        // 调试面板拖拽
        self._setupDebugDrag();

        // ===== 测试用例按钮 =====
        document.querySelectorAll('.ads-testcase-btn').forEach(function(btn) {
            btn.addEventListener('click', function() {
                var tcId = this.dataset.testcase;
                self._applyTestCase(tcId);
            });
        });

        // ===== 全局键盘快捷键 =====
        document.addEventListener('keydown', function(e) {
            if (e.ctrlKey && e.key === '`') {
                e.preventDefault();
                self._toggleDebugConsole();
            }
        });

        // ===== 全局错误捕获 =====
        window.addEventListener('error', function(e) {
            if (e.filename && e.filename.indexOf('ad-simulator') !== -1 ||
                (e.target && e.target.tagName === 'IFRAME' && e.target.id === 'adsIframe')) {
                self._addConsoleLog('error', '[全局错误] ' + e.message + ' at ' + e.filename + ':' + e.lineno + ':' + e.colno);
            }
        });

        // 时钟更新
        self._startClock();

        // State 自动更新
        self._stateUpdateTimer = setInterval(function() {
            if (self._debugConsoleVisible) {
                var stateTab = document.getElementById('adsDebugStateTab');
                if (stateTab && stateTab.style.display !== 'none') {
                    self._updateStateTab();
                }
            }
        }, 1000);

        // 默认设备
        self._applyDevice(self.DEVICES[1]);
    },

    // ===== 拖放区域 =====
    _setupDropZone: function() {
        var self = this;
        var zone = document.getElementById('adsDropZone');
        var input = document.getElementById('adsFileInput');

        zone.addEventListener('click', function() { input.click(); });

        zone.addEventListener('dragover', function(e) {
            e.preventDefault();
            zone.classList.add('dragover');
        });
        zone.addEventListener('dragleave', function() {
            zone.classList.remove('dragover');
        });
        zone.addEventListener('drop', function(e) {
            e.preventDefault();
            zone.classList.remove('dragover');
            if (e.dataTransfer.files.length > 0) {
                self._handleFiles(e.dataTransfer.files);
            }
        });

        input.addEventListener('change', function(e) {
            if (e.target.files[0]) self._handleFiles(e.target.files);
        });
    },

    _handleFiles: function(files) {
        var self = this;
        var file = files[0];
        Utils.setStatus('adsStatus', '解析中...');

        if (file.name.endsWith('.zip')) {
            self._log('检测到 ZIP 包，开始解压...');
            self._loadZip(file);
        } else if (file.name.endsWith('.html') || file.name.endsWith('.htm')) {
            self._log('检测到 HTML 文件');
            self._loadFromFile(file);
        } else {
            Utils.setStatus('adsStatus', '\u274c 不支持的文件格式，请上传 HTML 或 ZIP');
        }
    },

    _loadZip: function(file) {
        var self = this;
        self._log('读取 ZIP: ' + file.name + ' (' + Utils.formatSize(file.size) + ')');

        JSZip.loadAsync(file).then(function(zip) {
            var htmlFile = null;
            zip.forEach(function(path, zipEntry) {
                if (!zipEntry.dir && path.match(/index\.html?$/i)) {
                    htmlFile = path;
                }
            });

            if (!htmlFile) {
                zip.forEach(function(path, zipEntry) {
                    if (!zipEntry.dir && path.endsWith('.html')) {
                        htmlFile = path;
                    }
                });
            }

            if (htmlFile) {
                self._log('找到入口: ' + htmlFile);
                return zip.file(htmlFile).async('string');
            } else {
                throw new Error('ZIP 中未找到 index.html');
            }
        }).then(function(html) {
            self._adContent = html;
            self._resourceSize = file.size;
            document.getElementById('adsResourceSize').textContent = Utils.formatSize(file.size);
            self._loadContent(html);
        }).catch(function(err) {
            Utils.setStatus('adsStatus', '\u274c ZIP 解析失败: ' + err.message);
            self._log('错误: ' + err.message);
            self._addConsoleLog('error', 'ZIP 解析失败: ' + err.message);
        });
    },

    // ===== 设备 =====
    _findDevice: function(name) {
        return this.DEVICES.find(function(d) { return d.name === name; }) || null;
    },

    _findBrowser: function(name) {
        return this.BROWSERS.find(function(b) { return b.name === name; }) || null;
    },

    _applyDevice: function(d) {
        this._device = d;
        document.getElementById('adsWidth').value = d.width;
        document.getElementById('adsHeight').value = d.height;
        document.getElementById('adsDpr').value = d.dpr;
        document.getElementById('adsBrowserSelect').value = d.browser;
        this._updateScreenSize();
        this._log('设备: ' + d.name + ' ' + d.browser);
    },

    _updateScreenSize: function() {
        var w = parseInt(document.getElementById('adsWidth').value) || 375;
        var h = parseInt(document.getElementById('adsHeight').value) || 667;
        var dpr = parseFloat(document.getElementById('adsDpr').value) || 2;
        var isLandscape = document.getElementById('adsRotateLandscape').classList.contains('active');

        if (isLandscape) { var t = w; w = h; h = t; }

        var screenW = Math.min(w, 420);
        var scale = screenW / w;
        var screenH = h * scale;

        var wrapper = document.getElementById('adsScreenWrapper');
        wrapper.style.width = screenW + 'px';
        wrapper.style.height = screenH + 'px';

        var iframe = document.getElementById('adsIframe');
        iframe.style.width = w + 'px';
        iframe.style.height = h + 'px';
        iframe.style.transform = 'scale(' + scale + ')';
        iframe.style.transformOrigin = 'top left';
    },

    _setOrientation: function(ori) {
        var portraitBtn = document.getElementById('adsRotatePortrait');
        var landscapeBtn = document.getElementById('adsRotateLandscape');
        if (ori === 'portrait') {
            portraitBtn.classList.add('active');
            landscapeBtn.classList.remove('active');
        } else {
            landscapeBtn.classList.add('active');
            portraitBtn.classList.remove('active');
        }
        this._updateScreenSize();
        this._log('方向: ' + (ori === 'portrait' ? '竖屏' : '横屏'));
    },

    // ===== 加载广告 =====
    _loadFromFile: function(file) {
        var self = this;
        Utils.setStatus('adsStatus', '加载中...');
        self._log('文件: ' + file.name + ' (' + Utils.formatSize(file.size) + ')');
        self._resourceSize = file.size;
        document.getElementById('adsResourceSize').textContent = Utils.formatSize(file.size);

        var reader = new FileReader();
        reader.onload = function(e) {
            self._adContent = e.target.result;
            self._loadContent(e.target.result);
        };
        reader.onerror = function() {
            self._addConsoleLog('error', '文件读取失败: ' + file.name);
        };
        reader.readAsText(file);
    },

    _loadFromURL: function(url) {
        var self = this;
        Utils.setStatus('adsStatus', '加载中...');
        self._log('URL: ' + url);
        document.getElementById('adsIframe').src = url;
        self._onAdLoaded();
    },

    _loadContent: function(html) {
        var self = this;
        var blob = new Blob([html], { type: 'text/html' });
        var url = URL.createObjectURL(blob);
        var iframe = document.getElementById('adsIframe');

        // 在 onload 中注入 console 拦截
        iframe.onload = function() {
            self._onAdLoaded();
        };
        iframe.src = url;
    },

    _injectDebugScripts: function() {
        var self = this;
        var iframe = document.getElementById('adsIframe');
        try {
            var win = iframe.contentWindow;
            if (!win) {
                self._addConsoleLog('warn', '无法访问 iframe contentWindow (可能跨域)');
                return;
            }

            // 拦截 console
            var origLog = win.console.log;
            var origWarn = win.console.warn;
            var origError = win.console.error;

            win.console.log = function() {
                var args = Array.prototype.slice.call(arguments);
                self._addConsoleLog('log', '[iframe] ' + args.map(function(a) {
                    try { return typeof a === 'object' ? JSON.stringify(a) : String(a); } catch(e) { return String(a); }
                }).join(' '));
                if (origLog) origLog.apply(win.console, arguments);
            };

            win.console.warn = function() {
                var args = Array.prototype.slice.call(arguments);
                self._addConsoleLog('warn', '[iframe] ' + args.map(function(a) { return String(a); }).join(' '));
                if (origWarn) origWarn.apply(win.console, arguments);
            };

            win.console.error = function() {
                var args = Array.prototype.slice.call(arguments);
                self._addConsoleLog('error', '[iframe] ' + args.map(function(a) { return String(a); }).join(' '));
                if (origError) origError.apply(win.console, arguments);
            };

            // 全局错误捕获
            win.addEventListener('error', function(e) {
                self._addConsoleLog('error', '[iframe 异常] ' + e.message + ' at ' + (e.filename || '') + ':' + (e.lineno || ''));
            });

            self._addConsoleLog('log', '调试脚本已注入 iframe');
        } catch (e) {
            self._addConsoleLog('warn', '控制台注入失败(跨域): ' + e.message);
        }
    },

    _onAdLoaded: function() {
        var self = this;
        self._startTime = Date.now();
        Utils.showElement('adsSimulator');
        Utils.setStatus('adsStatus', '\u2705 广告已加载 [' + self._platform + ']，开始测试');
        self._log('广告加载完成 [' + self._platform + ']');

        // 注入调试脚本
        self._injectDebugScripts();

        // 如果极端模式开启，注入极端条件
        if (self._extremeMode) {
            self._injectExtremeConditions();
        }

        self._startFPSMonitor();
        self._startElapsedTimer();

        var iframe = document.getElementById('adsIframe');
        setTimeout(function() {
            var loadTime = Date.now() - self._startTime;
            self._log('渲染完成，耗时: ' + loadTime + 'ms');
            self._addConsoleLog('log', '渲染完成，耗时: ' + loadTime + 'ms');
            self._report = self._report || {};
            self._report.loadTime = loadTime;
            self._report.loadTimePassed = loadTime <= self.THRESHOLDS.loadTime;
        }, 100);
    },

    _reloadAd: function() {
        var iframe = document.getElementById('adsIframe');
        iframe.src = iframe.src;
        this._log('重新加载');
    },

    // ===== FPS 监控 (使用 requestAnimationFrame) =====
    _startFPSMonitor: function() {
        var self = this;
        self._stopFPSMonitor();
        self._fpsHistory = [];
        self._frameTimings = [];
        self._frameCount = 0;
        self._currentFPS = 0;
        self._fps1PercentLow = 0;

        var iframe = document.getElementById('adsIframe');
        var win = null;
        try {
            win = iframe.contentWindow;
        } catch(e) {
            win = null;
        }
        if (!win || !win.requestAnimationFrame) {
            win = window;
            self._addConsoleLog('warn', '无法访问 iframe rAF，使用主窗口 rAF 测量');
        }

        var rAF = win.requestAnimationFrame || win.webkitRequestAnimationFrame || win.mozRequestAnimationFrame;
        if (!rAF) {
            self._addConsoleLog('error', '浏览器不支持 requestAnimationFrame');
            return;
        }

        var frameCountInSecond = 0;
        var lastSecond = performance.now();
        var MAX_FRAME_TIMINGS = 600;

        function measureFrame(timestamp) {
            self._frameCount++;
            frameCountInSecond++;
            self._frameTimings.push(timestamp);
            if (self._frameTimings.length > MAX_FRAME_TIMINGS) {
                self._frameTimings.shift();
            }

            // 每秒统计一次
            if (timestamp - lastSecond >= 1000) {
                var fps = frameCountInSecond;
                fps = Math.min(fps, 120);
                self._currentFPS = fps;
                self._fpsHistory.push(fps);
                if (self._fpsHistory.length > 300) self._fpsHistory.shift();

                // 计算 1% Low FPS
                if (self._frameTimings.length >= 60) {
                    var sorted = self._frameTimings.slice().sort(function(a, b) { return a - b; });
                    var lowCount = Math.max(1, Math.floor(sorted.length * 0.01));
                    var frameIntervals = [];
                    for (var i = 1; i < sorted.length; i++) {
                        frameIntervals.push(sorted[i] - sorted[i - 1]);
                    }
                    frameIntervals.sort(function(a, b) { return b - a; });
                    var worstCount = Math.max(1, Math.floor(frameIntervals.length * 0.01));
                    var worstSum = 0;
                    for (var j = 0; j < worstCount; j++) {
                        worstSum += frameIntervals[j];
                    }
                    var avgWorst = worstSum / worstCount;
                    self._fps1PercentLow = avgWorst > 0 ? Math.round(1000 / avgWorst) : fps;
                }

                // 更新 UI
                var liveEl = document.getElementById('adsLiveFPS');
                var overlay = document.getElementById('adsFpsOverlay');
                if (liveEl) liveEl.textContent = fps;
                if (overlay) {
                    overlay.innerHTML = 'FPS: ' + fps + '<br><span style="font-size:9px;">1%Lo: ' + self._fps1PercentLow + '</span>';
                    if (fps >= 55) {
                        overlay.style.color = '#0f0';
                        if (liveEl) liveEl.style.color = 'var(--success-color)';
                    } else if (fps >= 30) {
                        overlay.style.color = '#ff0';
                        if (liveEl) liveEl.style.color = 'var(--warning-color)';
                    } else {
                        overlay.style.color = '#f00';
                        if (liveEl) liveEl.style.color = '#e74c3c';
                    }
                }

                if (self._fpsHistory.length > 0) {
                    var avg = Math.round(self._fpsHistory.reduce(function(a, b) { return a + b; }, 0) / self._fpsHistory.length);
                    var min = Math.min.apply(null, self._fpsHistory);
                    var avgEl = document.getElementById('adsAvgFPS');
                    var minEl = document.getElementById('adsMinFPS');
                    var lowEl = document.getElementById('ads1PercentLow');
                    if (avgEl) avgEl.textContent = avg;
                    if (minEl) minEl.textContent = min;
                    if (lowEl) lowEl.textContent = self._fps1PercentLow;
                }

                lastSecond = timestamp;
                frameCountInSecond = 0;
            }

            self._fpsRafId = rAF.call(win, measureFrame);
        }

        self._fpsRafId = rAF.call(win, measureFrame);
        self._addConsoleLog('log', 'FPS 监控已启动 (rAF 模式)');
    },

    _stopFPSMonitor: function() {
        if (this._fpsRafId) {
            var iframe = document.getElementById('adsIframe');
            var win = null;
            try { win = iframe && iframe.contentWindow; } catch(e) {}
            if (!win) win = window;
            var caf = win.cancelAnimationFrame || win.webkitCancelAnimationFrame || win.mozCancelAnimationFrame;
            if (caf) {
                try { caf.call(win, this._fpsRafId); } catch(e) {}
            }
            this._fpsRafId = null;
        }
        if (this._fpsTimer) {
            clearInterval(this._fpsTimer);
            this._fpsTimer = null;
        }
    },

    _startElapsedTimer: function() {
        var self = this;
        var start = Date.now();
        if (self._elapsedTimer) clearInterval(self._elapsedTimer);
        self._elapsedTimer = setInterval(function() {
            var elapsed = Math.floor((Date.now() - start) / 1000);
            document.getElementById('adsElapsed').textContent = elapsed + 's';
        }, 1000);
    },

    _startClock: function() {
        var self = this;
        setInterval(function() {
            var now = new Date();
            var el = document.getElementById('adsTimeDisplay');
            if (el) el.textContent = now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0');
        }, 1000);
    },

    // ===== 触控 =====
    _showTouchHint: function(x, y) {
        var hint = document.getElementById('adsTouchHint');
        hint.style.display = 'block';
        hint.style.left = x + 'px';
        hint.style.top = y + 'px';
        hint.innerHTML = '' +
            '<div style="position:absolute;left:' + x + 'px;top:' + y + 'px;width:40px;height:40px;border-radius:50%;background:rgba(102,126,234,0.3);animation:adsPulse 0.3s ease-out forwards;pointer-events:none;"></div>' +
            '<div style="position:absolute;left:' + x + 'px;top:' + y + 'px;width:60px;height:60px;border-radius:50%;border:2px solid rgba(102,126,234,0.5);animation:adsRipple 0.5s ease-out forwards;pointer-events:none;"></div>';
        setTimeout(function() { hint.style.display = 'none'; }, 500);
    },

    // ===== 合规检测 =====
    _runCheck: function() {
        var self = this;
        self._log('开始合规检测...');

        var report = {
            platform: self._platform,
            device: document.getElementById('adsDeviceSelect').value,
            browser: document.getElementById('adsBrowserSelect').value,
            loadTime: self._report ? self._report.loadTime : 0,
            resourceSize: self._resourceSize || 0,
            fps: {
                current: self._currentFPS,
                avg: self._fpsHistory.length > 0 ? Math.round(self._fpsHistory.reduce(function(a, b) { return a + b; }, 0) / self._fpsHistory.length) : 0,
                min: self._fpsHistory.length > 0 ? Math.min.apply(null, self._fpsHistory) : 0,
                onePercentLow: self._fps1PercentLow
            },
            checks: []
        };

        // 加载时间检测
        var loadTimeCheck = {
            name: '加载时间',
            value: report.loadTime + 'ms',
            threshold: '\u2264' + self.THRESHOLDS.loadTime + 'ms',
            passed: report.loadTime <= self.THRESHOLDS.loadTime,
            severity: report.loadTime > self.THRESHOLDS.loadTime ? 'fail' : 'pass'
        };
        if (report.loadTime > self.THRESHOLDS.loadTime * 1.5) loadTimeCheck.severity = 'fail';
        else if (report.loadTime > self.THRESHOLDS.loadTime) loadTimeCheck.severity = 'warn';
        report.checks.push(loadTimeCheck);

        // 资源大小检测
        var sizeCheck = {
            name: '资源大小',
            value: Utils.formatSize(report.resourceSize),
            threshold: '\u2264' + Utils.formatSize(self.THRESHOLDS.resourceSize),
            passed: report.resourceSize <= self.THRESHOLDS.resourceSize,
            severity: 'pass'
        };
        if (report.resourceSize > self.THRESHOLDS.resourceSize) sizeCheck.severity = 'fail';
        else if (report.resourceSize > self.THRESHOLDS.resourceSize * 0.8) sizeCheck.severity = 'warn';
        report.checks.push(sizeCheck);

        // FPS 平均检测
        var fpsAvgCheck = {
            name: '平均 FPS',
            value: report.fps.avg,
            threshold: '\u2265' + self.THRESHOLDS.fpsAvg,
            passed: report.fps.avg >= self.THRESHOLDS.fpsAvg,
            severity: 'pass'
        };
        if (report.fps.avg < self.THRESHOLDS.fpsMin) fpsAvgCheck.severity = 'fail';
        else if (report.fps.avg < self.THRESHOLDS.fpsAvg) fpsAvgCheck.severity = 'warn';
        report.checks.push(fpsAvgCheck);

        // FPS 最低值
        var fpsMinCheck = {
            name: '最低 FPS',
            value: report.fps.min,
            threshold: '\u2265' + self.THRESHOLDS.fpsMin,
            passed: report.fps.min >= self.THRESHOLDS.fpsMin,
            severity: 'pass'
        };
        if (report.fps.min < self.THRESHOLDS.fpsMin) fpsMinCheck.severity = 'fail';
        else if (report.fps.min < self.THRESHOLDS.fpsMin + 5) fpsMinCheck.severity = 'warn';
        report.checks.push(fpsMinCheck);

        // 1% Low FPS 检测
        var fpsLowCheck = {
            name: '1% Low FPS',
            value: report.fps.onePercentLow || '--',
            threshold: '\u2265' + self.THRESHOLDS.fpsMin,
            passed: report.fps.onePercentLow >= self.THRESHOLDS.fpsMin,
            severity: report.fps.onePercentLow >= self.THRESHOLDS.fpsMin ? 'pass' : (report.fps.onePercentLow >= 20 ? 'warn' : 'fail')
        };
        report.checks.push(fpsLowCheck);

        // 平台特定检测
        report.checks.push({
            name: '平台适配',
            value: report.platform.toUpperCase(),
            threshold: 'App/Mo/Unity/Google/Mintegral',
            passed: ['app', 'mo', 'unity', 'google', 'mintegral'].indexOf(report.platform) >= 0,
            severity: 'pass'
        });

        self._report = report;
        self._log('检测完成');
        self._addConsoleLog('log', '合规检测完成: ' + report.checks.filter(function(c){return c.passed;}).length + '/' + report.checks.length + ' 项通过');
        self._showReport();
    },

    _showReport: function() {
        var report = this._report;
        if (!report) {
            Utils.setStatus('adsStatus', '请先运行合规检测');
            return;
        }

        var passCount = report.checks.filter(function(c) { return c.passed; }).length;
        var failCount = report.checks.length - passCount;

        var html = '<div style="margin-bottom:20px;">' +
            '<div style="display:flex;gap:20px;margin-bottom:20px;">' +
            '<div style="flex:1;padding:16px;border-radius:8px;background:#2ecc7111;border:1px solid #2ecc71;text-align:center;">' +
            '<div style="font-size:28px;font-weight:bold;color:#2ecc71;">' + passCount + '</div>' +
            '<div style="font-size:12px;color:#666;">通过</div></div>' +
            '<div style="flex:1;padding:16px;border-radius:8px;background:#e74c3c11;border:1px solid #e74c3c;text-align:center;">' +
            '<div style="font-size:28px;font-weight:bold;color:#e74c3c;">' + failCount + '</div>' +
            '<div style="font-size:12px;color:#666;">不通过</div></div>' +
            '</div>' +

            '<div style="background:#f8f9fa;border-radius:8px;padding:16px;margin-bottom:16px;">' +
            '<div style="font-size:12px;color:#888;margin-bottom:4px;">测试环境</div>' +
            '<div style="font-size:13px;color:#333;">设备: ' + report.device + ' | 浏览器: ' + report.browser + ' | 平台: ' + report.platform.toUpperCase() + '</div>' +
            '</div>' +

            '<table style="width:100%;border-collapse:collapse;font-size:13px;">' +
            '<thead><tr style="background:#f0f0f0;"><th style="padding:8px;text-align:left;">检测项</th><th style="padding:8px;text-align:center;">结果</th><th style="padding:8px;text-align:center;">阈值</th><th style="padding:8px;text-align:center;">状态</th></tr></thead>' +
            '<tbody>';

        report.checks.forEach(function(check) {
            var statusIcon = check.passed ? '\u2705' : (check.severity === 'warn' ? '\u26a0\ufe0f' : '\u274c');
            var statusClass = check.passed ? 'ads-report-pass' : (check.severity === 'warn' ? 'ads-report-warn' : 'ads-report-fail');
            html += '<tr style="border-bottom:1px solid #eee;">' +
                '<td style="padding:10px;">' + check.name + '</td>' +
                '<td style="padding:10px;text-align:center;font-weight:bold;" class="' + statusClass + '">' + check.value + '</td>' +
                '<td style="padding:10px;text-align:center;color:#888;">' + check.threshold + '</td>' +
                '<td style="padding:10px;text-align:center;">' + statusIcon + '</td>' +
                '</tr>';
        });

        html += '</tbody></table>';
        document.getElementById('adsReportContent').innerHTML = html;
        document.getElementById('adsReportModal').style.display = 'flex';
    },

    _downloadReport: function() {
        var report = this._report;
        if (!report) return;

        var html = '<!DOCTYPE html><html><head><meta charset="UTF-8"><title>广告合规检测报告</title></head>' +
            '<body style="font-family:Arial,sans-serif;padding:40px;max-width:800px;margin:0 auto;">' +
            '<h1 style="color:#2c3e50;">\ud83d\udccb 可试玩广告合规检测报告</h1>' +
            '<p style="color:#888;">生成时间: ' + new Date().toLocaleString('zh-CN') + '</p>' +
            '<hr style="margin:20px 0;">' +
            '<h2 style="color:#333;">测试环境</h2>' +
            '<ul>' +
            '<li>平台: ' + report.platform.toUpperCase() + '</li>' +
            '<li>设备: ' + report.device + '</li>' +
            '<li>浏览器: ' + report.browser + '</li>' +
            '<li>加载时间: ' + report.loadTime + 'ms</li>' +
            '<li>资源大小: ' + Utils.formatSize(report.resourceSize) + '</li>' +
            '<li>平均 FPS: ' + report.fps.avg + '</li>' +
            '<li>最低 FPS: ' + report.fps.min + '</li>' +
            '<li>1% Low FPS: ' + (report.fps.onePercentLow || '--') + '</li>' +
            '</ul>' +
            '<h2 style="color:#333;">检测结果</h2>' +
            '<table style="width:100%;border-collapse:collapse;">' +
            '<thead><tr style="background:#3498db;color:white;"><th style="padding:12px;text-align:left;">检测项</th><th style="padding:12px;text-align:center;">结果</th><th style="padding:12px;text-align:center;">阈值</th><th style="padding:12px;text-align:center;">状态</th></tr></thead>' +
            '<tbody>';

        report.checks.forEach(function(check) {
            var status = check.passed ? '\u2705 通过' : (check.severity === 'warn' ? '\u26a0\ufe0f 警告' : '\u274c 不通过');
            var bg = check.passed ? '#2ecc7111' : (check.severity === 'warn' ? '#f39c1211' : '#e74c3c11');
            html += '<tr style="background:' + bg + ';border-bottom:1px solid #ddd;">' +
                '<td style="padding:12px;">' + check.name + '</td>' +
                '<td style="padding:12px;text-align:center;font-weight:bold;">' + check.value + '</td>' +
                '<td style="padding:12px;text-align:center;color:#888;">' + check.threshold + '</td>' +
                '<td style="padding:12px;text-align:center;">' + status + '</td>' +
                '</tr>';
        });

        html += '</tbody></table>' +
            '<hr style="margin:30px 0;">' +
            '<p style="color:#aaa;font-size:12px;text-align:center;">由可试玩广告模拟器 Pro 生成</p>' +
            '</body></html>';

        var blob = new Blob([html], { type: 'text/html' });
        saveAs(blob, 'ad-check-report-' + Date.now() + '.html');
        this._log('报告已导出');
        this._addConsoleLog('log', '报告已导出: ad-check-report-' + Date.now() + '.html');
    },

    // ===== 截图 =====
    _takeScreenshot: function() {
        var self = this;
        var iframe = document.getElementById('adsIframe');
        try {
            var canvas = document.createElement('canvas');
            var wrapper = document.getElementById('adsScreenWrapper');
            var w = wrapper.offsetWidth * 2;
            var h = wrapper.offsetHeight * 2;
            canvas.width = w;
            canvas.height = h;
            var ctx = canvas.getContext('2d');

            ctx.fillStyle = '#1a1a2e';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = '#fff';
            ctx.fillRect(24 * 2, 40 * 2, canvas.width - 48 * 2, canvas.height - 72 * 2);

            canvas.toBlob(function(blob) {
                saveAs(blob, 'ad-screenshot-' + Date.now() + '.png');
                self._log('截图已保存');
                self._addConsoleLog('log', '截图已保存');
            });
        } catch (e) {
            self._log('截图失败: ' + e.message);
            self._addConsoleLog('error', '截图失败: ' + e.message);
        }
    },

    // ===== 日志 =====
    _log: function(msg) {
        var now = new Date();
        var time = now.getHours().toString().padStart(2, '0') + ':' +
                   now.getMinutes().toString().padStart(2, '0') + ':' +
                   now.getSeconds().toString().padStart(2, '0');
        var log = document.getElementById('adsEventLog');
        if (log) {
            log.innerHTML += '<div style="color:#aaa;">[' + time + ']</div><div>' + msg + '</div>';
            log.scrollTop = log.scrollHeight;
        }
    },

    // ===== 调试控制台 =====
    _toggleDebugConsole: function() {
        var self = this;
        self._debugConsoleVisible = !self._debugConsoleVisible;
        var panel = document.getElementById('adsDebugPanel');
        if (panel) {
            panel.style.display = self._debugConsoleVisible ? 'flex' : 'none';
        }
        if (self._debugConsoleVisible) {
            self._updateStateTab();
            self._addConsoleLog('log', '调试控制台已打开');
        }
    },

    _addConsoleLog: function(level, message) {
        var self = this;
        var now = new Date();
        var time = now.getHours().toString().padStart(2, '0') + ':' +
                   now.getMinutes().toString().padStart(2, '0') + ':' +
                   now.getSeconds().toString().padStart(2, '0') + '.' +
                   now.getMilliseconds().toString().padStart(3, '0');
        self._consoleLogs.push({ time: time, level: level, message: message });
        if (self._consoleLogs.length > 500) self._consoleLogs.shift();
        self._renderConsoleOutput();
    },

    _renderConsoleOutput: function() {
        var self = this;
        var output = document.getElementById('adsDebugConsoleOutput');
        if (!output) return;

        var logs = self._consoleLogs;
        if (self._consoleFilter !== 'all') {
            logs = logs.filter(function(l) { return l.level === self._consoleFilter; });
        }

        var html = '';
        var recentLogs = logs.slice(-200);
        for (var i = 0; i < recentLogs.length; i++) {
            var l = recentLogs[i];
            var color = '#ddd';
            var prefix = '';
            if (l.level === 'warn') { color = '#fbbf24'; prefix = '\u26a0\ufe0f '; }
            else if (l.level === 'error') { color = '#f87171'; prefix = '\u274c '; }
            else if (l.level === 'log') { color = '#4ade80'; prefix = '\u2139\ufe0f '; }
            html += '<div style="color:#666;display:inline;">[' + l.time + ']</div> ' +
                    '<span style="color:' + color + ';">' + prefix + self._escapeHtml(l.message) + '</span><br>';
        }
        output.innerHTML = html;
        output.scrollTop = output.scrollHeight;
    },

    _updateStateTab: function() {
        var self = this;
        var output = document.getElementById('adsDebugStateOutput');
        if (!output) return;

        var state = {
            platform: self._platform,
            device: self._device ? self._device.name : 'null',
            browser: document.getElementById('adsBrowserSelect') ? document.getElementById('adsBrowserSelect').value : '--',
            extremeMode: self._extremeMode,
            currentFPS: self._currentFPS,
            fps1PercentLow: self._fps1PercentLow,
            fpsAvg: self._fpsHistory.length > 0 ? Math.round(self._fpsHistory.reduce(function(a,b){return a+b;},0) / self._fpsHistory.length) : 0,
            fpsMin: self._fpsHistory.length > 0 ? Math.min.apply(null, self._fpsHistory) : 0,
            fpsHistoryLen: self._fpsHistory.length,
            frameTimingsLen: self._frameTimings.length,
            resourceSize: Utils.formatSize(self._resourceSize || 0),
            loadTime: self._report ? self._report.loadTime + 'ms' : '--',
            consoleLogsCount: self._consoleLogs.length,
            networkCondition: self._networkCondition || '正常',
            adContentLen: self._adContent ? self._adContent.length : 0
        };

        output.textContent = JSON.stringify(state, null, 2);
    },

    _escapeHtml: function(str) {
        var div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    },

    _setupDebugDrag: function() {
        var panel = document.getElementById('adsDebugPanel');
        var header = document.getElementById('adsDebugHeader');
        if (!panel || !header) return;

        var isDragging = false;
        var startX, startY, startLeft, startTop;

        header.addEventListener('mousedown', function(e) {
            if (e.target.tagName === 'BUTTON') return;
            isDragging = true;
            startX = e.clientX;
            startY = e.clientY;
            var rect = panel.getBoundingClientRect();
            startLeft = rect.left;
            startTop = rect.top;
            panel.style.right = 'auto';
            panel.style.bottom = 'auto';
            panel.style.left = startLeft + 'px';
            panel.style.top = startTop + 'px';
            e.preventDefault();
        });

        document.addEventListener('mousemove', function(e) {
            if (!isDragging) return;
            var dx = e.clientX - startX;
            var dy = e.clientY - startY;
            panel.style.left = (startLeft + dx) + 'px';
            panel.style.top = (startTop + dy) + 'px';
        });

        document.addEventListener('mouseup', function() {
            isDragging = false;
        });
    },

    // ===== 网络条件模拟 =====
    _applyNetworkCondition: function(delay, loss, bandwidth) {
        var self = this;
        self._networkCondition = { delay: delay, loss: loss, bandwidth: bandwidth };
        var status = document.getElementById('adsDebugNetStatus');
        if (status) {
            status.textContent = '已应用: 延迟=' + delay + 'ms, 丢包=' + loss + '%, 带宽=' + (bandwidth >= 10000 ? '无限制' : bandwidth + 'KB/s');
            status.style.color = '#4ade80';
        }

        self._addConsoleLog('log', '网络条件已应用: 延迟=' + delay + 'ms, 丢包=' + loss + '%, 带宽=' + (bandwidth >= 10000 ? '无限制' : bandwidth + 'KB/s'));

        // 注入到 iframe 模拟网络条件
        var iframe = document.getElementById('adsIframe');
        try {
            var win = iframe.contentWindow;
            if (!win) return;

            // 拦截 fetch
            if (win.fetch && delay > 0) {
                var origFetch = win.fetch;
                win.fetch = function(url, options) {
                    return new Promise(function(resolve, reject) {
                        setTimeout(function() {
                            if (loss > 0 && Math.random() * 100 < loss) {
                                reject(new Error('Simulated packet loss (' + loss + '%)'));
                                return;
                            }
                            origFetch.call(win, url, options).then(resolve).catch(reject);
                        }, delay);
                    });
                };
            }

            // 拦截 XMLHttpRequest
            if (win.XMLHttpRequest && delay > 0) {
                var OrigXHR = win.XMLHttpRequest;
                win.XMLHttpRequest = function() {
                    var xhr = new OrigXHR();
                    var origOpen = xhr.open;
                    var origSend = xhr.send;
                    xhr.open = function(method, url) {
                        xhr._url = url;
                        xhr._method = method;
                        return origOpen.apply(xhr, arguments);
                    };
                    xhr.send = function() {
                        var args = arguments;
                        setTimeout(function() {
                            if (loss > 0 && Math.random() * 100 < loss) {
                                xhr.dispatchEvent(new Event('error'));
                                return;
                            }
                            origSend.apply(xhr, args);
                        }, delay);
                    };
                    return xhr;
                };
            }
        } catch(e) {
            self._addConsoleLog('warn', '网络条件注入失败(跨域): ' + e.message);
        }
    },

    // ===== 极端测试模式 =====
    _injectExtremeConditions: function() {
        var self = this;
        self._removeExtremeConditions();
        var iframe = document.getElementById('adsIframe');
        try {
            var win = iframe.contentWindow;
            if (!win) return;

            self._addConsoleLog('warn', '极端测试条件注入中...');

            // 1. rAF 节流 - 模拟低帧率
            var origRAF = win.requestAnimationFrame;
            var throttleRAF = false;
            var rafCallCount = 0;
            win.requestAnimationFrame = function(cb) {
                rafCallCount++;
                if (throttleRAF && rafCallCount % 3 === 0) {
                    // 每 3 帧才执行一次，模拟低帧率
                    return origRAF.call(win, function(t) {
                        setTimeout(function() { cb(t + 16); }, 50);
                    });
                }
                return origRAF.call(win, cb);
            };
            self._extremeIntervals.push(function() {
                win.requestAnimationFrame = origRAF;
            });

            // 2. 内存压力模拟 - 周期创建大对象
            var memInterval = setInterval(function() {
                try {
                    var arr = new Array(50000);
                    for (var i = 0; i < 50000; i++) arr[i] = { data: new Array(20).fill('memory_pressure_' + i) };
                    setTimeout(function() { arr = null; }, 2000);
                } catch(e) {}
            }, 5000);
            self._extremeIntervals.push(function() { clearInterval(memInterval); });

            // 3. 触控洪水模拟
            var touchInterval = setInterval(function() {
                var wrapper = document.getElementById('adsScreenWrapper');
                if (!wrapper) return;
                var rect = wrapper.getBoundingClientRect();
                var x = rect.left + Math.random() * rect.width;
                var y = rect.top + Math.random() * rect.height;
                var touchEvent = new TouchEvent('touchstart', {
                    bubbles: true,
                    touches: [new Touch({ identifier: Date.now(), target: wrapper, clientX: x, clientY: y })]
                });
                wrapper.dispatchEvent(touchEvent);
            }, 100);
            self._extremeIntervals.push(function() { clearInterval(touchInterval); });

            // 4. 资源加载失败模拟 - 随机拦截 img 加载
            var origCreateElement = win.document.createElement.bind(win.document);
            win.document.createElement = function(tag) {
                var el = origCreateElement(tag);
                if (tag.toLowerCase() === 'img') {
                    var origSetAttr = el.setAttribute.bind(el);
                    el.setAttribute = function(name, value) {
                        if (name === 'src' && Math.random() < 0.15) {
                            self._addConsoleLog('warn', '模拟资源加载失败: ' + value);
                            value = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
                        }
                        return origSetAttr(name, value);
                    };
                }
                return el;
            };
            self._extremeIntervals.push(function() {
                win.document.createElement = origCreateElement;
            });

            // 5. 离线断网模拟
            if (document.getElementById('adsNetwork') && document.getElementById('adsNetwork').value === 'offline') {
                if (win.navigator && Object.defineProperty) {
                    try {
                        Object.defineProperty(win.navigator, 'onLine', { get: function() { return false; }, configurable: true });
                    } catch(e) {}
                }
                self._extremeIntervals.push(function() {
                    try {
                        Object.defineProperty(win.navigator, 'onLine', { get: function() { return true; }, configurable: true });
                    } catch(e) {}
                });
            }

            self._addConsoleLog('warn', '极端测试条件已注入 (rAF节流+内存压力+触控洪水+资源拦截)');
        } catch(e) {
            self._addConsoleLog('error', '极端条件注入失败: ' + e.message);
        }
    },

    _removeExtremeConditions: function() {
        var self = this;
        while (self._extremeIntervals.length > 0) {
            var cleanup = self._extremeIntervals.pop();
            try { cleanup(); } catch(e) {}
        }
        self._addConsoleLog('log', '极端测试条件已清除');
    },

    // ===== 测试用例 =====
    _applyTestCase: function(tcId) {
        var self = this;
        var tc = self.TEST_CASES.find(function(t) { return t.id === tcId; });
        if (!tc) return;

        self._log('\ud83e\uddea 应用测试场景: ' + tc.name);

        // 应用设备
        if (tc.device) {
            var deviceSelect = document.getElementById('adsDeviceSelect');
            if (deviceSelect) deviceSelect.value = tc.device;
            var d = self._findDevice(tc.device);
            if (d) self._applyDevice(d);
        }

        // 应用浏览器
        if (tc.browser) {
            var browserSelect = document.getElementById('adsBrowserSelect');
            if (browserSelect) browserSelect.value = tc.browser;
        }

        // 应用网络
        if (tc.network) {
            var netSelect = document.getElementById('adsNetwork');
            if (netSelect) netSelect.value = tc.network;
            document.getElementById('adsNetworkType').textContent = tc.network.toUpperCase();
        }

        // 应用电池
        if (tc.battery) {
            var batSelect = document.getElementById('adsBattery');
            if (batSelect) batSelect.value = tc.battery;
            document.getElementById('adsBatteryText').textContent = tc.battery + '%';
        }

        // 应用方向
        if (tc.orientation) {
            self._setOrientation(tc.orientation);
        }

        // 极端模式
        if (tc.extreme) {
            var extremeCheck = document.getElementById('adsExtremeMode');
            if (extremeCheck && !extremeCheck.checked) {
                extremeCheck.checked = true;
                var toggle = document.getElementById('adsExtremeToggle');
                if (toggle) {
                    toggle.style.background = '#e74c3c';
                    toggle.querySelector('span').style.left = '22px';
                }
                self._extremeMode = true;
                if (self._adContent) {
                    self._injectExtremeConditions();
                }
            }
        }

        // 长时间运行特殊处理
        if (tc.extremePreset === 'longrun') {
            self._addConsoleLog('log', '长时间运行测试启动，将在 10 分钟后自动记录性能数据');
            setTimeout(function() {
                self._addConsoleLog('log', '[长时间运行测试] 10分钟标记: FPS avg=' + self._fpsHistory.reduce(function(a,b){return a+b;},0)/self._fpsHistory.length);
                self._runCheck();
            }, 600000);
        }

        self._addConsoleLog('log', '测试场景已应用: ' + tc.name + ' | 设备=' + tc.device + ' | 极端=' + tc.extreme);
    },

    // ===== 重置 =====
    _reset: function() {
        this._stopFPSMonitor();
        this._removeExtremeConditions();
        if (this._elapsedTimer) { clearInterval(this._elapsedTimer); this._elapsedTimer = null; }
        this._fpsHistory = [];
        this._frameTimings = [];
        this._currentFPS = 0;
        this._fps1PercentLow = 0;
        this._report = null;
        this._adContent = null;
        this._resourceSize = 0;
        this._networkCondition = null;
        this._consoleLogs = [];
        this._frameCount = 0;
        this._extremeMode = false;
        var extremeCheck = document.getElementById('adsExtremeMode');
        if (extremeCheck) extremeCheck.checked = false;
        var toggle = document.getElementById('adsExtremeToggle');
        if (toggle) {
            toggle.style.background = '#ccc';
            toggle.querySelector('span').style.left = '2px';
        }
        document.getElementById('adsIframe').src = 'about:blank';
        Utils.hideElement('adsSimulator');
        Utils.setStatus('adsStatus', '');
        var liveEl = document.getElementById('adsLiveFPS');
        var avgEl = document.getElementById('adsAvgFPS');
        var minEl = document.getElementById('adsMinFPS');
        var lowEl = document.getElementById('ads1PercentLow');
        if (liveEl) liveEl.textContent = '--';
        if (avgEl) avgEl.textContent = '--';
        if (minEl) minEl.textContent = '--';
        if (lowEl) lowEl.textContent = '--';
        document.getElementById('adsResourceSize').textContent = '--';
        document.getElementById('adsElapsed').textContent = '0s';
        document.getElementById('adsEventLog').innerHTML = '';
        var debugOutput = document.getElementById('adsDebugConsoleOutput');
        if (debugOutput) debugOutput.innerHTML = '';
        this._log('已重置');
    },

    destroy: function() {
        this._stopFPSMonitor();
        this._removeExtremeConditions();
        if (this._elapsedTimer) { clearInterval(this._elapsedTimer); this._elapsedTimer = null; }
        if (this._stateUpdateTimer) { clearInterval(this._stateUpdateTimer); this._stateUpdateTimer = null; }
        this._fpsHistory = [];
        this._frameTimings = [];
        this._consoleLogs = [];
        this._extremeIntervals = [];
        this._networkCondition = null;
        document.getElementById('adsIframe').src = 'about:blank';
        Utils.resetFileInput('adsFileInput');
        Utils.hideElement('adsSimulator');
        Utils.setStatus('adsStatus', '');
        var debugPanel = document.getElementById('adsDebugPanel');
        if (debugPanel) debugPanel.style.display = 'none';
        this._debugConsoleVisible = false;
    }
});
