// " use server ";

// import { connectDb } from "@/shared/libs/db";
// import Email from  "@/models/email.model"

// export const GetEmailDetails = async ({
//     title,
//     newsLetterOwnerId,
// }
// :
// {
//     title: string;
//     newsLetterOwnerId: string;
// })=>{
//     try{
//        await connectDb();
//        const email = await Email.findOne({
//         title,
//         newsLetterOwnerId,
//        });
//        return email;
//     }
//     catch(error){
//         console.log(error);
//     }
// }


// Facing an error cant resolve htt2

// so trying new solution suggested by chat gpt 

// src/action/get.email.details.ts
// export const GetEmailDetails = async ({ title, newsLetterOwnerId }: { title: string; newsLetterOwnerId: string }) => {
//     try {
//       const response = await fetch(`/api/GetEmailDetails?title=${title}&newsLetterOwnerId=${newsLetterOwnerId}`);
//       if (!response.ok) {
//         throw new Error('Failed to fetch email details');
//       }
//       return await response.json();
//     } catch (error) {
//       console.error(error);
//       return null;
//     }
//   };



export const GetEmailDetails = async ({
    title,
    newsLetterOwnerId,
  }: {
    title: string;
    newsLetterOwnerId: string;
  }) => {
    try {
      const response = await fetch(`/api/getEmailDetails?title=${title}&newsLetterOwnerId=${newsLetterOwnerId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch email details');
      }
      return await response.json();
    } catch (error) {
      console.error(error);
      return null;
    }
  };
  
  