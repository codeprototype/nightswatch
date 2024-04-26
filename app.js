import express from "express";
const app = express();
app.use(express.json());
import cors from "cors";
import path from "path";
const dirname = path
  .dirname(new URL(import.meta.url).pathname)
  .split("/development")
  .pop() || "";
  app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json({
    sucess: true,
    data: "NA",
    message: `Healthcheck OK, Service Name:${dirname}`,
  });
});
console.log(`Healthcheck OK, Service Name:${dirname}`)

const PORT = process.env.PORT || 9005;

app.listen(PORT, () => console.log("Server running at port " + PORT));
