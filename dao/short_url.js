import ShortUrl from '../model/short_url.model.js';



export const SaveshortUrl = async (short_url, url, userid) => {
    try {
        console.log("APP_URL:", process.env.APP_URL);
        const newUrl = new ShortUrl({
            full_url: url,
            short_url: short_url, // Only the code, not the full URL
        });


        console.log("New URL object:", newUrl);
        if (userid) {
            newUrl.user_id = userid;
        }
        await newUrl.save();
        console.log("Saved successfully!");
        return newUrl;
    } catch (error) {
        console.error("Error saving URL:", error);
        throw error;
    }
}