import { Request, Response, Router } from "express";
import { ensureAuth, ensureGuest } from "../middleware/auth";

const router = Router()

router.get("/", ensureGuest, (req:Request,res:Response) => {
    res.render("login",{layout:"login"})
})
router.get("/dashboard", ensureAuth, (req:Request,res:Response) => {
    res.render("dashboard")
})

export default router