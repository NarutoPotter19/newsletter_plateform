import {useEffect, useState} from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

interface subscribersAnalyticData{
    month:string;
    count:string 
}

const SubscribersChart = () => {

    const [subscibersData,setsubscribersData]=useState<any>([]);
    const data=[
        {
          "month": "January 2024",
          "count": "1500"
        },
        {
          "month": "February 2024",
          "count": "1800"
        },
        {
          "month": "March 2024",
          "count": "2100"
        },
        {
          "month": "April 2024",
          "count": "2300"
        },
        {
          "month": "May 2024",
          "count": "2500"
        },
        {
          "month": "June 2024",
          "count": "2700"
        },
        {
          "month": "July 2024",
          "count": "3000"
        },
        {
          "month": "August 2024",
          "count": "3200"
        },
        {
          "month": "September 2024",
          "count": "3500"
        },
        {
          "month": "October 2024",
          "count": "3700"
        },
        {
          "month": "November 2024",
          "count": "4000"
        },
        {
          "month": "December 2024",
          "count": "4500"
        },
      ]
;      
  return (
  //  <div className="my-5 p-5 border rounded bg-white w-full md:h-[55vh] xl:h-[60vh]"> 
  //   <div className="w-full flex">
  //       <h3 className="font-medium">
  //           Active Subscribers
  //       </h3>
  //   </div >
  //   <div className="flex w-full items-center justify-between">
  //       <p className="opacity-[.5]">
  //           Show all active subscribers
  //       </p>
  //       <div className="flex items-cente">
  //           <div className="w-2 h-2 rounded-full bg-[#EB4898]">
  //               <span className="pl-2 text-sm opacity-[.7]">
  //                   Sunscribers
  //               </span>
  //               </div>
  //       </div>
  //       <ResponsiveContainer width="100%" height={"85%"} className={"mt-5"}>
  //         <LineChart
  //           width={500}
  //           height={200}
  //           data={data}
  //           syncId="anyId"
  //           margin={{
  //             top: 10,
  //             right: 30,
  //             left: 0,
  //             bottom: 0,
  //           }}
  //         >
  //           <CartesianGrid strokeDasharray="3 3" />
  //           <XAxis dataKey="month" />
  //           <YAxis />
  //           <Tooltip />
  //           <Line
  //             type="monotone"
  //             dataKey="count"
  //             stroke="#EB4898"
  //             fill="#EB4898"
  //           />
  //         </LineChart>
  //       </ResponsiveContainer>
  //   </div>
  //  </div>



    <div className="my-5 p-5 border rounded bg-white w-full md:h-[55vh] xl:h-[60vh]">
      <div className="w-full flex">
        <h3 className="font-medium">Active Subscribers</h3>
      </div>
      <div className="flex w-full items-center justify-between">
        <p className="opacity-[.5]">Shows all active subscribers</p>
        <div className="flex items-center">
          <div className="w-2 h-2 rounded-full bg-[#EB4898]" />
          <span className="pl-2 text-sm opacity-[.7]">Subscribers</span>
        </div>
      </div>
      
        <ResponsiveContainer width="100%" height={"85%"} className={"mt-5"}>
          <LineChart
            width={500}
            height={200}
            data={data}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="count"
              stroke="#EB4898"
              fill="#EB4898"
            />
          </LineChart>
        </ResponsiveContainer>
     
    </div>
  );
};

export default SubscribersChart;
