// index.ts
import { Hono } from "hono";
import indexRouter from "./routes/index";

const app = new Hono();

app.route("/", indexRouter);

export default app;
