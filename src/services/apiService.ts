import axios from "axios";

export const apiService = axios.create({
  responseType: "document",
  responseEncoding: "utf-8",
  validateStatus: (status) => true,
  headers: {
    "Accept-Language": "pt",
    "Cache-Control": "max-age=0",
    "User-Agent":
      "Mozilla/5.0 (X11; CrOS x86_64 8172.45.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.2704.64 Safari/537.36",
  },
});
