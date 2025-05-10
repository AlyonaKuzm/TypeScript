type CacheStore = {
  [key: string]: string | { data: any; expiresAt: Date };
};

const cache: CacheStore = {
  "user:1": "Alice",
  "post:42": {
    data: { title: "Hello" },
    expiresAt: new Date("2025-01-01"),
  },
};

function getFromCache(cache: CacheStore, key: string): unknown {
  const value = cache[key];
  if (typeof value === "undefined") {
    return undefined;
  }
  if (typeof value === "string") {
    return value;
  }
  if (value.expiresAt > new Date()) {
    return value.data;
  }

  return null;
}

console.log(getFromCache(cache, "post:42"));
