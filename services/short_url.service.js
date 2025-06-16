import ShortUrl from "../model/short_url.model.js";
import { Generate_Nanoid } from "../utils/Generate_Nanoid.js";

export const Create_short_url =  (url) => {
    const short_url = Generate_Nanoid(7)

    const newUrl = new ShortUrl({
        full_url:url,
        short_url:short_url
    })
    newUrl.save()

    return newUrl;
}