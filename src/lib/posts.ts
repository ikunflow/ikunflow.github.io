import {
  collection,
  query,
  orderBy,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  getDoc,
  where,
  serverTimestamp,
  Timestamp,
} from "firebase/firestore";
import { db } from "@/lib/firebase";

export interface Post {
  id?: string;
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
  featured?: boolean;
  readingTime: number;
  content: string;
  createdAt?: number;
  updatedAt?: number;
}

const POSTS_COLLECTION = "posts";

function formatDate(date: Date): string {
  return date.toISOString().split("T")[0];
}

function normalizeDate(value: unknown): string {
  if (typeof value === "string") return value;
  if (value instanceof Date) return formatDate(value);
  if (
    value &&
    typeof value === "object" &&
    "toDate" in value &&
    typeof (value as { toDate: () => Date }).toDate === "function"
  ) {
    return formatDate((value as { toDate: () => Date }).toDate());
  }
  return "";
}

export async function getPosts(): Promise<Post[]> {
  try {
    const q = query(
      collection(db, POSTS_COLLECTION),
      orderBy("date", "desc")
    );
    const snapshot = await getDocs(q);
    return snapshot.docs.map((docSnap) => {
      const data = docSnap.data();
      return {
        id: docSnap.id,
        slug: data.slug ?? "",
        title: data.title ?? "",
        date: normalizeDate(data.date),
        summary: data.summary ?? "",
        tags: Array.isArray(data.tags) ? data.tags : [],
        featured: data.featured === true,
        readingTime: data.readingTime || Math.ceil((data.content?.length || 0) / 500),
        content: data.content ?? "",
        createdAt: data.createdAt?.toMillis?.(),
        updatedAt: data.updatedAt?.toMillis?.(),
      } as Post;
    });
  } catch {
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const q = query(collection(db, POSTS_COLLECTION), where("slug", "==", slug));
  const snapshot = await getDocs(q);
  if (snapshot.empty) return null;
  const docSnap = snapshot.docs[0];
  const data = docSnap.data();
  return {
    id: docSnap.id,
    slug: data.slug ?? "",
    title: data.title ?? "",
    date: normalizeDate(data.date),
    summary: data.summary ?? "",
    tags: Array.isArray(data.tags) ? data.tags : [],
    featured: data.featured === true,
    readingTime: data.readingTime || Math.ceil((data.content?.length || 0) / 500),
    content: data.content ?? "",
    createdAt: data.createdAt?.toMillis?.(),
    updatedAt: data.updatedAt?.toMillis?.(),
  } as Post;
}

export async function createPost(post: Omit<Post, "id">): Promise<string> {
  const now = new Date();
  const docRef = await addDoc(collection(db, POSTS_COLLECTION), {
    ...post,
    date: post.date || formatDate(now),
    tags: post.tags || [],
    featured: post.featured === true,
    readingTime: post.readingTime || Math.ceil((post.content?.length || 0) / 500),
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
  return docRef.id;
}

export async function updatePost(id: string, post: Partial<Post>): Promise<void> {
  const docRef = doc(db, POSTS_COLLECTION, id);
  const updateData: Record<string, unknown> = { ...post, updatedAt: serverTimestamp() };
  delete updateData.id;
  await updateDoc(docRef, updateData);
}

export async function deletePost(id: string): Promise<void> {
  await deleteDoc(doc(db, POSTS_COLLECTION, id));
}

export function formatDisplayDate(date: string): string {
  const d = new Date(date);
  return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`;
}
