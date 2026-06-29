import {
  collection,
  query,
  orderBy,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "@/lib/firebase";

export interface Bookmark {
  id?: string;
  title: string;
  url: string;
  description: string;
  category: string;
  favicon?: string;
  createdAt?: number;
  updatedAt?: number;
}

const COLLECTION = "bookmarks";

export async function getBookmarks(): Promise<Bookmark[]> {
  const q = query(collection(db, COLLECTION), orderBy("createdAt", "desc"));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((docSnap) => {
    const data = docSnap.data();
    return {
      id: docSnap.id,
      title: data.title ?? "",
      url: data.url ?? "",
      description: data.description ?? "",
      category: data.category ?? "",
      favicon: data.favicon ?? "",
      createdAt: data.createdAt?.toMillis?.(),
      updatedAt: data.updatedAt?.toMillis?.(),
    } as Bookmark;
  });
}

export async function createBookmark(bookmark: Omit<Bookmark, "id">): Promise<string> {
  const docRef = await addDoc(collection(db, COLLECTION), {
    ...bookmark,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
  return docRef.id;
}

export async function updateBookmark(id: string, bookmark: Partial<Bookmark>): Promise<void> {
  const docRef = doc(db, COLLECTION, id);
  const updateData: Record<string, unknown> = { ...bookmark, updatedAt: serverTimestamp() };
  delete updateData.id;
  await updateDoc(docRef, updateData);
}

export async function deleteBookmark(id: string): Promise<void> {
  await deleteDoc(doc(db, COLLECTION, id));
}
