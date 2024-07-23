// "use server ";

// import Email from "@/models/email.model";
// import {connectDb} from  "@/shared/libs/db";


// export const getEmails = async ({
//     newsLetterOwnerId,}: {
//         newsLetterOwnerId: string;}) =>{
//             try {
//                 await connectDb();
//                 const emails = await Email.find({ newsLetterOwnerId});
//                 return emails;
//             }

//             catch(error){
//                 console.log(error);
//             }

//         };



// chat gpt help 


// action/get.emails.ts
// export const getEmails = async ({ newsLetterOwnerId }: { newsLetterOwnerId: string }) => {
//     try {
//       const response = await fetch(`/api/getEmails?newsLetterOwnerId=${newsLetterOwnerId}`);
//       const data = await response.json();
//       return data;
//     } catch (error) {
//       console.error('Error in getEmails:', error);
//       return null;
//     }
//   };



// projname/src/action/get.email.ts

export const getEmails = async ({ newsLetterOwnerId }: { newsLetterOwnerId: string }) => {
  try {
    // Make sure the URL matches the API route
    const response = await fetch(`/api/getEmail?newsLetterOwnerId=${newsLetterOwnerId}`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch emails: ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

  


