import { serve, setup } from "swagger-ui-express";
import { readFileSync } from "fs";
import { resolve } from "path";

export default function docs(app) {
    const css = readFileSync(
        resolve(__dirname, "../../node_modules/swagger-ui-dist/swagger-ui.css"),
        "utf-8"
    );

    app.use(
        "/docs",
        serve,
        setup(require("./swagger_output.json"), {
            customCss: css,
        })
    );
};
