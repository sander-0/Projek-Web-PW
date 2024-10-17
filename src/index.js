import express from "express";
import db from "./utils/database";
import routes from "./routes/api";
import { json, urlencoded } from "body-parser";
import docs from "./docs/route";
import { errorNotFoundMiddleware, errorServerMiddleware } from "./middlewares/error.middleware";

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
