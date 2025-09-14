export const API = "http://192.168.1.3:3001"; //"https://jsonplaceholder.typicode.com";

export async function apiGet(path, params) {
    const url = new URL(API + path);
    if (params && typeof params === "object") {
        Object.entries(params).forEach(([k, v]) => url.searchParams.append(k, String(v)));
    }
    const res = await fetch(url.toString());
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json();
}