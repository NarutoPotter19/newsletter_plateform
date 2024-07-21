// import mongoose, { connection } from "mongoose";
// import {driver ,createAstraUri} from "stargate-mongoose";


// export const connectDb=async () =>{
//     try {
//         const uri =createAstraUri(process.env.ASTRA_DB_API_ENDPOINT!, process.env.ASTRA_DB_APPLICATION_TOKEN!);
//         // Check if there is Exisiting Connection 
//         if(mongoose.connection.readyState!==0){

//             //Disconnect the exiting connnection
//             await mongoose.disconnect();
//         }
//         mongoose.set("autoCreate",true);
//         mongoose.setDriver(driver);

//         await mongoose
//         .connect(uri,{
//             isAstra:true,
//         })
//         .then((res)=>{
//             console.log("connected");
//         })
//         .catch((r)=>{
//             console.log(r);
//         })



// } catch(error){
//     console.log(error);
// }
// }

// import mongoose from "mongoose";
// import { driver, createAstraUri } from "stargate-mongoose";

// export const connectDb = async () => {
//   try {
//     const uri = createAstraUri(
//       process.env.ASTRA_DB_API_ENDPOINT!,
//       process.env.ASTRA_DB_APPLICATION_TOKEN!
//     );

//     // Check if there's an existing connection
//     if (mongoose.connection.readyState !== 0) {
//       // Disconnect the existing connection
//       await mongoose.disconnect();
//     }
//     mongoose.set("autoCreate", true);
//     mongoose.setDriver(driver);

//     await mongoose
//       .connect(uri, {
//         isAstra: true,
//       })
//       .then((res) => {
//         console.log("connected");
//       })
//       .catch((r) => {
//         console.log(r);
//       });
//   } catch (error) {
//     console.log(error);
//   }
// };



// chat gpt help


import mongoose from "mongoose";
import { driver, createAstraUri } from "stargate-mongoose";
import dotenv from 'dotenv';

// Load environment variables from .env.local file
dotenv.config({ path: '.env.local' });

const connectDb = async () => {
  try {
    const uri = createAstraUri(
      process.env.ASTRA_DB_API_ENDPOINT!,
      process.env.ASTRA_DB_APPLICATION_TOKEN!
    );

    if (mongoose.connection.readyState !== 0) {
      await mongoose.disconnect();
    }

    mongoose.set("autoCreate", true);
    mongoose.setDriver(driver);

    await mongoose.connect(uri, {
      isAstra: true,
    });

    console.log("connected");
  } catch (error) {
    console.log("Database connection error:", error);
  }
};

export default connectDb;



