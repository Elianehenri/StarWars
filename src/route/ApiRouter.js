import { Router } from "express";
import CharacterController from "../controller/CharacterController.js";
import PlanetsController from "../controller/PlanetsController.js";
import StarshipsController from "../controller/StarshipsController.js";
import FilmsController from "../controller/FilmsController.js";


const router = new Router();

let status = 200;

router.get("/", (req, res) => {
    res.status(status).send({
        message: "Bem vindo a api Star Wars",
        status: status,
    });
});

router.get("/character", CharacterController.findAll);
router.get("/planets", PlanetsController.findAll );
router.get("/starships", StarshipsController.findAll);
router.get("/films", FilmsController.findAll);
router.get("/films/:title", FilmsController.findByName);

export default router;
