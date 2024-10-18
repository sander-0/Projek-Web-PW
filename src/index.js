import express from "express";
import db from "./utils/database.js";
import routes from "./routes/api.js";
import { json, urlencoded } from "body-parser";
import docs from "./docs/route.js";
import { errorNotFoundMiddleware, errorServerMiddleware } from "./middlewares/error.middleware.js";

const app = express();
const PORT = process.env.PORT || 3000;

db();

app.use(json());
app.use(urlencoded({ extended: true }));

app.use("/menu", routes);

// Inisialisasi Swagger UI
docs(app);

app.use(errorNotFoundMiddleware);
app.use(errorServerMiddleware);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
