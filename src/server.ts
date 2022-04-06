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
  const queryParams = !!props
    ? Object.keys(props)
        .map((key) => `${key}=${props[key]}`)
        .join("&")
    : "";
  const { data } = await apiService.get(
    `https://google.com/search?q=${q}&${queryParams}&hl=pt-BR&`
  );
  res.send(data);
});

app.listen(port, () => {
  console.log(`[server]: Server is runing at http://localhost:${port}`);
});
