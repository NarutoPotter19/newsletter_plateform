// type ZeroBounceResponse= any;

// const baseUrl = "https://api.zerobounce.net/v2";

// export const validateEmail = async ({
//     email
// }: {
//     email:string;

// }): Promise<ZeroBounceResponse> => {
//     const uri =`${baseUrl}/validate?api_key =${process.env.ZeroBounce_API_KEY}&email={email}`

//     try {
//         const response = await fetch (uri, {method: "GET"});
//         if(!response.ok){
//             throw new Error(`HTTP Error ! Response Status: ${response.status}`);
//         }

//         const data:ZeroBounceResponse = await response.json ();
//         return data ;

//     }
//     catch(error){
//         console.log("error fetching ZeroBounceApi :", error);
//         throw error;
//     }
// };



//-----------------------> modifies code for eleminating error<-------------------------
type ZeroBounceResponse = any;

const baseUrl = "https://api.zerobounce.net/v2";

export const validateEmail = async ({
  email,
}: {
  email: string;
}): Promise<ZeroBounceResponse> => {
  const uri = `${baseUrl}/validate?api_key=${process.env.ZeroBounce_API_KEY}&email=${email}`;

  try {
    const response = await fetch(uri, { method: "GET" });
    if (!response.ok) {
      throw new Error(`HTTP Error! Response Status: ${response.status}`);
    }

    const data: ZeroBounceResponse = await response.json();
    return data;
  } catch (error: any) {
    console.log("Error fetching ZeroBounceApi:", error.message);
    throw error;
  }
};
