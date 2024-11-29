
import cookieParser from "cookie-parser";
import cors from "cors";
import express, { Application, Request, Response } from "express";
import config from "./app/config";
import globalErrorHandler from "./app/middleware/globalErrorHandler";
import notFound from "./app/middleware/notFound";
import router from "./app/routes";
import morgan from "morgan";


const app: Application = express();

// Parser
app.use((req, res, next) => {
  if (req.originalUrl === "/api/v1/product/buy-product/stripe/webhook") {
    next();
  } else {
    express.json()(req, res, next);
  }
});

app.use(morgan("dev"));

// app.use(express.json())
app.use(
  cors({
    origin: config.base_url,
    credentials: true,
  })
);
app.use(cookieParser());

// const static_folder = path.join(__dirname, "..", "public");
// app.use(express.static(static_folder));
// application routes
app.use("/api/v1", router);

app.get("/", (req: Request, res: Response) => {
 res.send(`<h2>hello from pickaboo</h2>`)
});

// global error handler
app.use(globalErrorHandler);

// Not Found
app.use(notFound);

export default app;
