// "use server";

// import *as AWS from "aws-sdk";
// import  *as nodemailer from "nodemailer";

// interface Props {
//     userEmail: string [];
//     subject: string;
//     content: string;

// }

// AWS.config.update({
//     accessKeyId: process.env.AWS_ACCESS_KEY,
//     secretAccesKey: process.env.AWS_SECRET_KEY,
//     region:"us-east-1",

// });

// AWS.config.getCredentials(function(error)=>{
//     if(error){
//         console.log(error.stack);

//     }
// })

// const ses = new AWS.SES({apiVersion: 2010-12-01});

// const adminMail ="hpmagic11@gmail.com";


// // create a transporter for nodemailer

// const transporter = nodemailer.createTransport({
//     SES:ses
// });


// export const sendEmail = async ({userEmail, subject, content}: Props)=>{
//     try{
//         const response = await transporter.sendMail({
//             from:adminMail,
//             to:userEmail,
//             subject: subject,
//             html: content,
//         });

//         return response ;

//     }

//     catch (error){
//           console.log(error);
//           throw error;
//     }
// }


//-------------------------------- For mailgun Integration ----------------------------------

// Import necessary modules
// "use sever";
// import formData from 'form-data';
// import Mailgun from 'mailgun.js';

// // Mailgun Configuration
// const mailgun = new Mailgun(formData);
// const mg = mailgun.client({
//     username: 'api',
//     key: process.env.MAILGUN_API_KEY || 'your-mailgun-api-key-here'
// });

// const adminMail = "hpmagic11@gmail.com";  // Your admin email

// // Define the Props interface
// interface Props {
//     userEmail: string[];
//     subject: string;
//     content: string;
// }

// // Function to send an email using Mailgun
// export const sendEmail = async ({ userEmail, subject, content }: Props) => {
//     try {
//         const response = await mg.messages.create('your-mailgun-domain-here', {
//             from: `Admin <${adminMail}>`,
//             to: userEmail,
//             subject: subject,
//             html: content,
//         });

//         return response;
//     } catch (error) {
//         console.log(error);
//         throw error;
//     }
// };

"use sever";
import formData from 'form-data';
import Mailgun from 'mailgun.js';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });  // Load the environment variables from .env.local

console.log("NEXT_PUBLIC_MAILGUN_API_KEY:", process.env.NEXT_PUBLIC_MAILGUN_API_KEY);  // Log the API key to verify it's being loaded

const apiKey = process.env.NEXT_PUBLIC_MAILGUN_API_KEY;

if (!apiKey) {
    throw new Error('MAILGUN_API_KEY is not defined');
}

const mailgun = new Mailgun(formData);
const mg = mailgun.client({
    username: 'api',
    key: apiKey
});

const adminMail = "mailgun@sandbox9cc5c5f1314044a38eb9b438a24011ac.mailgun.org";  // Your Mailgun sandbox domain email

interface Props {
    userEmail: string[];
    subject: string;
    content: string;
}

export const sendEmail = async ({ userEmail, subject, content }: Props) => {
    try {
        const response = await mg.messages.create('sandbox9cc5c5f1314044a38eb9b438a24011ac.mailgun.org', {
            from: `Admin <${adminMail}>`,
            to: userEmail,
            subject: subject,
            text: "Testing some Mailgun awesomeness!",
            html: content,
        });

        console.log("Email sent successfully:", response);
        return response;
    } catch (error) {
        console.error("Error sending email:", error);
        throw error;
    }
};
