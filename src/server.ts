import express, { Request } from "express";
import { apiService } from "./services/apiService";
import iconv from "iconv-lite";

interface Params {
  search: string;
}

const app = express();
const port = 3001;

app.get("/", (req, res) => {
  res.json({ body: "Success" });
});

app.get("/search/:search", async (req, res) => {
  const { search } = req.params;
  console.log(search);
  const { data } = await apiService.get(
    `https://google.com/search?q=${encodeURI(search)}&hl=pt-BR&`
  );
  const html = iconv.decode(data, "ISO-8859-1");
  res.send(html);
});

app.listen(port, () => {
  console.log(`[server]: Server is runing at http://localhost:${port}`);
});
