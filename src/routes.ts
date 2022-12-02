import { Router } from "express";
import { Controller } from "./apresentation/Controller";

export const router = Router();

const controll = new Controller();

router.get("/produtos", controll.handle);
