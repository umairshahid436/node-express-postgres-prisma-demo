import express from "express";
import bodyParser from "body-parser";
import path from "path";
import helmet from "helmet";
import morgan from "morgan";

import { rootDir } from "./utils/path";
import { errorMiddleware } from "./middleware/error";

const app = express();

import { categoryRoutes } from "./routes/category";
import { pageNotFound } from "./controllers/error";
import { homeRoutes } from "./routes/home";
import { productRoutes } from "./routes/product";

app.use(helmet());
app.use(morgan("dev"));
app.use(express.static(path.join(rootDir, "..", "public")));
// It will register a middleware and it will parse body in request
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());

app.use("/api/categories", categoryRoutes);
app.use("/api/products", productRoutes);
app.use("/", homeRoutes);
app.use(pageNotFound);

// Error handling middleware should be last
app.use(errorMiddleware);

app.listen(process.env.PORT ?? 3000, (error) => {
  if (error) {
    console.error("Failed to start server");
  } else {
    console.log("server running successful");
  }
});
