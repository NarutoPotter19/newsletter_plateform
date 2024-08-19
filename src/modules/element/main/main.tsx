"use client"
import { useUser } from "@clerk/nextjs";
import DashboardOverviewCard from "@/shared/components/cards/dashboard.overview.card";
import SubscribersChart from "@/shared/components/charts/subscribers.chart";
import { Button } from "@nextui-org/react";
import { ICONS } from "@/shared/utils/icons";
import { useState } from "react";
import toast from "react-hot-toast";

const Main = () => {

    const {user} = useUser();

    const [copied,setCopied]= useState(false);


    const handleCopylink=()=>{
      const smallText= document.querySelector(".copy-text") as HTMLElement;
      if(smallText){
        const textToCopy = smallText.innerText;
        navigator.clipboard.writeText(textToCopy).then(()=>{
          setCopied(true);
          toast.success("Copied");
          setTimeout(()=>{
            setCopied(false);
          },2000);


        });
      }

    }
  return (
    <div className="p-5 w-full bg-white">
        <h1 className="text-2xl text-surface-900 font-medium">
            Hi {user?.fullName} 👋
        </h1>
        <p className="opacity-[.7] text-sm pt-2">
        what&apos;s happening with your account today
        </p>

        <div className="w-full flex">
          <div className="w-[65%] min-h-[88vh] pr-5">
            <br/>
            <DashboardOverviewCard />
            <br/>
            <SubscribersChart />
          </div>

          <div className="w-[35%] p-5">
            {/* Addding Button here */}
            <div className="full flex justify-end">
              <Button className="bg-black text-white text-lg rounded !px-6">
                <span className="mr-1 ml-[-6px]">{ICONS.write}</span>
                Start Writting 
              </Button>

            </div>
            <br/>
            {/* Resources  */}
            <div className="text-xl font-medium ">
              Resources

          </div>
            <div className="w-full bg-white border rounded p-5 my-3">
              {/* Home page URl */}
              <div className="bg-white">
                <h4 className="font-medium"> Home Page</h4>
                <div className="w-full px-2 my-1 h-[30px] bg-transparent border rounded-lg relative flex items center coursor-pointer "
                onClick={handleCopylink}
                >
                 <small className={`w-[70%] text-sm overflow-hidden overflow-ellipsis whitespace-nowrap copy-text ${
                      copied ? "bg-blue-200" : "bg-transparent"
                    }`}>
                      {/* https://becodemy-newletter.beocodemy.com/ */}
                      {process.env.NEXT_PUBLIC_WEBSITE_URL}/subscibe?username={user?.username}


                 </small>
                 <div className="absolute h-[38px] w-[98px] rounded-r-lg bg-[#DFE7FF] right-0 flex items-center justify-center
                 ">
                  <span className="text-lg">
                    {ICONS.copy}
                  </span>
                  <span className="pl-1">
                    Copy
                  </span>

                 </div>

                </div>
              </div>
              
            </div>
          </div>
        </div>
      
    </div>
  )
}

export default Main;



/*
className={`w-[70%] text-sm overflow-hidden overflow-ellipsis whitespace-nowrap copy-text ${
                      copied ? "bg-blue-200" : "bg-transparent"
                    }`}


*/