import axios from "axios";

export const apiService = axios.create({
  responseType: "arraybuffer",
  responseEncoding: "binary",
  validateStatus: (status) => true,
});
