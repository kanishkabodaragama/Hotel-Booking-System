import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import hotelRoute from "./routes/hotels.js";
import roomRoute from "./routes/rooms.js";
import usersRoute from "./routes/users.js";
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();


//mongo db conncetion start
const connect = async ()=>{
try {
    mongoose.set("strictQuery", false); // got an error so added this line
    await mongoose.connect(process.env.MONGO);
    console.log("Connceted to mongodb.")
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnceted", ()=>{
    console.log("Mongodb Disconnected")
})

mongoose.connection.on("connceted", ()=>{
    console.log("Mongodb connected")
})

//mongo db conncetion end
// adding mongodb link here will effect security. we created a .env file and paste it there. we have to import dotenv as well
// we use mongoose to conncet mongodb. so we have to install mongoose as well


//middleware

app.use((err,req,res,next)=>{
    const errerStatus = err.status || 500;
    const errorMessage = err.message || "Somthing went wrong!";
    return res.status (errerStatus).json({
        success:false,
        status:errerStatus,
        message:errorMessage,
        stack:err.stack,
    })
})
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/hotels", hotelRoute);
app.use("/api/rooms", roomRoute);
app.use("/api/users", usersRoute);
app.use(cookieParser())


app.get("/", (req,res)=>{
    res.send("Hello first request!")
})

app.listen(8890,() =>{
    connect()
    console.log("BackEnd Connected!")
});
