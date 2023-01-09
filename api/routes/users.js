import express from "express";
import { updateUser, getUser, getUsers, deleteUser } from "../controllers/user.js";
import  {verifyToken}  from "../utils/verifyToken.js";
 
const router = express.Router();

router.get("/checkauthentication", verifyToken, (req,res,next)=>{
    res.send("hello user you are logged in")
})

router.put("/:id",updateUser);//update

router.delete("/:id",deleteUser);//delete

router.get("/:id",getUser);//get

router.get("/",getUsers);//getall

export default router