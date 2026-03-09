import {
  ChartNoAxesGantt,
  CircleQuestionMark,
  Eclipse,
  Grid2x2,
  Grid3x2,
  Grid3x3,
  Library,
  RectangleHorizontal,
  UserRoundKey,
  Users,
} from "lucide-react";
import React, { useState } from "react";

const Dashboard = () => {

  const [dashboardGrid,setDashboardGrid]=useState("grid-cols-2");



  return (
    <>
      <div className="h-screen ">
        <div className="flex gap-4 p-4 ">
        <button onClick={()=>setDashboardGrid("grid-cols-1")} className="bg-black/30 rounded-l-2xl text-violet-600 cursor-pointer p-2">
          <RectangleHorizontal size={"22px"} />
        </button>
        <button onClick={()=>setDashboardGrid("grid-cols-2")}>
          <Grid2x2 size={"40px"} className="bg-black/30 rounded-xl text-violet-600 cursor-pointer p-2"/>
        </button>
        <button onClick={()=>setDashboardGrid("grid-cols-3")}>
          <Grid3x2 size={"40px"} className="bg-black/30 rounded-xl text-violet-600 cursor-pointer p-2"/>
        </button>
        <button onClick={()=>setDashboardGrid("grid-cols-6")}>
          <Grid3x3 size={"40px"} className="bg-black/30 rounded-r-2xl text-violet-600 cursor-pointer p-2"/>
        </button>
        </div>
        <div className={`grid lg:${dashboardGrid} md:${dashboardGrid} grid-cols-1  last-of-type:  gap-4 p-4 `}>
          {dashboardCardData?.map((e) => {
            //   if(e.number < 10) return

            return (
              <div
                key={e?.name}
                className=" rounded-2xl shadow-md px-6 py-8  flex justify-between items-center bg-blue-50"
              >
                <div className="flex flex-col gap-2   ">
                  <span className="text-neutral-500 font-semibold">{e?.name}</span>
                  <span className="text-black font-bold text-2xl">{e?.number}</span>
                </div>
               <span className="outline-0 cursor-pointer"> {e?.icon}</span>
              </div>
            );
          })}
        </div>

      </div>
    </>
  );
};

export default Dashboard;

const dashboardCardData = [
  {
    name: "Question Banks",
    number: "98",
    icon: <Library size={"40px"} className="bg-blue-100 text-blue-600 p-2 rounded-xl shadow-xl" />,
  },
  {
    name: "Attributes",
    number: "77",
    icon: <ChartNoAxesGantt  size={"40px"} className="bg-purple-100 text-purple-600 p-2 rounded-xl shadow-xl"/>,
  },
  {
    name: "Compe-tencies ",
    number: "44",
    icon: <Eclipse  size={"40px"} className="bg-green-100 text-green-600 p-2 rounded-xl shadow-xl "/>,
  },
  {
    name: "Roles ",
    number: "4",
    icon: <UserRoundKey  size={"40px"} className="bg-yellow-50 text-yellow-500 p-2 rounded-xl shadow-xl "/>,
  },
  {
    name: "Questions",
    number: "36",
    icon: <CircleQuestionMark  size={"40px"} className="bg-red-50 text-red-500 p-2 rounded-xl shadow-xl "/>,
  },
  {
    name: "Facleties",
    number: "11",
    icon: <Users  size={"40px"} className="bg-pink-100 text-pink-500 p-2 rounded-xl shadow-xl"/>,
  },
];

