// "use client";

// import { useClerk } from "@clerk/nextjs";
// import {FormEvent , useState } from "react";
// import toast from "react-hot-toast";
// import { useSearchParams } from "next/navigation";
// import { subscribe } from "@/action/add.subscribe"


// const Page = () => {

//     const [value,setValue]= useState("");
//     const [loading , setLoading] = useState(false);


//     const {user} = useClerk();
//     const searchParams=useSearchParams();
//     const username: string =searchParams?.get("username")!;
//     // console.log(username);

// const handleSubmit= async (e:FormEvent<HTMLFormElement>)=>{
//   e.preventDefault();
//   setLoading(true);
//   await subscribe({ email: value, username }).then ((res)=>{
//     setLoading(false);
//     if(res.error){
//       toast.error(res.error);
//     }
//     else 
//     {
//       toast.success("your succesfully subscribed ")
//     }

//   })
//   .catch((error)=>{
//     console.log(error);
//     setLoading(false);
//   });
//   setValue("");

// }

//   return (
//     <div className="w-full flex flrx-col items-center  justify-center h-screen">
//         <div>
//             <h1 className="text-7xl pb-8 capitalize">
//             {username} NewsLetter
//             </h1>
//         </div>

//         <form
//         className="tflex w-full max-w-md border rounded overflow-hidden"
//         onSubmit={(e)=>handleSubmit(e)}
//         >
//             <input type="email"
//              name="email" 
//              value={value}
//               onChange={(e) => setValue(e.target.value)}
//               placeholder="Enter your email"
//               className="px-4 py-4 w-full text-gray-700 leading-tight focus:outline-none"
            
//             />
//             <button type="submit"
//             disabled={loading}
//             className="px-8 bg-blue-500 text-white font-bold py-4 rounded-r hover:bg-blue-600 focus:outline-none"
//             >

//           Subscribe
//             </button>

//         </form>
      
//     </div>
//   )
// }

// export default Page



// --------------------> Modified code ---------------------------


"use client";

import { useClerk } from "@clerk/nextjs";
import { FormEvent, useState } from "react";
import toast from "react-hot-toast";
import { useSearchParams } from "next/navigation";
import { subscribe } from "@/action/add.subscribe";

const Page = () => {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const { user } = useClerk();
  const searchParams = useSearchParams();
  const username: string = searchParams?.get("username")!;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await subscribe({ email: value, username });
      if (response.error) {
        toast.error(response.error);
      } else {
        toast.success("You have successfully subscribed!");
      }
    } catch (error) {
      console.error("Subscription error:", error);
      toast.error("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
    setValue("");
  };

  return (
    <div className="w-full flex flex-col items-center justify-center h-screen">
      <div>
        <h1 className="text-7xl pb-8 capitalize">{username} NewsLetter</h1>
      </div>

      <form
        className="flex w-full max-w-md border rounded overflow-hidden"
        onSubmit={handleSubmit}
      >
        <input
          type="email"
          name="email"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter your email"
          className="px-4 py-4 w-full text-gray-700 leading-tight focus:outline-none"
        />
        <button
          type="submit"
          disabled={loading}
          className="px-8 bg-blue-500 text-white font-bold py-4 rounded-r hover:bg-blue-600 focus:outline-none"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Page;

