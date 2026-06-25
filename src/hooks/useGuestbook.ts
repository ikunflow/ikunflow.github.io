import { useEffect, useState, useCallback } from "react";
import { ref, onValue, push, serverTimestamp } from "firebase/database";
import { database } from "@/lib/firebase";

export interface GuestbookMessage {
  id: string;
  name: string;
  message: string;
  createdAt: number;
}

export interface GuestbookFormData {
  name: string;
  message: string;
}

export function useGuestbook() {
  const [messages, setMessages] = useState<GuestbookMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const messagesRef = ref(database, "guestbook");

    const unsubscribe = onValue(
      messagesRef,
      (snapshot) => {
        const data = snapshot.val();
        if (!data) {
          setMessages([]);
          setLoading(false);
          return;
        }

        const parsed: GuestbookMessage[] = Object.entries(data)
          .map(([id, value]) => {
            const item = value as Partial<GuestbookMessage>;
            return {
              id,
              name: item.name || "匿名",
              message: item.message || "",
              createdAt: item.createdAt || Date.now(),
            };
          })
          .sort((a, b) => b.createdAt - a.createdAt);

        setMessages(parsed);
        setLoading(false);
      },
      () => {
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  const submitMessage = useCallback(async (formData: GuestbookFormData) => {
    const trimmedName = formData.name.trim();
    const trimmedMessage = formData.message.trim();

    if (!trimmedName || !trimmedMessage) {
      setError("请填写昵称和留言内容");
      return false;
    }

    if (trimmedName.length > 30) {
      setError("昵称不能超过 30 个字符");
      return false;
    }

    if (trimmedMessage.length > 500) {
      setError("留言不能超过 500 个字符");
      return false;
    }

    setSubmitting(true);
    setError(null);

    try {
      const messagesRef = ref(database, "guestbook");
      await push(messagesRef, {
        name: trimmedName,
        message: trimmedMessage,
        createdAt: serverTimestamp(),
      });
      setSubmitting(false);
      return true;
    } catch {
      setError("提交失败，请检查 Firebase 权限设置");
      setSubmitting(false);
      return false;
    }
  }, []);

  return { messages, loading, submitting, error, submitMessage };
}
