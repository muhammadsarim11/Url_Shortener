import {  Create_withoutUser_short_url } from "../services/short_url.service.js";
import ApiError from "../utils/Errorhandler.js";

export const short_url_controller = async (req,res)=>{
      const {url} = req.body;

        if(!url){
throw new ApiError("Please provide a URL", 400);
        }
    
        const newShorturl = await Create_withoutUser_short_url(url)
console.log("new url"+ newShorturl)
        return res.status(200).json({
            success:true,
            message:"Short URL created successfully",
            data:newShorturl
        });
        
}


