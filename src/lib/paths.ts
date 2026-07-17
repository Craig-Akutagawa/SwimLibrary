const base = import.meta.env.BASE_URL;

export function withBase(path = "") {
  const normalized = path.replace(/^\/+/, "");
  return (base + normalized).replace(/\/{2,}/g, "/");
}

