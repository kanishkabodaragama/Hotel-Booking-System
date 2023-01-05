import express from "express"
import { createHotel, 
         updateHotel,
         deleteHotel,
         getHotel,
         getHotels } from "../controllers/hotel.js";

         
const router = express.Router();

router.post("/",createHotel );//create

router.put("/:id",updateHotel);//update

router.put("/:id",deleteHotel);//delete

router.put("/:id",getHotel);//get

router.put("/",getHotels);//getall

export default router 