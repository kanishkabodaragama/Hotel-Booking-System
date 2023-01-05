import express from "express";
const router = express.Router();

router.get("/", (req,res)=>{
    res.send("This is the user endpoint")
})

export default router