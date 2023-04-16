import express from "express";
import routes from "./src/route/ApiRouter.js";
import { config } from "dotenv";

const app = express();

config({ path: ".env" });

app.use(express.json());
app.use(routes);

app.listen(process.env.PORT, () => {
  console.info(`Application started at port ${process.env.PORT}.`);
});
