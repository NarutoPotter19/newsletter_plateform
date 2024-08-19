// "use server ";

// import Subscribers from "@/models/subscribers.model";
// import {connectDb} from "@/shared/libs/db";
// import { validateEmail } from "@/shared/utils/ZeroBounceApi";
// import { clerkClient } from "@clerk/nextjs/server";

// export const subscribe = async (
//     {
//         email, 
//         username ,

//     }:
//     {
//         email: string ;
//         username : string ;

//     }
// )=>{
//     try {
//         await connectDb;

//         // first we need to fetch all users{ since we can retrieve user via username cleark dont support //this } 

//         const allUsersResponse = await clerkClient.users.getUserList();
//         const allUsers= allUsersResponse.data;

        
        
//         // Now we need to find our newslletterOwner
//         const newsletterOwner= allUsers.find((i)=> i.username === username);
//         /*  facing follwing issue : Property 'find' does not exist on type 'PaginatedResourceResponse<User[]>'
// to resolve this i will extexct data from pagineated response which is going to be array on line no 23 and 24  and then apply find function.
        
//         */

     

// // check if already exist 

// const isSubscribersExist = await Subscribers.findOne({
//     email,
//     newsletterOwnerId: newsletterOwner?.id,

// });
// if (!newsletterOwner){
//     throw Error("Username is Not Valid");
// }

// if(isSubscribersExist){

//     return{error:"Email already exist !"};
// }


// // Now we need to vaildae our email

// const validationResponse = await validateEmail({email});
// if(validationResponse.status === "invalid"){
//     return { error:" Email is Not valid!"}
// }

// // if email is valid we will be creating new subscibers

// const subscriber= await Subscribers.create({
//     email,
//     newsletterOwnerId:newsletterOwner?.id,
// });
// return subscriber;

//     }

//     catch (error){
//         console.error(error);
//         return {error: "An error has occured while subscribing "};

//     }
// };



//--------------------------> TO solve HTTP2 error <-----------------------------

// src/action/add.subscribe.ts
// src/action/add.subscribe.ts
"use server";

import Subscribers from "@/models/subscribers.model";
import { connectDb } from "@/shared/libs/db";
import { validateEmail } from "@/shared/utils/ZeroBounceApi";
import { clerkClient } from "@clerk/nextjs/server";

export const subscribe = async ({
  email,
  username,
}: {
  email: string;
  username: string;
}) => {
  try {
    await connectDb();

    // Fetch all users
    const allUsersResponse = await clerkClient.users.getUserList();
    const allUsers = allUsersResponse.data;

    // Find newsletter owner by username
    const newsletterOwner = allUsers.find((i) => i.username === username);

    if (!newsletterOwner) {
      throw new Error("Username is not valid");
    }

    // Check if the subscriber already exists
    const isSubscribersExist = await Subscribers.findOne({
      email,
      newsletterOwnerId: newsletterOwner.id,
    });

    if (isSubscribersExist) {
      return { error: "Email already exists!" };
    }

    // Validate the email
    const validationResponse = await validateEmail({ email });
    if (validationResponse.status === "invalid") {
      return { error: "Email is not valid!" };
    }

    // Create a new subscriber
    const subscriber = await Subscribers.create({
      email,
      newsletterOwnerId: newsletterOwner.id,
    });

    console.log("Subscriber created:", subscriber);

    return subscriber;

  } catch (error: any) {
    console.error("Subscription error:", error.message);
    return { error: `An error occurred while subscribing: ${error.message}` };
  }
};
