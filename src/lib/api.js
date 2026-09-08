import axios from "axios";

const BACKEND_BASE = (typeof process !== "undefined" && process.env && process.env.REACT_APP_BACKEND_URL) || "";
export const API = `${BACKEND_BASE}/api`;
const client = axios.create({ baseURL: API });

export const getAlbums = () => client.get("/albums").then((r) => r.data);
export const createAlbum = (payload) => client.post("/albums", payload).then((r) => r.data);
export const getAlbumImages = (id) => client.get(`/albums/${id}/images`).then((r) => r.data);
export const uploadImage = (id, file) => {
  const form = new FormData();
  form.append("file", file);
  return client.post(`/albums/${id}/images`, form, { headers: { "Content-Type": "multipart/form-data" } }).then((r) => r.data);
};
// Backend returns urls like "/api/files/<path>"; prefix with backend host.
export const fileUrl = (apiPath) => (apiPath.startsWith("http") ? apiPath : `${BACKEND_BASE}${apiPath}`);
export const submitBrandInquiry = (payload) => client.post("/brand-inquiry", payload).then((r) => r.data);
export const subscribeNewsletter = (email) => client.post("/newsletter", { email }).then((r) => r.data);
