import  jwt  from "jsonwebtoken"

export const jwtConfig =  (payload) => {

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "1d",
    });
    return token;
    }

    export const verifyJwt = (req, res, next) => {
        const token = req.cookies.access_token;
        if (!token) {
            return res.status(401).json({ message: "Unauthorized" });
        }

       const decoded =   jwt.verify(token, process.env.JWT_SECRET)
       return decoded.id
    }