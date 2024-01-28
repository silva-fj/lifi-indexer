import cors from "cors";
import express from "express";
import router from "./router";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", router);

export default app;
