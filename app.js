import express from "express";
import routes from "./src/route/CharacterRouter.js";


const app = express();
const PORT = process.env.PORT || 8080;


app.use(express.json());
app.use(routes);


app.listen(PORT, () => {
    console.info(`Application started at port ${PORT}.`);
  });
