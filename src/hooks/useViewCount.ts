import { useEffect, useState } from "react";
import { ref, onValue, runTransaction } from "firebase/database";
import { database } from "@/lib/firebase";

export type ContentType = "posts" | "games";

export function useViewCount(contentType: ContentType, contentId: string) {
  const [views, setViews] = useState<number>(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!contentId) return;

    const viewRef = ref(database, `views/${contentType}/${contentId}`);

    const unsubscribe = onValue(
      viewRef,
      (snapshot) => {
        const value = snapshot.val();
        setViews(typeof value === "number" ? value : 0);
        setLoading(false);
      },
      () => {
        setLoading(false);
      }
    );

    const storageKey = `viewed_${contentType}_${contentId}`;
    const alreadyViewed = sessionStorage.getItem(storageKey);

    if (!alreadyViewed) {
      runTransaction(viewRef, (current) => {
        return (current || 0) + 1;
      }).catch(() => {
        // 如果写入失败（比如权限不足），只读取不报错
      });
      sessionStorage.setItem(storageKey, "true");
    }

    return () => unsubscribe();
  }, [contentType, contentId]);

  return { views, loading };
}
