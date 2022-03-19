import { Request, Response, Router } from "express";

const router = Router()

router.get("/", (req:Request,res:Response) => {
    res.render("login",{layout:"login"})
})
router.get("/dashboard", (req:Request,res:Response) => {
    res.render("dashboard")
})

export default router