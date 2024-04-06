"use client";
import {NextUIProvider} from '@nextui-org/react';

import { usePathname } from 'next/navigation';  // Get the current pathname.
 //For example usePathname() on /dashboard?foo=bar would return "/dashboard"

 interface ProviderProps {
    children: React.ReactNode;
 }


 export default function Providers({children}:ProviderProps){
    const pathname= usePathname();

    return (
        <NextUIProvider>
            {
                pathname!=="/dashboard/new-email" &&
                pathname!=="/" &&
                pathname!== "sign-up" &&
                pathname!== "sunscribe" &&
                pathname!== "/sign-in" 
                ?
                (
                    <div  className="W-full flex">
                        <div className="w-[290px] h-screen overflow-y-scroll">
                           {// here i will add Dash board letter 
                           }
                        </div>

                    </div>
                ):
                (
                    <>
                    {children}
                    </>
                )




            }


        </NextUIProvider>
    )
 }