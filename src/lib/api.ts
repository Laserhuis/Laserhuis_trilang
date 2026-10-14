import axios from "axios";

const BACKEND_BASE = (typeof process !== "undefined" && process.env && (process.env as any).REACT_APP_BACKEND_URL) || "";
export const API = `${BACKEND_BASE}/api`;
const client = axios.create({ baseURL: API });

export const getAlbums = () => client.get("/albums").then((r) => r.data);
export const createAlbum = (payload: any) => client.post("/albums", payload).then((r) => r.data);
export const getAlbumImages = (id: string) => client.get(`/albums/${id}/images`).then((r) => r.data);
export const uploadImage = (id: string, file: File) => {
  const form = new FormData();
  form.append("file", file);
  return client.post(`/albums/${id}/images`, form, { headers: { "Content-Type": "multipart/form-data" } }).then((r) => r.data);
};

export const fileUrl = (apiPath: string) => (apiPath.startsWith("http") ? apiPath : `${BACKEND_BASE}${apiPath}`);
export const submitBrandInquiry = (payload: any) => client.post("/brand-inquiry", payload).then((r) => r.data);
export const subscribeNewsletter = (email: string) => client.post("/newsletter", { email }).then((r) => r.data);
