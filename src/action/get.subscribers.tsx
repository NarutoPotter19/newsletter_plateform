// "use server";

// import Subscribers from "@/models/subscribers.model";
// import { connectDb } from "@/shared/libs/db";


// export const getSubscribers = async({
//     newsLetterOwnerId,
// } :{
//     newsLetterOwnerId: string;
// }
// )=>{
//     try {
//         await connectDb();
//         const subscibers = await Subscribers.find({
//             newsLetterOwnerId
//         });

//         return subscibers;
//     }
//     catch (error){
//         console.log(error);
//     }
// };



/*  


"use server";

import Subscriber from "@/models/subscriber.model";
import { connectDb } from "@/shared/libs/db";

export const getSubscribers = async ({
  newsLetterOwnerId,
}: {
  newsLetterOwnerId: string;
}) => {
  try {
    await connectDb();

    const subscribers = await Subscriber.find({
      newsLetterOwnerId,
    });
    return subscribers;
  } catch (error) {
    console.log(error);
  }
};
*/



// "use server";

// import Subscriber from "@/models/subscribers.model";
// import { connectDb } from "@/shared/libs/db";

// export const getSubscribers = async ({
//   newsLetterOwnerId,
// }: {
//   newsLetterOwnerId: string;
// }) => {
//   try {
//     await connectDb();

//     const subscribers = await Subscriber.find({
//       newsLetterOwnerId,
//     });
//     return subscribers;
//   } catch (error) {
//     console.log(error);
//   }
// };

"use server";

import Subscriber from "@/models/subscribers.model";
import { connectDb } from "@/shared/libs/db";

export const getSubscribers = async ({
  newsletterOwnerId,
}: {
  newsletterOwnerId: string;
}) => {
  try {
    await connectDb();

    // Fetching the subscribers from the database
    const subscribers = await Subscriber.find({ newsletterOwnerId });
    
    // Log to verify the fetched subscribers
    console.log('Fetched Subscribers:', subscribers);
    
    return subscribers;
  } catch (error) {
    console.log('Error fetching subscribers:', error);
    return []; // Return an empty array on error to avoid breaking the UI
  }
};