import ShortUrl from "../model/short_url.model.js"

export const SaveshortUrl = async (short_url,url,userid)=>{
      const newUrl = new ShortUrl({
        full_url:url,
        short_url:process.env.APP_URL + short_url,
    })
   console.log(newUrl) 
    if(userid){
newUrl.user_id = userid

    }
    newUrl.save()
    return newUrl;
  
}