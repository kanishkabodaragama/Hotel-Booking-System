import User from "../models/User.js";
import bcrypt from "bcryptjs";

export const register = async (req,res,next)=>{
 try{
   const salt = bcrypt.genSaltSync(10);
   const hash = bcrypt.hashSync(req.body.password, salt);

    const newUser = new User({
        username:req.body.username,
        email:req.body.email,
        password:hash,

    })

    await newUser.save()
    res.status(200).send("User has been Created")
    
 }catch(err){
    next(err)
 }
}
//login
export const login = async (req,res,next)=>{
   try{
     const user = await User.findOne({username:req.body.username});
     if(!user) return next(createError(404,"User not found"));
     
     const isPasswordCorrect = await bcrypt.compare(
      req.body.passowrd,
      user.password
      );

     if(!isPasswordCorrect) 
     return next(createError(400,"Wrong password"));

     res.status(200).json(user);


   }catch(err){
      next(err)
   }
  }