import { useEffect, useState, useCallback } from "react";
import { ref, onValue, runTransaction } from "firebase/database";
import { database } from "@/lib/firebase";

export type ContentType = "posts" | "games";

export function useLikes(contentType: ContentType, contentId: string) {
  const [likes, setLikes] = useState<number>(0);
  const [liked, setLiked] = useState<boolean>(false);
  const [loading, setLoading] = useState(true);

  const storageKey = `liked_${contentType}_${contentId}`;

  useEffect(() => {
    setLiked(localStorage.getItem(storageKey) === "true");
  }, [storageKey]);

  useEffect(() => {
    if (!contentId) return;

    const likeRef = ref(database, `likes/${contentType}/${contentId}`);

    const unsubscribe = onValue(
      likeRef,
      (snapshot) => {
        const value = snapshot.val();
        setLikes(typeof value === "number" ? value : 0);
        setLoading(false);
      },
      () => {
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [contentType, contentId]);

  const toggleLike = useCallback(async () => {
    if (!contentId) return;

    const likeRef = ref(database, `likes/${contentType}/${contentId}`);
    const newLiked = !liked;

    try {
      await runTransaction(likeRef, (current) => {
        const currentValue = typeof current === "number" ? current : 0;
        return newLiked ? currentValue + 1 : Math.max(0, currentValue - 1);
      });

      setLiked(newLiked);
      localStorage.setItem(storageKey, newLiked ? "true" : "false");
    } catch {
      // 写入失败时不切换状态
    }
  }, [contentType, contentId, liked, storageKey]);

  return { likes, liked, loading, toggleLike };
}
