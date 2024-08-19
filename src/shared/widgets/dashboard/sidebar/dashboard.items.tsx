
import { sideBarBottomItems, sideBarItems } from "@/app/configs/constants";
import useRouteChange from "@/shared/hooks/useRouterChange";
import { useClerk } from "@clerk/nextjs";
import { redirect,usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect } from "react";
import SidebarFotterLogo from "./sidebarFotter.Logo";
import { ICONS } from "@/shared/utils/icons";

const DashboardItems = ({bottomContent}:{bottomContent?:boolean}) => {
    const { activeRoute, setActiveRoute} = useRouteChange();
    const {signOut,user}=useClerk();
    const pathName= usePathname();

    const LogoutHandler=() =>{
      signOut();
      redirect("/sign-in");
    }

    useEffect(() => {
      if (pathName) {
        setActiveRoute(pathName);
      }
    }, [pathName, setActiveRoute]);
    

    // useEffect(() => {
    //   setActiveRoute(pathName);
    // },[pathName,setActiveRoute]);
//   return (
//     <>
//     {
//         !bottomContent?(
//             <>
//             {sideBarItems.map((items:DashBoardSidebarTypes, index:number )=> (
//                 <Link 
//                 key={index} 
//                 href={items.url}
//                  className="p-2 py-5 flex item-center "
//                  >
//                      <span
//                 className={`text-3xl mr-2 ${
//                   items.url === activeRoute && "text-[#463bbd]"
//                 }`}
//               >
//                 {items.icon}
//               </span>

//               <span  className={`text-xl mr-2 ${
//                   items.url === activeRoute && "text-[#463bbd]"
//                 }`}
//                 >
//                   {items.title}
//                 </span>

//                 </Link>
//             ))}
//             </>
//         ) : (<>{
//           sideBarBottomItems.map((items:DashBoardSidebarTypes, index:number)=>(
//             <Link 
//             key={index}
//                 className="p-2 py-5 flex items-center"
//                 href={items.url==='/' ?
//                   '/subscriber?username=${user?.username}':
//                   items.url
//                 }
//                 >
//                   <span className={`text-3xl mr-2 ${
//                     items.url === activeRoute && "text-[#463bbd]"
//                   }`}
//                 >
//                   {items.icon}
//                   </span>

//                   <span className={`text-3xl mr-2 ${
//                     items.url=== activeRoute && "text-[#463bbd]"
//                   }`}
//                   >
//                     {items.title}
//                   </span>


//                 </Link>
//           ))
//         }
//         </>)
// {/* sign out */}


//     }
//     </>
   
//   )
// }

// export default DashboardItems;

return (
  <>
    {!bottomContent ? (
      <>
        {sideBarItems.map((item: DashBoardSidebarTypes, index: number) => (
          <Link
            key={index}
            href={item.url}
            className="p-2 py-5 flex items-center"
          >
            <span
              className={`text-3xl mr-2 ${
                item.url === activeRoute && "text-[#463bbd]"
              }`}
            >
              {item.icon}
            </span>
            <span
              className={`text-xl mr-2 ${
                item.url === activeRoute && "text-[#463bbd]"
              }`}
            >
              {item.title}
            </span>
          </Link>
        ))}
      </>
    ) : (
      <>
        {sideBarBottomItems.map(
          (item: DashBoardSidebarTypes, index: number) => (
            <Link
              key={index}
              className="p-2 py-5 flex items-center"
              href={
                item.url === "/"
                  ? `/dashboard/subscribe?username=${user?.username}`
                  : item.url
              }
              // href={
              //   item.url === "/"
              //     ? `/subscribe?username=${user?.username ?? ""}`
              //     : item.url
              // }
              


            >
              <span
                className={`text-3xl mr-2 ${
                  item.url === activeRoute && "text-[#463bbd]"
                }`}
              >
                {item.icon}
              </span>
              <span
                className={`text-xl mr-2 ${
                  item.url === activeRoute && "text-[#463bbd]"
                }`}
              >
                {item.title}
              </span>
            </Link>
          )
        )}


<div className="p-2 py-5 flex items-center cursor-pointer border-b"
          onClick={LogoutHandler}
          >
            <span className="text-3xl mr-2">{ICONS.logOut}</span>
            <span className="text-xl">Sign Out</span>
          </div>
          {/* footer */}
          <br />
          <br />
          <div className="w-full flex justify-center cursor-pointer">
            <SidebarFotterLogo />
          </div>
        
        <p className="text-sm text-center pt-5 pb-10">
          © 2024 Becodemy, Inc. All rights reserved.
        </p>
      </>
    )}
  </>
);
};

export default DashboardItems;
