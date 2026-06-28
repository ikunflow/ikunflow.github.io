import { useEffect, useState } from "react";
import { getProfile, updateProfile, Profile, TimelineItem } from "@/lib/profile";
import { author as localAuthor, timeline as localTimeline } from "@/data/author";

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
  social: { ...localAuthor.social },
};

export function useProfile() {
  const [profile, setProfile] = useState<Profile>(localProfile);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    getProfile()
      .then((data) => {
        if (!cancelled) {
          if (data) {
            // 合并：Firestore 数据优先，缺失字段用本地数据补充
            setProfile({
              ...localProfile,
              ...data,
              social: { ...localProfile.social, ...(data.social || {}) },
            });
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
