import { Router } from "express";
import CharacterController from "../controller/CharacterController.js";
import PlanetsController from "../controller/PlanetsController.js";


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

export default router;
