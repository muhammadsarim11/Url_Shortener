import {  Create_withoutUser_short_url } from "../services/short_url.service.js";

export const short_url_controller = async (req,res)=>{
      const {url} = req.body;

        if(!url){
            return res.status(400).json({
                success:false,
                message:"Please provide a URL"
            });
        }
    
        const newShorturl = await Create_withoutUser_short_url(url)
console.log("new url"+ newShorturl)
        return res.status(200).json({
            success:true,
            message:"Short URL created successfully",
            data:newShorturl
        });
        
}


