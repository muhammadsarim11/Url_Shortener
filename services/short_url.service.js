import { SaveshortUrl } from "../dao/short_url.js";
import ShortUrl from "../model/short_url.model.js";
import { Generate_Nanoid } from "../utils/Generate_Nanoid.js";

export const Create_withoutUser_short_url = async (url) => {
    const short_url = Generate_Nanoid(7)

 const new_short_url = await SaveshortUrl(short_url, url);

    return new_short_url;
}

export const Create_withUser_short_url = async (url,userid) => {
    const short_url = Generate_Nanoid(7)

 
 const new_short_url = await SaveshortUrl(short_url, url,userid);

    return new_short_url;
}