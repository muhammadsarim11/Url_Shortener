import { verifyJwt } from "../config/jwt";
import { User } from "../model/User.model";

export const authMiddleware  = async (req,res,next )=> {
        const token = req.cookies.access_token;
        if (!token) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        
        try {
        const decoded  = verifyJwt(token)
        const user = await User.findById(decoded)
        req.user = user; // Attach user info to request object
            // Attach user info to request object
            next();
        } catch (error) {
            return res.status(403).json({ message: "Invalid token" });
        }
    };
