import mongoose from 'mongoose';
 

const ConnectDB =  async()=>{
   try {
     await mongoose.connect("mongodb://localhost:27017/url-shortener", {
        
        })
        console.log(`Connected to MongoDB at ${mongoose.connection.host}`);
     
   } catch (error) {
    console.log(`Error connecting to MongoDB: ${error.message}`);
   }
}

export default ConnectDB;