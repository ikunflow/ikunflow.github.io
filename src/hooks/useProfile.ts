import { useEffect, useState } from "react";
import { getProfile, updateProfile, Profile } from "@/lib/profile";
import { author as localAuthor, timeline as localTimeline } from "@/data/author";
import { getCache, setCache } from "@/lib/cache";

const CACHE_KEY = "cache_profile";

// 将本地 author 数据适配为 Profile
const localProfile: Profile = {
  name: localAuthor.name,
  avatar: localAuthor.avatar,
  background: "",
  bio: localAuthor.bio,
  role: localAuthor.role,
  location: localAuthor.location,
  aboutContent: "",
  timeline: localTimeline,
  tags: [],
  social: { ...localAuthor.social },
};

export function useProfile() {
  const [profile, setProfile] = useState<Profile>(localProfile);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    // 1. 先读缓存秒开
    const cached = getCache<Profile>(CACHE_KEY, 30 * 60 * 1000); // 30 分钟
    if (cached) {
      setProfile({
        ...localProfile,
        ...cached,
        social: { ...localProfile.social, ...(cached.social || {}) },
      });
      setLoading(false);
    }

    // 2. 后台请求 Firestore
    getProfile()
      .then((data) => {
        if (!cancelled) {
          if (data) {
            const merged = {
              ...localProfile,
              ...data,
              social: { ...localProfile.social, ...(data.social || {}) },
            };
            setProfile(merged);
            setCache(CACHE_KEY, merged);
          }
          setLoading(false);
        }
      })
      .catch((err) => {
        if (!cancelled) {
          setError(err.message);
          setLoading(false);
        }
      });
    return () => { cancelled = true; };
  }, []);

  return { profile, loading, error, refetch: () => window.location.reload() };
}

export { updateProfile };
