import { cookiesConfig } from "../config/cookies.js";
import { jwtConfig } from "../config/jwt.js";
import { User } from "../model/User.model.js"
import  ApiError  from "../utils/Errorhandler.js";


export const registerUser = async (req, res) => {   

    const { username, email, password } = req.body;

    const user = await User.findOne({email})
    if(user){
        throw new ApiError("User already exists", 400);
    }
const newUser = new User({
    username,
    email,
    password
})
    await newUser.save();

    const token =  jwtConfig({id:newUser._id})

req.user = newUser; // Attach user info to request object
res.cookie('access_token', token ,cookiesConfig).status(201).json({
    success: true,
    message: "User registered successfully",
    data: newUser,
    token: token

});

}

export const loginUser = async (req, res) => {
    const { email, password } = req.body;

const user = await User.findOne({email})
    if(!user){
        throw new ApiError("User not found", 404);
    }

    if(user.password !== password){
        throw new ApiError("Invalid credentials", 401);
    }

     req.user = user; // Attach user info to request object
    const token = jwtConfig({id:user._id})
    
    res.cookie('access_token', token ,cookiesConfig).status(200).json({
        success: true,
        message: "User logged in successfully",
        data: user
    });

}




