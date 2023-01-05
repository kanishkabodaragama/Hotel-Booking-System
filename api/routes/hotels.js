import express from "express"
import { createHotel, 
         updateHotel,
         deleteHotel,
         getHotel,
         getHotels } from "../controllers/hotel.js";

         
const router = express.Router();

router.post("/",createHotel );//create

router.put("/:id",updateHotel);//update

router.delete("/:id",deleteHotel);//delete

router.get("/:id",getHotel);//get

router.get("/",getHotels);//getall

export default router 