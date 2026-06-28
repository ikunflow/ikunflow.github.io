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

export interface DevLog {
  id?: string;
  title: string;
  date: string;
  content: string;
}

export interface Game {
  id?: string;
  slug: string;
  title: string;
  genre: string;
  summary: string;
  description: string;
  cover: string;
  demoUrl?: string;
  tags: string[];
  devLogs: DevLog[];
  featured?: boolean;
  createdAt?: number;
  updatedAt?: number;
}

const GAMES_COLLECTION = "games";

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

function normalizeDevLogs(logs: unknown): DevLog[] {
  if (!Array.isArray(logs)) return [];
  return logs.map((log: Record<string, unknown>, i: number) => ({
    id: (log.id as string) || String(i),
    title: String(log.title || ""),
    date: normalizeDate(log.date),
    content: String(log.content || ""),
  }));
}

export async function getGames(): Promise<Game[]> {
  const q = query(collection(db, GAMES_COLLECTION), orderBy("createdAt", "desc"));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((docSnap) => {
    const data = docSnap.data();
    return {
      id: docSnap.id,
      slug: data.slug ?? "",
      title: data.title ?? "",
      genre: data.genre ?? "",
      summary: data.summary ?? "",
      description: data.description ?? "",
      cover: data.cover ?? "",
      demoUrl: data.demoUrl ?? "",
      tags: Array.isArray(data.tags) ? data.tags : [],
      devLogs: normalizeDevLogs(data.devLogs),
      featured: data.featured === true,
      createdAt: data.createdAt?.toMillis?.(),
      updatedAt: data.updatedAt?.toMillis?.(),
    } as Game;
  });
}

export async function getGameBySlug(slug: string): Promise<Game | null> {
  const q = query(collection(db, GAMES_COLLECTION), where("slug", "==", slug));
  const snapshot = await getDocs(q);
  if (snapshot.empty) return null;
  const docSnap = snapshot.docs[0];
  const data = docSnap.data();
  return {
    id: docSnap.id,
    slug: data.slug ?? "",
    title: data.title ?? "",
    genre: data.genre ?? "",
    summary: data.summary ?? "",
    description: data.description ?? "",
    cover: data.cover ?? "",
    demoUrl: data.demoUrl ?? "",
    tags: Array.isArray(data.tags) ? data.tags : [],
    devLogs: normalizeDevLogs(data.devLogs),
    featured: data.featured === true,
    createdAt: data.createdAt?.toMillis?.(),
    updatedAt: data.updatedAt?.toMillis?.(),
  } as Game;
}

export async function createGame(game: Omit<Game, "id">): Promise<string> {
  const docRef = await addDoc(collection(db, GAMES_COLLECTION), {
    ...game,
    devLogs: game.devLogs || [],
    tags: game.tags || [],
    featured: game.featured === true,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
  return docRef.id;
}

export async function updateGame(id: string, game: Partial<Game>): Promise<void> {
  const docRef = doc(db, GAMES_COLLECTION, id);
  const updateData: Record<string, unknown> = { ...game, updatedAt: serverTimestamp() };
  delete updateData.id;
  await updateDoc(docRef, updateData);
}

export async function deleteGame(id: string): Promise<void> {
  await deleteDoc(doc(db, GAMES_COLLECTION, id));
}
