import express from 'express';
import { nanoid } from 'nanoid';
import dotenv from 'dotenv';
dotenv.config({ path: './.env' });
import ConnectDB from './config/dbconnect.js';
import ShortUrl from './model/short_url.model.js';
import shortUrlRouter from './routes/short_url.route.js';
import { redirectToUrl } from './conrolllers/redirect.controller.js';
import cors from 'cors'
import { registerUser } from './conrolllers/User.controller.js';
import authRoutes from './routes/User.route.js';



const app = express();
app.use(cors())

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/',(req,res)=>{
   res.send("hello world");

})

app.use("/api/auth", authRoutes)

app.use('/api/create',shortUrlRouter)
app.get("/:id",redirectToUrl); 

app.listen(3000,()=>{
    ConnectDB()
    console.log('Server is running on port http://localhost:3000');
})
