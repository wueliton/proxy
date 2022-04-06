import express, { Request } from "express";
import { apiService } from "./services/apiService";
import iconv from "iconv-lite";
import "dotenv/config";

interface Params {
  search: string;
}

const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.json({ body: "Success" });
});

app.get("/search", async (req, res) => {
  const { q, ...props } = req.query;
  const { data } = await apiService.get(
    `https://google.com/search?q=${q}&${props}&hl=pt-BR&`
  );
  const html = iconv.decode(data, "ISO-8859-1");
  res.send(html);
});

app.listen(port, () => {
  console.log(`[server]: Server is runing at http://localhost:${port}`);
});
