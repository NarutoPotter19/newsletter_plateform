// import mongoose from "mongoose";

// const {Schema} = mongoose;

// const subscribersSchema = new Schema(
//     {
//         email :{
//                     type :String ,
//         },
//         newsletterOwnersId:{
//             type: String,
//         },

//     },
//     {timestamps: true }
// );


// const Subscribers = 
// mongoose.models.Subscribers || mongoose.model("Subscriber", subscribersSchema);
// /* This line of code is related to Mongoose, a popular MongoDB object modeling tool for Node.js. Here’s a breakdown of what it does:

// mongoose.models.Subscribers: This checks if a model named “Subscribers” already exists in the mongoose.models collection. Mongoose keeps track of all the models that have been created in this models object.
// || (Logical OR operator): This operator is used to return the first truthy value. If mongoose.models.Subscribers exists, it will be returned. If it doesn’t exist (i.e., it’s undefined or null), the code on the right side of the || operator will be executed.
// mongoose.model("Subscriber", subscribersSchema): This creates a new model named “Subscriber” using the subscribersSchema. If mongoose.models.Subscribers was undefined, this part of the code will run, creating the model and adding it to mongoose.models.
// In summary, this line of code ensures that the “Subscriber” model is only created once. If it already exists, it uses the existing model; otherwise, it creates a new one.
// */

// export default Subscribers;

//------------------Modified code ------------------------------->

import mongoose from "mongoose";

const { Schema } = mongoose;

const subscribersSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    newsletterOwnerId: { // Corrected the field name to match usage
      type: String,
      required: true,
    },
    source:{
        type: String,
        default: "By Shivankit website",
    },
    status:{
        type:String,
        default: "Subscribed"

    },
  },
  { timestamps: true }
);

const Subscribers =
  mongoose.models.Subscribers || mongoose.model("Subscribers", subscribersSchema);

export default Subscribers;
