// import mongoose from "mongoose";
// import { Schema } from "mongoose";

// const emailSchema = new Schema(
//     {
//         title: {
//             type:String ,
            
//         },
//         content:{
//             type:String ,
//         },
//         newsLetterOwnerId:{
//             type:String,
//         },

//     },
//     {
//         timestamps:true
//     }
// );

// const Email = mongoose.models.Email || mongoose.model("Email",emailSchema);
// export default Email ;




// import mongoose from "mongoose";

// const { Schema } = mongoose;

// const emailSchema = new Schema(
//   {
//     title: {
//       type: String,
//     },
//     content: {
//       type: String,
//     },
//     newsLetterOwnerId: {
//       type: String,
//     },
//   },
//   { timestamps: true }
// );

// const Email = mongoose.models.Email || mongoose.model("Email", emailSchema);
// export default Email;




//chat gpt help 


import mongoose, { Schema, Document } from "mongoose";

interface IEmail extends Document {
  title: string;
  content: string;
  newsLetterOwnerId: string;
}

const emailSchema = new Schema<IEmail>(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    newsLetterOwnerId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Email = mongoose.models.Email || mongoose.model<IEmail>("Email", emailSchema);
export default Email;

