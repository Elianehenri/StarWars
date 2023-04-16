import { Router } from "express";
import CharacterController from "../controller/CharacterController.js";


const router = new Router();

let status = 200;

router.get("/", (req, res) => {
    res.status(status).send({
        message: "Bem vindo a api Star Wars",
        status: status,
    });
});

router.get("/character", CharacterController.findAll);


export default router;
