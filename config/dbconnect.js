import mongoose from 'mongoose';
 

const ConnectDB =  async()=>{
   try {
     await mongoose.connect(process.env.MONGO_URL, {
        
        })
        console.log(`Connected to MongoDB at ${mongoose.connection.host}`);
     
   } catch (error) {
    console.log(`Error connecting to MongoDB: ${error.message}`);
   }
}

export default ConnectDB;