// /* eslint-disable react-hooks/exhaustive-deps */
// "use client ";

// import { useClerk } from "@clerk/nextjs";
// import { useEffect,useState } from "react";
// import { getSubscribers } from "@/action/get.subscribers";
// // import { error } from "console";


// const useSubscribersData = () => {

//     const [data,setData]= useState([]);
//     const [loading,setLoading]=useState(true);
//     const {user}= useClerk();

//     useEffect(()=>{

//         GetSubscribers();

//     },[user]);

//     const GetSubscribers = async () =>{
//         await getSubscribers({
//             newsLetterOwnerId:user?.id!
//         }).then((res:any)=>{
//             setData(res);
//             setLoading(false);
//         }).catch((error)=>{
//             setLoading(false);
//         });
//     };

//   return {data, loading};
   
  
// }

// export default useSubscribersData


// "use client";

// import { getSubscribers } from "@/action/get.subscribers";
// import { useClerk } from "@clerk/nextjs";
// import { useEffect, useState } from "react";

// const useSubscribersData = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const { user } = useClerk();

//   useEffect(() => {
//     GetSubscribers();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [user]);

//   const GetSubscribers = async () => {
//     await getSubscribers({ newsLetterOwnerId: user?.id! })
//       .then((res: any) => {
//         setData(res);
//         setLoading(false);
//       })
//       .catch((error) => {
//         setLoading(false);
//       });
//   };

//   return { data, loading };
// };

// export default useSubscribersData;

"use client";

import { getSubscribers } from "@/action/get.subscribers";
import { useClerk } from "@clerk/nextjs";
import { useEffect, useState } from "react";

const useSubscribersData = () => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const { user } = useClerk();

  useEffect(() => {
    if (user) {
      GetSubscribers();
    } else {
      console.error("User is not authenticated.");
      setLoading(false);
    }
  }, [user]);

  const GetSubscribers = async () => {
    try {
      console.log("Fetching subscribers for user:", user?.id);
      const res = await getSubscribers({ newsletterOwnerId: user?.id! });
      
      if (res && res.length > 0) {
        console.log("Subscribers fetched:", res);
        setData(res);
      } else {
        console.log("No subscribers found.");
        setData([]); // Ensure data is set to an empty array if no subscribers are found
      }
    } catch (error) {
      console.error("Error fetching subscribers:", error);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading };
};

export default useSubscribersData;