"use server"

import {connectDb} from "@/shared/libs/db";
import Email from "@/models/email.model";

// this fuction will handle delete functionalty of the application.
export const deleteEmail= async({emailId}: {emailId: string})=>{
    try {
        await connectDb();
        await Email.findByIdAndDelete(emailId);
        return {message: "Email deleted succesfully!"};

    }
    catch(error){
        return { error:"An error occured while saving the email."};
    }
};