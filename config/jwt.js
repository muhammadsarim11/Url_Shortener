import  jwt  from "jsonwebtoken"

export const jwtConfig =  (payload) => {

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "1d",
    });
    return token;
    }