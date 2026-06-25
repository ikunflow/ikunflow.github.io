import { useState } from "react";
import { BookHeart, Send, MessageSquare } from "lucide-react";
import { useGuestbook } from "@/hooks/useGuestbook";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

function formatTime(timestamp: number): string {
  const date = new Date(timestamp);
  return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
}

export default function Guestbook() {
  const { messages, loading, submitting, error, submitMessage } = useGuestbook();
  const [formData, setFormData] = useState({ name: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await submitMessage(formData);
    if (success) {
      setFormData({ name: "", message: "" });
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="border-b border-stone-200/60 bg-gradient-to-b from-warm-100/30 to-paper">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 border border-stone-200 text-xs text-stone-600 mb-6">
                <BookHeart className="h-3.5 w-3.5 text-accent" />
                <span>留言板</span>
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl font-bold text-ink">
                留下一句话
              </h1>
              <p className="mt-3 text-stone-600 max-w-2xl">
                如果你路过这里，欢迎留下你的想法、建议或只是打个招呼。我会定期查看。
              </p>
            </AnimatedSection>
          </div>
        </section>

        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="max-w-2xl mx-auto">
            <AnimatedSection delay={100}>
              <form
                onSubmit={handleSubmit}
                className="rounded-xl border border-stone-200 bg-white/60 p-6 sm:p-8 shadow-soft"
              >
                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="guestbook-name"
                      className="block text-sm font-medium text-stone-700 mb-1.5"
                    >
                      昵称
                    </label>
                    <input
                      id="guestbook-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, name: e.target.value }))
                      }
                      maxLength={30}
                      placeholder="怎么称呼你？"
                      className="w-full px-4 py-2.5 rounded-lg border border-stone-200 bg-white text-stone-800 placeholder:text-stone-400 focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/10 transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="guestbook-message"
                      className="block text-sm font-medium text-stone-700 mb-1.5"
                    >
                      留言
                    </label>
                    <textarea
                      id="guestbook-message"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          message: e.target.value,
                        }))
                      }
                      maxLength={500}
                      rows={4}
                      placeholder="想对我说点什么..."
                      className="w-full px-4 py-2.5 rounded-lg border border-stone-200 bg-white text-stone-800 placeholder:text-stone-400 focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/10 transition-all resize-none"
                    />
                    <div className="mt-1 text-right text-xs text-stone-400">
                      {formData.message.length}/500
                    </div>
                  </div>
                </div>

                {error && (
                  <div className="mt-4 text-sm text-red-600 bg-red-50 px-4 py-2 rounded-lg">
                    {error}
                  </div>
                )}

                {submitted && (
                  <div className="mt-4 text-sm text-accent bg-warm-50 px-4 py-2 rounded-lg">
                    留言已提交，感谢你的到访！
                  </div>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="mt-5 inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-accent text-white text-sm font-medium hover:bg-accent-dark disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
                >
                  <Send className="h-4 w-4" />
                  {submitting ? "提交中..." : "提交留言"}
                </button>
              </form>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="mt-12">
                <h2 className="font-serif text-xl font-semibold text-ink flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-accent" />
                  访客留言
                  <span className="text-sm font-normal text-stone-400">
                    ({messages.length})
                  </span>
                </h2>

                <div className="mt-6 space-y-4">
                  {loading ? (
                    <div className="py-12 text-center text-stone-500">
                      加载中...
                    </div>
                  ) : messages.length === 0 ? (
                    <div className="py-12 text-center text-stone-500 bg-stone-50/50 rounded-xl border border-stone-200/60">
                      还没有留言，来做第一个访客吧。
                    </div>
                  ) : (
                    messages.map((item) => (
                      <div
                        key={item.id}
                        className="rounded-xl border border-stone-200 bg-white/60 p-5 transition-all hover:shadow-soft"
                      >
                        <div className="flex items-center justify-between gap-4">
                          <span className="font-medium text-ink">
                            {item.name}
                          </span>
                          <span className="text-xs text-stone-400 shrink-0">
                            {formatTime(item.createdAt)}
                          </span>
                        </div>
                        <p className="mt-2 text-sm text-stone-600 leading-relaxed whitespace-pre-wrap">
                          {item.message}
                        </p>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
