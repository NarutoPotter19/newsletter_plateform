// "use client";
// import {NextUIProvider} from '@nextui-org/react';
// import {useUser } from '@clerk/nextjs';
// import { usePathname } from 'next/navigation';  // Get the current pathname.
//  //For example usePathname() on /dashboard?foo=bar would return "/dashboard"

//  interface ProviderProps {
//     children: React.ReactNode;
//  }


//  export default function Providers({children}:ProviderProps){
//     const pathname= usePathname();

//     const {isLoaded} =useUser();
//     if (! isLoaded) {
//         return null;
//     }

//     return (
//         <NextUIProvider>
//             {
//                 pathname!=="/dashboard/new-email" &&
//                 pathname!=="/" &&
//                 pathname!== "/sign-up" &&
//                 pathname!== "/sunscribe" &&
//                 pathname!== "/sign-in" 
//                 ?
//                 (
//                     <div  className="W-full flex">
//                         <div className="w-[290px] h-screen overflow-y-scroll">
//                            {// here i will add Dash board letter 
//                            }
//                         </div>

//                     </div>
//                 ):
//                 (
//                     <>
//                     {children}
//                     </>
//                 )




//             }


//         </NextUIProvider>
//     )
//  }





// New code i m going to add here 



"use client";
import { NextUIProvider } from '@nextui-org/react';
import { useUser } from '@clerk/nextjs';
import { usePathname } from 'next/navigation';

interface ProviderProps {
  children: React.ReactNode;
}

export default function Providers({ children }: ProviderProps) {
  const pathname = usePathname();
  const { isLoaded } = useUser();

  if (!isLoaded) {
    return null;
  }

  // Define the paths that should use the dashboard layout
  const dashboardPaths = [
    "/dashboard/new-email",
    "/dashboard", // Assuming "/dashboard" is also a path to handle
  ];

  // Define the paths that should use the simple layout
  const simplePaths = [
    "/",
    "/sign-up",
    "/subscribe", // Corrected the path from "/sunscribe" to "/subscribe"
    "/sign-in",
    "/sign-up/verify-email-address", // Added the missing path
  ];

  return (
    <NextUIProvider>
      {dashboardPaths.includes(pathname) ? (
        <div className="w-full flex">
          <div className="w-[290px] h-screen overflow-y-scroll">
            {// here I will add Dashboard later
            }
          </div>
          <div className="flex-grow">
            {children}
          </div>
        </div>
      ) : (
        <>{children}</>
      )}
    </NextUIProvider>
  );
}
