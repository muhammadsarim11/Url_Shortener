import ShortUrl from "../model/short_url.model.js";

export const redirectToUrl  = async (req,res)=>{
     const { id } = req.params;
    try {
        const shortUrl = await ShortUrl.findOneAndUpdate(
          { short_url: id },
          { $inc: { clicks: 1 } },
          { new: true }
        );
        // If no shortUrl is found, we return a 404 status code with a message indicating
        // why we are failed to have shortUrl
        if (!shortUrl) {
            return res.status(404).send("URL not found");
        }
        res.redirect(shortUrl.full_url);
    } catch (error) {
        console.error(error);
        res.status(500).send("Server error");
    }
}