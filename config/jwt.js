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

        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                return res.status(403).json({ message: "Forbidden" });
            }
            req.user = decoded;
            next();
        });
    }