import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useAllPosts, createPost, updatePost, deletePost } from "@/hooks/usePosts";
import { Post } from "@/lib/posts";

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

export default function Admin() {
  const { user, logout, loading: authLoading } = useAuth();
  const { posts, loading, error } = useAllPosts();
  const navigate = useNavigate();

  const [editing, setEditing] = useState<Post | Omit<Post, "id"> | null>(null);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [tagInput, setTagInput] = useState("");

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

  const handleSave = async () => {
    if (!editing) return;
    if (!editing.title || !editing.slug || !editing.content) {
      setMessage("请填写标题、slug 和正文");
      return;
    }

    setSaving(true);
    setMessage("");
    try {
      if ("id" in editing && editing.id) {
        await updatePost(editing.id, editing);
        setMessage("文章已更新");
      } else {
        await createPost(editing);
        setMessage("文章已发布");
      }
      setEditing(null);
      setTimeout(() => window.location.reload(), 800);
    } catch (err) {
      setMessage("保存失败：" + (err as Error).message);
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("确定要删除这篇文章吗？")) return;
    try {
      await deletePost(id);
      window.location.reload();
    } catch (err) {
      setMessage("删除失败：" + (err as Error).message);
    }
  };

  const addTag = () => {
    const tag = tagInput.trim();
    if (!tag || !editing) return;
    if (editing.tags.includes(tag)) return;
    setEditing({ ...editing, tags: [...editing.tags, tag] });
    setTagInput("");
  };

  const removeTag = (tag: string) => {
    if (!editing) return;
    setEditing({ ...editing, tags: editing.tags.filter((t) => t !== tag) });
  };

  if (editing) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold font-serif text-ink">
            {"id" in editing ? "编辑文章" : "写文章"}
          </h1>
          <button
            onClick={() => setEditing(null)}
            className="text-ink/60 hover:text-ink transition-colors"
          >
            返回列表
          </button>
        </div>

        {message && (
          <div className="mb-4 p-3 bg-accent/10 text-accent-dark text-sm rounded-lg">
            {message}
          </div>
        )}

        <div className="space-y-4 paper p-6 rounded-xl shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-ink/80 mb-1">
                标题
              </label>
              <input
                type="text"
                value={editing.title}
                onChange={(e) =>
                  setEditing({ ...editing, title: e.target.value })
                }
                className="w-full px-4 py-2 rounded-lg border border-ink/10 bg-white/50 focus:outline-none focus:ring-2 focus:ring-accent/50"
                placeholder="文章标题"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-ink/80 mb-1">
                Slug（URL 标识）
              </label>
              <input
                type="text"
                value={editing.slug}
                onChange={(e) =>
                  setEditing({ ...editing, slug: e.target.value })
                }
                className="w-full px-4 py-2 rounded-lg border border-ink/10 bg-white/50 focus:outline-none focus:ring-2 focus:ring-accent/50"
                placeholder="my-first-post"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-ink/80 mb-1">
              日期
            </label>
            <input
              type="date"
              value={editing.date}
              onChange={(e) =>
                setEditing({ ...editing, date: e.target.value })
              }
              className="w-full md:w-auto px-4 py-2 rounded-lg border border-ink/10 bg-white/50 focus:outline-none focus:ring-2 focus:ring-accent/50"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-ink/80 mb-1">
              摘要
            </label>
            <textarea
              value={editing.summary}
              onChange={(e) =>
                setEditing({ ...editing, summary: e.target.value })
              }
              rows={2}
              className="w-full px-4 py-2 rounded-lg border border-ink/10 bg-white/50 focus:outline-none focus:ring-2 focus:ring-accent/50"
              placeholder="文章摘要，会显示在列表页"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-ink/80 mb-1">
              标签
            </label>
            <div className="flex flex-wrap gap-2 mb-2">
              {editing.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 px-2.5 py-1 text-xs rounded-full bg-accent/10 text-accent-dark"
                >
                  {tag}
                  <button
                    onClick={() => removeTag(tag)}
                    className="hover:text-red-500"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addTag())}
                className="flex-1 px-4 py-2 rounded-lg border border-ink/10 bg-white/50 focus:outline-none focus:ring-2 focus:ring-accent/50"
                placeholder="输入标签后回车"
              />
              <button
                onClick={addTag}
                type="button"
                className="px-4 py-2 bg-ink/5 hover:bg-ink/10 rounded-lg transition-colors"
              >
                添加
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="featured"
              checked={editing.featured}
              onChange={(e) =>
                setEditing({ ...editing, featured: e.target.checked })
              }
              className="w-4 h-4 accent-accent"
            />
            <label htmlFor="featured" className="text-sm text-ink/80">
              设为精选文章
            </label>
          </div>

          <div>
            <label className="block text-sm font-medium text-ink/80 mb-1">
              正文（Markdown）
            </label>
            <textarea
              value={editing.content}
              onChange={(e) =>
                setEditing({ ...editing, content: e.target.value })
              }
              rows={16}
              className="w-full px-4 py-2 rounded-lg border border-ink/10 bg-white/50 focus:outline-none focus:ring-2 focus:ring-accent/50 font-mono text-sm"
              placeholder="在这里写 Markdown 正文..."
            />
          </div>

          <div className="flex gap-3 pt-2">
            <button
              onClick={handleSave}
              disabled={saving}
              className="px-6 py-2.5 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors disabled:opacity-50"
            >
              {saving ? "保存中..." : "保存并发布"}
            </button>
            <button
              onClick={() => setEditing(null)}
              className="px-6 py-2.5 border border-ink/10 rounded-lg hover:bg-ink/5 transition-colors"
            >
              取消
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold font-serif text-ink">文章管理</h1>
          <p className="text-sm text-ink/60 mt-1">
            已登录：{user.email}
          </p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => setEditing({ ...emptyPost })}
            className="px-5 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors"
          >
            + 写文章
          </button>
          <button
            onClick={() => {
              logout();
              navigate("/");
            }}
            className="px-5 py-2 border border-ink/10 rounded-lg hover:bg-ink/5 transition-colors"
          >
            退出登录
          </button>
        </div>
      </div>

      {message && (
        <div className="mb-4 p-3 bg-accent/10 text-accent-dark text-sm rounded-lg">
          {message}
        </div>
      )}

      {loading ? (
        <p className="text-ink/60">加载中...</p>
      ) : error ? (
        <p className="text-red-600">加载失败：{error}</p>
      ) : posts.length === 0 ? (
        <div className="text-center py-12 paper rounded-xl">
          <p className="text-ink/60 mb-4">还没有文章</p>
          <button
            onClick={() => setEditing({ ...emptyPost })}
            className="px-5 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors"
          >
            写第一篇
          </button>
        </div>
      ) : (
        <div className="paper rounded-xl overflow-hidden shadow-sm">
          <table className="w-full text-left">
            <thead className="bg-ink/5">
              <tr>
                <th className="px-4 py-3 text-sm font-medium text-ink/80">标题</th>
                <th className="px-4 py-3 text-sm font-medium text-ink/80 hidden sm:table-cell">
                  日期
                </th>
                <th className="px-4 py-3 text-sm font-medium text-ink/80 hidden md:table-cell">
                  标签
                </th>
                <th className="px-4 py-3 text-sm font-medium text-ink/80 text-right">
                  操作
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink/5">
              {posts.map((post) => (
                <tr key={post.id} className="hover:bg-ink/[0.02]">
                  <td className="px-4 py-3">
                    <div className="font-medium text-ink">{post.title}</div>
                    <div className="text-xs text-ink/50 mt-0.5">/{post.slug}</div>
                  </td>
                  <td className="px-4 py-3 text-sm text-ink/70 hidden sm:table-cell">
                    {post.date}
                  </td>
                  <td className="px-4 py-3 hidden md:table-cell">
                    <div className="flex flex-wrap gap-1">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-xs rounded-full bg-accent/10 text-accent-dark"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <div className="flex justify-end gap-2">
                      <button
                        onClick={() => setEditing(post)}
                        className="px-3 py-1.5 text-sm text-accent hover:bg-accent/10 rounded-lg transition-colors"
                      >
                        编辑
                      </button>
                      <button
                        onClick={() => post.id && handleDelete(post.id)}
                        className="px-3 py-1.5 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        删除
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
