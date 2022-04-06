import axios from "axios";

export const apiService = axios.create({
  responseType: "arraybuffer",
  responseEncoding: "binary",
  validateStatus: (status) => true,
  headers: {
    "User-Agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3694.0 Safari/537.36 Chrome-Lighthouse",
  },
});
