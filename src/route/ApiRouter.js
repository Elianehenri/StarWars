import { Router } from "express";

import StarWarsController from "../controller/StarWarsController.js"


const router = new Router();

let status = 200;

router.get("/", (req, res) => {
    res.status(status).send({
        message: "Bem vindo a api Star Wars",
        status: status,
    });
});

router.get("/character", StarWarsController.findAllCharacter);
router.get("/planets", StarWarsController.findAllPlanets);
router.get("/starships", StarWarsController.findAllStarships);
router.get("/films", StarWarsController.findAlFilms);
router.get("/films/:title", StarWarsController.findByName);

export default router;
