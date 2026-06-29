import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useAllPosts, createPost, updatePost, deletePost } from "@/hooks/usePosts";
import { useAllGames, createGame, updateGame, deleteGame } from "@/hooks/useGames";
import { useAllBookmarks, createBookmark, updateBookmark, deleteBookmark } from "@/hooks/useBookmarks";
import { useProfile, updateProfile } from "@/hooks/useProfile";
import { Post } from "@/lib/posts";
import { Game, DevLog } from "@/lib/games";
import { Bookmark } from "@/lib/bookmarks";
import { Profile, TimelineItem } from "@/lib/profile";

type Tab = "posts" | "games" | "bookmarks" | "profile";

const emptyPost: Omit<Post, "id"> = {
  slug: "",
  title: "",
  date: new Date().toISOString().split("T")[0],
  summary: "",
  tags: [],
  featured: false,
  readingTime: 0,
  content: "",
};

const emptyGame: Omit<Game, "id"> = {
  slug: "",
  title: "",
  genre: "",
  summary: "",
  description: "",
  cover: "",
  demoUrl: "",
  tags: [],
  devLogs: [],
  featured: false,
};

const emptyBookmark: Omit<Bookmark, "id"> = {
  title: "",
  url: "",
  description: "",
  category: "",
  favicon: "",
};

export default function Admin() {
  const { user, logout, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<Tab>("posts");
  const [message, setMessage] = useState("");
  const [tagInput, setTagInput] = useState("");

  // Posts
  const { posts, loading: postsLoading, error: postsError } = useAllPosts();
  const [editingPost, setEditingPost] = useState<Post | Omit<Post, "id"> | null>(null);
  const [savingPost, setSavingPost] = useState(false);

  // Games
  const { games, loading: gamesLoading, error: gamesError } = useAllGames();
  const [editingGame, setEditingGame] = useState<Game | Omit<Game, "id"> | null>(null);
  const [savingGame, setSavingGame] = useState(false);
  const [gameTagInput, setGameTagInput] = useState("");
  const [editingLogIndex, setEditingLogIndex] = useState<number | null>(null);
  const [logInput, setLogInput] = useState<DevLog>({ title: "", date: "", content: "" });

  // Bookmarks
  const { bookmarks, loading: bookmarksLoading, error: bookmarksError } = useAllBookmarks();
  const [editingBookmark, setEditingBookmark] = useState<Bookmark | Omit<Bookmark, "id"> | null>(null);
  const [savingBookmark, setSavingBookmark] = useState(false);

  // Profile
  const { profile: loadedProfile } = useProfile();
  const [editingProfile, setEditingProfile] = useState<Profile | null>(null);
  const [savingProfile, setSavingProfile] = useState(false);

  if (authLoading) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
        <p className="text-ink/60">加载中...</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-[50vh] flex flex-col items-center justify-center px-4">
        <p className="text-ink/60 mb-4">请先登录管理员账号</p>
        <button
          onClick={() => navigate("/login")}
          className="px-6 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors"
        >
          去登录
        </button>
      </div>
    );
  }

  // ===== Posts handlers =====
  const handleSavePost = async () => {
    if (!editingPost) return;
    if (!editingPost.title || !editingPost.slug || !editingPost.content) {
      setMessage("请填写标题、slug 和正文");
      return;
    }
    setSavingPost(true);
    setMessage("");
    try {
      if ("id" in editingPost && editingPost.id) {
        await updatePost(editingPost.id, editingPost);
        setMessage("文章已更新");
      } else {
        await createPost(editingPost);
        setMessage("文章已发布");
      }
      setEditingPost(null);
      setTimeout(() => window.location.reload(), 800);
    } catch (err) {
      setMessage("保存失败：" + (err as Error).message);
    } finally {
      setSavingPost(false);
    }
  };

  const handleDeletePost = async (id: string) => {
    if (!confirm("确定要删除这篇文章吗？")) return;
    try {
      await deletePost(id);
      window.location.reload();
    } catch (err) {
      setMessage("删除失败：" + (err as Error).message);
    }
  };

  const addPostTag = () => {
    const tag = tagInput.trim();
    if (!tag || !editingPost) return;
    const currentTags = editingPost.tags || [];
    if (currentTags.includes(tag)) return;
    setEditingPost({ ...editingPost, tags: [...currentTags, tag] });
    setTagInput("");
  };

  const removePostTag = (tag: string) => {
    if (!editingPost) return;
    setEditingPost({ ...editingPost, tags: (editingPost.tags || []).filter((t) => t !== tag) });
  };

  // ===== Games handlers =====
  const handleSaveGame = async () => {
    if (!editingGame) return;
    if (!editingGame.title || !editingGame.slug) {
      setMessage("请填写游戏名称和 slug");
      return;
    }
    setSavingGame(true);
    setMessage("");
    try {
      if ("id" in editingGame && editingGame.id) {
        await updateGame(editingGame.id, editingGame);
        setMessage("游戏已更新");
      } else {
        await createGame(editingGame);
        setMessage("游戏已添加");
      }
      setEditingGame(null);
      setTimeout(() => window.location.reload(), 800);
    } catch (err) {
      setMessage("保存失败：" + (err as Error).message);
    } finally {
      setSavingGame(false);
    }
  };

  const handleDeleteGame = async (id: string) => {
    if (!confirm("确定要删除这个游戏吗？")) return;
    try {
      await deleteGame(id);
      window.location.reload();
    } catch (err) {
      setMessage("删除失败：" + (err as Error).message);
    }
  };

  const addGameTag = () => {
    const tag = gameTagInput.trim();
    if (!tag || !editingGame) return;
    const currentTags = editingGame.tags || [];
    if (currentTags.includes(tag)) return;
    setEditingGame({ ...editingGame, tags: [...currentTags, tag] });
    setGameTagInput("");
  };

  const removeGameTag = (tag: string) => {
    if (!editingGame) return;
    setEditingGame({ ...editingGame, tags: (editingGame.tags || []).filter((t) => t !== tag) });
  };

  // ===== DevLog handlers =====
  const addDevLog = () => {
    if (!editingGame || !logInput.title) return;
    const newLog: DevLog = { ...logInput, id: Date.now().toString() };
    setEditingGame({ ...editingGame, devLogs: [...(editingGame.devLogs || []), newLog] });
    setLogInput({ title: "", date: new Date().toISOString().split("T")[0], content: "" });
  };

  const removeDevLog = (index: number) => {
    if (!editingGame) return;
    const logs = [...(editingGame.devLogs || [])];
    logs.splice(index, 1);
    setEditingGame({ ...editingGame, devLogs: logs });
  };

  const updateDevLog = (index: number, field: keyof DevLog, value: string) => {
    if (!editingGame) return;
    const logs = [...(editingGame.devLogs || [])];
    logs[index] = { ...logs[index], [field]: value };
    setEditingGame({ ...editingGame, devLogs: logs });
  };

  // ===== Bookmarks handlers =====
  const handleSaveBookmark = async () => {
    if (!editingBookmark) return;
    if (!editingBookmark.title || !editingBookmark.url) {
      setMessage("请填写标题和网址");
      return;
    }
    setSavingBookmark(true);
    setMessage("");
    try {
      if ("id" in editingBookmark && editingBookmark.id) {
        await updateBookmark(editingBookmark.id, editingBookmark);
        setMessage("收藏已更新");
      } else {
        await createBookmark(editingBookmark);
        setMessage("收藏已添加");
      }
      setEditingBookmark(null);
      setTimeout(() => window.location.reload(), 800);
    } catch (err) {
      setMessage("保存失败：" + (err as Error).message);
    } finally {
      setSavingBookmark(false);
    }
  };

  const handleDeleteBookmark = async (id: string) => {
    if (!confirm("确定要删除这个收藏吗？")) return;
    try {
      await deleteBookmark(id);
      window.location.reload();
    } catch (err) {
      setMessage("删除失败：" + (err as Error).message);
    }
  };

  // ===== Profile handlers =====
  const handleSaveProfile = async () => {
    if (!editingProfile) return;
    setSavingProfile(true);
    setMessage("");
    try {
      await updateProfile(editingProfile);
      setEditingProfile(null);
      setMessage("资料已更新");
      setTimeout(() => window.location.reload(), 800);
    } catch (err) {
      setMessage("保存失败：" + (err as Error).message);
    } finally {
      setSavingProfile(false);
    }
  };

  // ===== Post editing view =====
  if (editingPost) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold font-serif text-ink">
            {"id" in editingPost ? "编辑文章" : "写文章"}
          </h1>
          <button onClick={() => setEditingPost(null)} className="text-ink/60 hover:text-ink transition-colors">
            返回列表
          </button>
        </div>
        {message && (
          <div className="mb-4 p-3 bg-accent/10 text-accent-dark text-sm rounded-lg">{message}</div>
        )}
        <div className="space-y-4 paper p-6 rounded-xl shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-ink/80 mb-1">标题</label>
              <input type="text" value={editingPost.title} onChange={(e) => setEditingPost({ ...editingPost, title: e.target.value })} className="w-full px-4 py-2 rounded-lg border border-ink/10 bg-white/50 focus:outline-none focus:ring-2 focus:ring-accent/50" placeholder="文章标题" />
            </div>
            <div>
              <label className="block text-sm font-medium text-ink/80 mb-1">Slug</label>
              <input type="text" value={editingPost.slug} onChange={(e) => setEditingPost({ ...editingPost, slug: e.target.value })} className="w-full px-4 py-2 rounded-lg border border-ink/10 bg-white/50 focus:outline-none focus:ring-2 focus:ring-accent/50" placeholder="my-first-post" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-ink/80 mb-1">日期</label>
            <input type="date" value={String(editingPost.date || "")} onChange={(e) => setEditingPost({ ...editingPost, date: e.target.value })} className="w-full md:w-auto px-4 py-2 rounded-lg border border-ink/10 bg-white/50 focus:outline-none focus:ring-2 focus:ring-accent/50" />
          </div>
          <div>
            <label className="block text-sm font-medium text-ink/80 mb-1">摘要</label>
            <textarea value={editingPost.summary} onChange={(e) => setEditingPost({ ...editingPost, summary: e.target.value })} rows={2} className="w-full px-4 py-2 rounded-lg border border-ink/10 bg-white/50 focus:outline-none focus:ring-2 focus:ring-accent/50" placeholder="文章摘要" />
          </div>
          <div>
            <label className="block text-sm font-medium text-ink/80 mb-1">标签</label>
            <div className="flex flex-wrap gap-2 mb-2">
              {(editingPost.tags || []).map((tag) => (
                <span key={tag} className="inline-flex items-center gap-1 px-2.5 py-1 text-xs rounded-full bg-accent/10 text-accent-dark">
                  {tag}<button onClick={() => removePostTag(tag)} className="hover:text-red-500">×</button>
                </span>
              ))}
            </div>
            <div className="flex gap-2">
              <input type="text" value={tagInput} onChange={(e) => setTagInput(e.target.value)} onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addPostTag())} className="flex-1 px-4 py-2 rounded-lg border border-ink/10 bg-white/50 focus:outline-none focus:ring-2 focus:ring-accent/50" placeholder="输入标签后回车" />
              <button onClick={addPostTag} type="button" className="px-4 py-2 bg-ink/5 hover:bg-ink/10 rounded-lg transition-colors">添加</button>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="featured" checked={editingPost.featured} onChange={(e) => setEditingPost({ ...editingPost, featured: e.target.checked })} className="w-4 h-4 accent-accent" />
            <label htmlFor="featured" className="text-sm text-ink/80">设为精选文章</label>
          </div>
          <div>
            <label className="block text-sm font-medium text-ink/80 mb-1">正文（Markdown）</label>
            <textarea value={editingPost.content} onChange={(e) => setEditingPost({ ...editingPost, content: e.target.value })} rows={16} className="w-full px-4 py-2 rounded-lg border border-ink/10 bg-white/50 focus:outline-none focus:ring-2 focus:ring-accent/50 font-mono text-sm" placeholder="在这里写 Markdown 正文..." />
          </div>
          <div className="flex gap-3 pt-2">
            <button onClick={handleSavePost} disabled={savingPost} className="px-6 py-2.5 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors disabled:opacity-50">
              {savingPost ? "保存中..." : "保存并发布"}
            </button>
            <button onClick={() => setEditingPost(null)} className="px-6 py-2.5 border border-ink/10 rounded-lg hover:bg-ink/5 transition-colors">取消</button>
          </div>
        </div>
      </div>
    );
  }

  // ===== Game editing view =====
  if (editingGame) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold font-serif text-ink">
            {"id" in editingGame ? "编辑游戏" : "添加游戏"}
          </h1>
          <button onClick={() => { setEditingGame(null); setEditingLogIndex(null); }} className="text-ink/60 hover:text-ink transition-colors">
            返回列表
          </button>
        </div>
        {message && (
          <div className="mb-4 p-3 bg-accent/10 text-accent-dark text-sm rounded-lg">{message}</div>
        )}
        <div className="space-y-4 paper p-6 rounded-xl shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-ink/80 mb-1">游戏名称</label>
              <input type="text" value={editingGame.title} onChange={(e) => setEditingGame({ ...editingGame, title: e.target.value })} className="w-full px-4 py-2 rounded-lg border border-ink/10 bg-white/50 focus:outline-none focus:ring-2 focus:ring-accent/50" placeholder="我的游戏" />
            </div>
            <div>
              <label className="block text-sm font-medium text-ink/80 mb-1">Slug（URL 标识）</label>
              <input type="text" value={editingGame.slug} onChange={(e) => setEditingGame({ ...editingGame, slug: e.target.value })} className="w-full px-4 py-2 rounded-lg border border-ink/10 bg-white/50 focus:outline-none focus:ring-2 focus:ring-accent/50" placeholder="my-game" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-ink/80 mb-1">游戏类型</label>
              <input type="text" value={editingGame.genre} onChange={(e) => setEditingGame({ ...editingGame, genre: e.target.value })} className="w-full px-4 py-2 rounded-lg border border-ink/10 bg-white/50 focus:outline-none focus:ring-2 focus:ring-accent/50" placeholder="Roguelike / 平台解谜 / 模拟经营" />
            </div>
            <div>
              <label className="block text-sm font-medium text-ink/80 mb-1">封面图 URL</label>
              <input type="text" value={editingGame.cover} onChange={(e) => setEditingGame({ ...editingGame, cover: e.target.value })} className="w-full px-4 py-2 rounded-lg border border-ink/10 bg-white/50 focus:outline-none focus:ring-2 focus:ring-accent/50" placeholder="https://..." />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-ink/80 mb-1">试玩链接</label>
            <input type="text" value={editingGame.demoUrl || ""} onChange={(e) => setEditingGame({ ...editingGame, demoUrl: e.target.value })} className="w-full px-4 py-2 rounded-lg border border-ink/10 bg-white/50 focus:outline-none focus:ring-2 focus:ring-accent/50" placeholder="https://..." />
          </div>

          <div>
            <label className="block text-sm font-medium text-ink/80 mb-1">简介</label>
            <textarea value={editingGame.summary} onChange={(e) => setEditingGame({ ...editingGame, summary: e.target.value })} rows={2} className="w-full px-4 py-2 rounded-lg border border-ink/10 bg-white/50 focus:outline-none focus:ring-2 focus:ring-accent/50" placeholder="简短介绍，显示在列表页" />
          </div>

          <div>
            <label className="block text-sm font-medium text-ink/80 mb-1">详细介绍</label>
            <textarea value={editingGame.description} onChange={(e) => setEditingGame({ ...editingGame, description: e.target.value })} rows={5} className="w-full px-4 py-2 rounded-lg border border-ink/10 bg-white/50 focus:outline-none focus:ring-2 focus:ring-accent/50" placeholder="游戏详细介绍，显示在详情页" />
          </div>

          <div>
            <label className="block text-sm font-medium text-ink/80 mb-1">标签</label>
            <div className="flex flex-wrap gap-2 mb-2">
              {(editingGame.tags || []).map((tag) => (
                <span key={tag} className="inline-flex items-center gap-1 px-2.5 py-1 text-xs rounded-full bg-accent/10 text-accent-dark">
                  {tag}<button onClick={() => removeGameTag(tag)} className="hover:text-red-500">×</button>
                </span>
              ))}
            </div>
            <div className="flex gap-2">
              <input type="text" value={gameTagInput} onChange={(e) => setGameTagInput(e.target.value)} onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addGameTag())} className="flex-1 px-4 py-2 rounded-lg border border-ink/10 bg-white/50 focus:outline-none focus:ring-2 focus:ring-accent/50" placeholder="输入标签后回车" />
              <button onClick={addGameTag} type="button" className="px-4 py-2 bg-ink/5 hover:bg-ink/10 rounded-lg transition-colors">添加</button>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <input type="checkbox" id="game-featured" checked={editingGame.featured} onChange={(e) => setEditingGame({ ...editingGame, featured: e.target.checked })} className="w-4 h-4 accent-accent" />
            <label htmlFor="game-featured" className="text-sm text-ink/80">设为精选游戏</label>
          </div>

          {/* 开发日志 */}
          <div className="pt-4 border-t border-ink/10">
            <h3 className="text-lg font-semibold text-ink mb-4">开发日志</h3>

            {(editingGame.devLogs || []).length > 0 && (
              <div className="space-y-3 mb-4">
                {(editingGame.devLogs || []).map((log, index) => (
                  <div key={log.id || index} className="p-4 rounded-lg border border-ink/10 bg-white/30">
                    {editingLogIndex === index ? (
                      <div className="space-y-3">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <input type="text" value={log.title} onChange={(e) => updateDevLog(index, "title", e.target.value)} className="px-3 py-2 rounded-lg border border-ink/10 bg-white/50 focus:outline-none focus:ring-2 focus:ring-accent/50 text-sm" placeholder="日志标题" />
                          <input type="date" value={log.date} onChange={(e) => updateDevLog(index, "date", e.target.value)} className="px-3 py-2 rounded-lg border border-ink/10 bg-white/50 focus:outline-none focus:ring-2 focus:ring-accent/50 text-sm" />
                        </div>
                        <textarea value={log.content} onChange={(e) => updateDevLog(index, "content", e.target.value)} rows={4} className="w-full px-3 py-2 rounded-lg border border-ink/10 bg-white/50 focus:outline-none focus:ring-2 focus:ring-accent/50 font-mono text-sm" placeholder="日志内容（支持 Markdown）" />
                        <button onClick={() => setEditingLogIndex(null)} className="text-sm text-accent hover:text-accent-dark">完成编辑</button>
                      </div>
                    ) : (
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h4 className="font-medium text-ink text-sm">{log.title}</h4>
                          <span className="text-xs text-stone-500">{log.date}</span>
                          <p className="text-xs text-stone-400 mt-1 line-clamp-2">{log.content}</p>
                        </div>
                        <div className="flex gap-2 flex-shrink-0">
                          <button onClick={() => setEditingLogIndex(index)} className="text-xs text-accent hover:text-accent-dark">编辑</button>
                          <button onClick={() => removeDevLog(index)} className="text-xs text-red-500 hover:text-red-700">删除</button>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            <div className="p-4 rounded-lg border border-dashed border-ink/20 bg-ink/[0.01]">
              <p className="text-xs text-stone-500 mb-3">添加新日志</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                <input type="text" value={logInput.title} onChange={(e) => setLogInput({ ...logInput, title: e.target.value })} className="px-3 py-2 rounded-lg border border-ink/10 bg-white/50 focus:outline-none focus:ring-2 focus:ring-accent/50 text-sm" placeholder="日志标题" />
                <input type="date" value={logInput.date} onChange={(e) => setLogInput({ ...logInput, date: e.target.value })} className="px-3 py-2 rounded-lg border border-ink/10 bg-white/50 focus:outline-none focus:ring-2 focus:ring-accent/50 text-sm" />
              </div>
              <textarea value={logInput.content} onChange={(e) => setLogInput({ ...logInput, content: e.target.value })} rows={3} className="w-full px-3 py-2 rounded-lg border border-ink/10 bg-white/50 focus:outline-none focus:ring-2 focus:ring-accent/50 font-mono text-sm mb-3" placeholder="日志内容（支持 Markdown）" />
              <button onClick={addDevLog} type="button" className="px-4 py-1.5 text-sm bg-accent/10 text-accent hover:bg-accent/20 rounded-lg transition-colors">+ 添加日志</button>
            </div>
          </div>

          <div className="flex gap-3 pt-2">
            <button onClick={handleSaveGame} disabled={savingGame} className="px-6 py-2.5 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors disabled:opacity-50">
              {savingGame ? "保存中..." : "保存游戏"}
            </button>
            <button onClick={() => { setEditingGame(null); setEditingLogIndex(null); }} className="px-6 py-2.5 border border-ink/10 rounded-lg hover:bg-ink/5 transition-colors">取消</button>
          </div>
        </div>
      </div>
    );
  }

  // ===== Bookmark editing view =====
  if (editingBookmark) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold font-serif text-ink">
            {"id" in editingBookmark ? "编辑收藏" : "添加收藏"}
          </h1>
          <button onClick={() => setEditingBookmark(null)} className="text-ink/60 hover:text-ink transition-colors">
            返回列表
          </button>
        </div>
        {message && (
          <div className="mb-4 p-3 bg-accent/10 text-accent-dark text-sm rounded-lg">{message}</div>
        )}
        <div className="space-y-4 paper p-6 rounded-xl shadow-sm">
          <div>
            <label className="block text-sm font-medium text-ink/80 mb-1">网站标题</label>
            <input type="text" value={editingBookmark.title} onChange={(e) => setEditingBookmark({ ...editingBookmark, title: e.target.value })} className="w-full px-4 py-2 rounded-lg border border-ink/10 bg-white/50 focus:outline-none focus:ring-2 focus:ring-accent/50" placeholder="GitHub" />
          </div>
          <div>
            <label className="block text-sm font-medium text-ink/80 mb-1">网址</label>
            <input type="url" value={editingBookmark.url} onChange={(e) => setEditingBookmark({ ...editingBookmark, url: e.target.value })} className="w-full px-4 py-2 rounded-lg border border-ink/10 bg-white/50 focus:outline-none focus:ring-2 focus:ring-accent/50" placeholder="https://github.com" />
          </div>
          <div>
            <label className="block text-sm font-medium text-ink/80 mb-1">描述</label>
            <textarea value={editingBookmark.description} onChange={(e) => setEditingBookmark({ ...editingBookmark, description: e.target.value })} rows={3} className="w-full px-4 py-2 rounded-lg border border-ink/10 bg-white/50 focus:outline-none focus:ring-2 focus:ring-accent/50" placeholder="简短描述这个网站..." />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-ink/80 mb-1">分类</label>
              <input type="text" value={editingBookmark.category} onChange={(e) => setEditingBookmark({ ...editingBookmark, category: e.target.value })} className="w-full px-4 py-2 rounded-lg border border-ink/10 bg-white/50 focus:outline-none focus:ring-2 focus:ring-accent/50" placeholder="开发工具 / 设计资源 / 学习" />
            </div>
            <div>
              <label className="block text-sm font-medium text-ink/80 mb-1">Favicon URL（可选）</label>
              <input type="text" value={editingBookmark.favicon || ""} onChange={(e) => setEditingBookmark({ ...editingBookmark, favicon: e.target.value })} className="w-full px-4 py-2 rounded-lg border border-ink/10 bg-white/50 focus:outline-none focus:ring-2 focus:ring-accent/50" placeholder="留空则自动获取" />
            </div>
          </div>
          <div className="flex gap-3 pt-2">
            <button onClick={handleSaveBookmark} disabled={savingBookmark} className="px-6 py-2.5 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors disabled:opacity-50">
              {savingBookmark ? "保存中..." : "保存收藏"}
            </button>
            <button onClick={() => setEditingBookmark(null)} className="px-6 py-2.5 border border-ink/10 rounded-lg hover:bg-ink/5 transition-colors">取消</button>
          </div>
        </div>
      </div>
    );
  }

  // ===== Profile editing view =====
  if (editingProfile) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold font-serif text-ink">编辑资料</h1>
          <button onClick={() => setEditingProfile(null)} className="text-ink/60 hover:text-ink transition-colors">
            返回列表
          </button>
        </div>
        {message && (
          <div className="mb-4 p-3 bg-accent/10 text-accent-dark text-sm rounded-lg">{message}</div>
        )}
        <div className="space-y-4 paper p-6 rounded-xl shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-ink/80 mb-1">昵称</label>
              <input type="text" value={editingProfile.name} onChange={(e) => setEditingProfile({ ...editingProfile, name: e.target.value })} className="w-full px-4 py-2 rounded-lg border border-ink/10 bg-white/50 focus:outline-none focus:ring-2 focus:ring-accent/50" placeholder="橙猫猫" />
            </div>
            <div>
              <label className="block text-sm font-medium text-ink/80 mb-1">身份/角色</label>
              <input type="text" value={editingProfile.role} onChange={(e) => setEditingProfile({ ...editingProfile, role: e.target.value })} className="w-full px-4 py-2 rounded-lg border border-ink/10 bg-white/50 focus:outline-none focus:ring-2 focus:ring-accent/50" placeholder="独立游戏开发者 / 写作者" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-ink/80 mb-1">头像 URL</label>
            <input type="text" value={editingProfile.avatar} onChange={(e) => setEditingProfile({ ...editingProfile, avatar: e.target.value })} className="w-full px-4 py-2 rounded-lg border border-ink/10 bg-white/50 focus:outline-none focus:ring-2 focus:ring-accent/50" placeholder="/avatar.jpg 或 https://..." />
            {editingProfile.avatar && (
              <img src={editingProfile.avatar} alt="头像预览" className="mt-2 w-20 h-20 rounded-xl object-cover border border-ink/10" />
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-ink/80 mb-1">背景图 URL</label>
            <input type="text" value={editingProfile.background} onChange={(e) => setEditingProfile({ ...editingProfile, background: e.target.value })} className="w-full px-4 py-2 rounded-lg border border-ink/10 bg-white/50 focus:outline-none focus:ring-2 focus:ring-accent/50" placeholder="https://... 留空则使用默认渐变背景" />
            {editingProfile.background && (
              <img src={editingProfile.background} alt="背景预览" className="mt-2 w-full h-24 rounded-xl object-cover border border-ink/10" />
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-ink/80 mb-1">个人介绍</label>
            <textarea value={editingProfile.bio} onChange={(e) => setEditingProfile({ ...editingProfile, bio: e.target.value })} rows={4} className="w-full px-4 py-2 rounded-lg border border-ink/10 bg-white/50 focus:outline-none focus:ring-2 focus:ring-accent/50" placeholder="介绍一下自己..." />
          </div>

          <div>
            <label className="block text-sm font-medium text-ink/80 mb-1">所在地</label>
            <input type="text" value={editingProfile.location} onChange={(e) => setEditingProfile({ ...editingProfile, location: e.target.value })} className="w-full px-4 py-2 rounded-lg border border-ink/10 bg-white/50 focus:outline-none focus:ring-2 focus:ring-accent/50" placeholder="中国 · 上海" />
          </div>

          <div className="pt-4 border-t border-ink/10">
            <label className="block text-sm font-medium text-ink/80 mb-1">关于页面内容（Markdown）</label>
            <p className="text-xs text-stone-400 mb-2">留空则显示默认内容。支持 Markdown 语法，可自由定义「关于」页面的正文区域。</p>
            <textarea value={editingProfile.aboutContent} onChange={(e) => setEditingProfile({ ...editingProfile, aboutContent: e.target.value })} rows={12} className="w-full px-4 py-2 rounded-lg border border-ink/10 bg-white/50 focus:outline-none focus:ring-2 focus:ring-accent/50 font-mono text-sm" placeholder="## 为什么写博客&#10;&#10;在这里写你的关于页面内容..." />
          </div>

          <div className="pt-4 border-t border-ink/10">
            <h3 className="text-lg font-semibold text-ink mb-4">时间线</h3>
            <p className="text-xs text-stone-400 mb-3">留空则显示默认时间线。添加后覆盖默认内容。</p>
            <div className="space-y-3">
              {(editingProfile.timeline || []).map((item, idx) => (
                <div key={idx} className="flex gap-2 items-start">
                  <input type="text" value={item.year} onChange={(e) => {
                    const tl = [...(editingProfile.timeline || [])];
                    tl[idx] = { ...tl[idx], year: e.target.value };
                    setEditingProfile({ ...editingProfile, timeline: tl });
                  }} className="w-20 px-3 py-2 rounded-lg border border-ink/10 bg-white/50 focus:outline-none focus:ring-2 focus:ring-accent/50 text-sm" placeholder="年份" />
                  <input type="text" value={item.title} onChange={(e) => {
                    const tl = [...(editingProfile.timeline || [])];
                    tl[idx] = { ...tl[idx], title: e.target.value };
                    setEditingProfile({ ...editingProfile, timeline: tl });
                  }} className="w-32 px-3 py-2 rounded-lg border border-ink/10 bg-white/50 focus:outline-none focus:ring-2 focus:ring-accent/50 text-sm" placeholder="标题" />
                  <input type="text" value={item.description} onChange={(e) => {
                    const tl = [...(editingProfile.timeline || [])];
                    tl[idx] = { ...tl[idx], description: e.target.value };
                    setEditingProfile({ ...editingProfile, timeline: tl });
                  }} className="flex-1 px-3 py-2 rounded-lg border border-ink/10 bg-white/50 focus:outline-none focus:ring-2 focus:ring-accent/50 text-sm" placeholder="描述" />
                  <button onClick={() => {
                    const tl = (editingProfile.timeline || []).filter((_, i) => i !== idx);
                    setEditingProfile({ ...editingProfile, timeline: tl });
                  }} className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors flex-shrink-0">×</button>
                </div>
              ))}
              <button onClick={() => {
                const tl = [...(editingProfile.timeline || []), { year: "", title: "", description: "" }];
                setEditingProfile({ ...editingProfile, timeline: tl });
              }} className="text-sm text-accent hover:text-accent/80 transition-colors">
                + 添加时间线条目
              </button>
            </div>
          </div>

          <div className="pt-4 border-t border-ink/10">
            <h3 className="text-lg font-semibold text-ink mb-4">社交链接</h3>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-ink/80 mb-1">GitHub</label>
                <input type="text" value={editingProfile.social?.github || ""} onChange={(e) => setEditingProfile({ ...editingProfile, social: { ...editingProfile.social, github: e.target.value } })} className="w-full px-4 py-2 rounded-lg border border-ink/10 bg-white/50 focus:outline-none focus:ring-2 focus:ring-accent/50" placeholder="https://github.com/..." />
              </div>
              <div>
                <label className="block text-sm font-medium text-ink/80 mb-1">Twitter / X</label>
                <input type="text" value={editingProfile.social?.twitter || ""} onChange={(e) => setEditingProfile({ ...editingProfile, social: { ...editingProfile.social, twitter: e.target.value } })} className="w-full px-4 py-2 rounded-lg border border-ink/10 bg-white/50 focus:outline-none focus:ring-2 focus:ring-accent/50" placeholder="https://twitter.com/..." />
              </div>
              <div>
                <label className="block text-sm font-medium text-ink/80 mb-1">邮箱</label>
                <input type="text" value={editingProfile.social?.email || ""} onChange={(e) => setEditingProfile({ ...editingProfile, social: { ...editingProfile.social, email: e.target.value } })} className="w-full px-4 py-2 rounded-lg border border-ink/10 bg-white/50 focus:outline-none focus:ring-2 focus:ring-accent/50" placeholder="mailto:..." />
              </div>
              <div>
                <label className="block text-sm font-medium text-ink/80 mb-1">RSS</label>
                <input type="text" value={editingProfile.social?.rss || ""} onChange={(e) => setEditingProfile({ ...editingProfile, social: { ...editingProfile.social, rss: e.target.value } })} className="w-full px-4 py-2 rounded-lg border border-ink/10 bg-white/50 focus:outline-none focus:ring-2 focus:ring-accent/50" placeholder="#/rss" />
              </div>
            </div>
          </div>

          <div className="flex gap-3 pt-2">
            <button onClick={handleSaveProfile} disabled={savingProfile} className="px-6 py-2.5 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors disabled:opacity-50">
              {savingProfile ? "保存中..." : "保存资料"}
            </button>
            <button onClick={() => setEditingProfile(null)} className="px-6 py-2.5 border border-ink/10 rounded-lg hover:bg-ink/5 transition-colors">取消</button>
          </div>
        </div>
      </div>
    );
  }

  // ===== List view =====
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold font-serif text-ink">后台管理</h1>
          <p className="text-sm text-ink/60 mt-1">已登录：{user.email}</p>
        </div>
        <button
          onClick={() => { logout(); navigate("/"); }}
          className="px-5 py-2 border border-ink/10 rounded-lg hover:bg-ink/5 transition-colors"
        >
          退出登录
        </button>
      </div>

      {message && (
        <div className="mb-4 p-3 bg-accent/10 text-accent-dark text-sm rounded-lg">{message}</div>
      )}

      {/* Tabs */}
      <div className="flex gap-1 mb-6 border-b border-ink/10">
        <button
          onClick={() => setActiveTab("posts")}
          className={`px-5 py-2.5 text-sm font-medium transition-colors relative ${
            activeTab === "posts" ? "text-accent" : "text-stone-500 hover:text-ink"
          }`}
        >
          文章管理
          {activeTab === "posts" && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent" />}
        </button>
        <button
          onClick={() => setActiveTab("games")}
          className={`px-5 py-2.5 text-sm font-medium transition-colors relative ${
            activeTab === "games" ? "text-accent" : "text-stone-500 hover:text-ink"
          }`}
        >
          游戏管理
          {activeTab === "games" && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent" />}
        </button>
        <button
          onClick={() => setActiveTab("bookmarks")}
          className={`px-5 py-2.5 text-sm font-medium transition-colors relative ${
            activeTab === "bookmarks" ? "text-accent" : "text-stone-500 hover:text-ink"
          }`}
        >
          收藏管理
          {activeTab === "bookmarks" && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent" />}
        </button>
        <button
          onClick={() => setActiveTab("profile")}
          className={`px-5 py-2.5 text-sm font-medium transition-colors relative ${
            activeTab === "profile" ? "text-accent" : "text-stone-500 hover:text-ink"
          }`}
        >
          资料设置
          {activeTab === "profile" && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent" />}
        </button>
      </div>

      {/* Posts tab */}
      {activeTab === "posts" && (
        <>
          <div className="flex justify-end mb-4">
            <button
              onClick={() => setEditingPost({ ...emptyPost })}
              className="px-5 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors"
            >
              + 写文章
            </button>
          </div>
          {postsLoading ? (
            <p className="text-ink/60">加载中...</p>
          ) : postsError ? (
            <p className="text-red-600">加载失败：{postsError}</p>
          ) : posts.length === 0 ? (
            <div className="text-center py-12 paper rounded-xl">
              <p className="text-ink/60 mb-4">还没有文章</p>
              <button onClick={() => setEditingPost({ ...emptyPost })} className="px-5 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors">写第一篇</button>
            </div>
          ) : (
            <div className="paper rounded-xl overflow-hidden shadow-sm">
              <table className="w-full text-left">
                <thead className="bg-ink/5">
                  <tr>
                    <th className="px-4 py-3 text-sm font-medium text-ink/80">标题</th>
                    <th className="px-4 py-3 text-sm font-medium text-ink/80 hidden sm:table-cell">日期</th>
                    <th className="px-4 py-3 text-sm font-medium text-ink/80 hidden md:table-cell">标签</th>
                    <th className="px-4 py-3 text-sm font-medium text-ink/80 text-right">操作</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-ink/5">
                  {posts.map((post) => (
                    <tr key={post.id} className="hover:bg-ink/[0.02]">
                      <td className="px-4 py-3">
                        <div className="font-medium text-ink">{post.title}</div>
                        <div className="text-xs text-ink/50 mt-0.5">/{post.slug}</div>
                      </td>
                      <td className="px-4 py-3 text-sm text-ink/70 hidden sm:table-cell">{String(post.date || "")}</td>
                      <td className="px-4 py-3 hidden md:table-cell">
                        <div className="flex flex-wrap gap-1">
                          {(post.tags || []).map((tag) => (
                            <span key={tag} className="px-2 py-0.5 text-xs rounded-full bg-accent/10 text-accent-dark">{tag}</span>
                          ))}
                        </div>
                      </td>
                      <td className="px-4 py-3 text-right">
                        <div className="flex justify-end gap-2">
                          <button onClick={() => setEditingPost(post)} className="px-3 py-1.5 text-sm text-accent hover:bg-accent/10 rounded-lg transition-colors">编辑</button>
                          <button onClick={() => post.id && handleDeletePost(post.id)} className="px-3 py-1.5 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors">删除</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </>
      )}

      {/* Games tab */}
      {activeTab === "games" && (
        <>
          <div className="flex justify-end mb-4">
            <button
              onClick={() => setEditingGame({ ...emptyGame })}
              className="px-5 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors"
            >
              + 添加游戏
            </button>
          </div>
          {gamesLoading ? (
            <p className="text-ink/60">加载中...</p>
          ) : gamesError ? (
            <p className="text-red-600">加载失败：{gamesError}</p>
          ) : games.length === 0 ? (
            <div className="text-center py-12 paper rounded-xl">
              <p className="text-ink/60 mb-4">还没有游戏</p>
              <button onClick={() => setEditingGame({ ...emptyGame })} className="px-5 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors">添加第一个</button>
            </div>
          ) : (
            <div className="paper rounded-xl overflow-hidden shadow-sm">
              <table className="w-full text-left">
                <thead className="bg-ink/5">
                  <tr>
                    <th className="px-4 py-3 text-sm font-medium text-ink/80">游戏</th>
                    <th className="px-4 py-3 text-sm font-medium text-ink/80 hidden sm:table-cell">类型</th>
                    <th className="px-4 py-3 text-sm font-medium text-ink/80 hidden md:table-cell">标签</th>
                    <th className="px-4 py-3 text-sm font-medium text-ink/80 text-right">操作</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-ink/5">
                  {games.map((game) => (
                    <tr key={game.id} className="hover:bg-ink/[0.02]">
                      <td className="px-4 py-3">
                        <div className="font-medium text-ink">{game.title}</div>
                        <div className="text-xs text-ink/50 mt-0.5">/{game.slug} · {(game.devLogs || []).length} 篇日志</div>
                      </td>
                      <td className="px-4 py-3 text-sm text-ink/70 hidden sm:table-cell">{game.genre}</td>
                      <td className="px-4 py-3 hidden md:table-cell">
                        <div className="flex flex-wrap gap-1">
                          {(game.tags || []).map((tag) => (
                            <span key={tag} className="px-2 py-0.5 text-xs rounded-full bg-accent/10 text-accent-dark">{tag}</span>
                          ))}
                        </div>
                      </td>
                      <td className="px-4 py-3 text-right">
                        <div className="flex justify-end gap-2">
                          <button onClick={() => setEditingGame(game)} className="px-3 py-1.5 text-sm text-accent hover:bg-accent/10 rounded-lg transition-colors">编辑</button>
                          <button onClick={() => game.id && handleDeleteGame(game.id)} className="px-3 py-1.5 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors">删除</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </>
      )}

      {/* Bookmarks tab */}
      {activeTab === "bookmarks" && (
        <>
          <div className="flex justify-end mb-4">
            <button
              onClick={() => setEditingBookmark({ ...emptyBookmark })}
              className="px-5 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors"
            >
              + 添加收藏
            </button>
          </div>
          {bookmarksLoading ? (
            <p className="text-ink/60">加载中...</p>
          ) : bookmarksError ? (
            <p className="text-red-600">加载失败：{bookmarksError}</p>
          ) : bookmarks.length === 0 ? (
            <div className="text-center py-12 paper rounded-xl">
              <p className="text-ink/60 mb-4">还没有收藏</p>
              <button onClick={() => setEditingBookmark({ ...emptyBookmark })} className="px-5 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors">添加第一个</button>
            </div>
          ) : (
            <div className="paper rounded-xl overflow-hidden shadow-sm">
              <table className="w-full text-left">
                <thead className="bg-ink/5">
                  <tr>
                    <th className="px-4 py-3 text-sm font-medium text-ink/80">网站</th>
                    <th className="px-4 py-3 text-sm font-medium text-ink/80 hidden sm:table-cell">分类</th>
                    <th className="px-4 py-3 text-sm font-medium text-ink/80 hidden md:table-cell">网址</th>
                    <th className="px-4 py-3 text-sm font-medium text-ink/80 text-right">操作</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-ink/5">
                  {bookmarks.map((bm) => (
                    <tr key={bm.id} className="hover:bg-ink/[0.02]">
                      <td className="px-4 py-3">
                        <div className="font-medium text-ink">{bm.title}</div>
                        <div className="text-xs text-ink/50 mt-0.5">{bm.description ? bm.description.slice(0, 40) : "无描述"}</div>
                      </td>
                      <td className="px-4 py-3 hidden sm:table-cell">
                        <span className="px-2 py-0.5 text-xs rounded-full bg-accent/10 text-accent-dark">{bm.category || "未分类"}</span>
                      </td>
                      <td className="px-4 py-3 text-sm text-ink/70 hidden md:table-cell truncate max-w-[200px]">{bm.url}</td>
                      <td className="px-4 py-3 text-right">
                        <div className="flex justify-end gap-2">
                          <button onClick={() => setEditingBookmark(bm)} className="px-3 py-1.5 text-sm text-accent hover:bg-accent/10 rounded-lg transition-colors">编辑</button>
                          <button onClick={() => bm.id && handleDeleteBookmark(bm.id)} className="px-3 py-1.5 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors">删除</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </>
      )}

      {/* Profile tab */}
      {activeTab === "profile" && (
        <div className="paper p-6 rounded-xl shadow-sm">
          <div className="flex items-start gap-6">
            {loadedProfile.avatar && (
              <img src={loadedProfile.avatar} alt={loadedProfile.name} className="w-20 h-20 rounded-xl object-cover border border-ink/10 flex-shrink-0" />
            )}
            <div className="flex-1 min-w-0">
              <h3 className="font-serif text-xl font-semibold text-ink">{loadedProfile.name}</h3>
              <p className="text-sm text-accent font-medium">{loadedProfile.role}</p>
              <p className="mt-2 text-sm text-stone-600 line-clamp-3">{loadedProfile.bio}</p>
              <p className="mt-2 text-xs text-stone-400">{loadedProfile.location}</p>
            </div>
          </div>
          {loadedProfile.background && (
            <img src={loadedProfile.background} alt="背景图" className="mt-4 w-full h-28 rounded-xl object-cover border border-ink/10" />
          )}
          <div className="mt-6 flex gap-3">
            <button
              onClick={() => setEditingProfile({ ...loadedProfile })}
              className="px-5 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors"
            >
              编辑资料
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
