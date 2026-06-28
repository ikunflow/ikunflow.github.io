import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export interface Profile {
  name: string;
  avatar: string;
  background: string;
  bio: string;
  role: string;
  location: string;
  aboutContent: string;
  timeline: TimelineItem[];
  social: {
    github?: string;
    twitter?: string;
    email?: string;
    rss?: string;
  };
  updatedAt?: number;
}

const PROFILE_DOC = "site";
const PROFILE_COLLECTION = "profile";

export async function getProfile(): Promise<Profile | null> {
  const docRef = doc(db, PROFILE_COLLECTION, PROFILE_DOC);
  const snap = await getDoc(docRef);
  if (!snap.exists()) return null;
  const data = snap.data();
  return {
    name: data.name ?? "",
    avatar: data.avatar ?? "",
    background: data.background ?? "",
    bio: data.bio ?? "",
    role: data.role ?? "",
    location: data.location ?? "",
    aboutContent: data.aboutContent ?? "",
    timeline: Array.isArray(data.timeline) ? data.timeline : [],
    social: data.social ?? {},
    updatedAt: data.updatedAt?.toMillis?.(),
  };
}

export async function updateProfile(profile: Partial<Profile>): Promise<void> {
  const docRef = doc(db, PROFILE_COLLECTION, PROFILE_DOC);
  const updateData: Record<string, unknown> = { ...profile, updatedAt: serverTimestamp() };
  await setDoc(docRef, updateData, { merge: true });
}
