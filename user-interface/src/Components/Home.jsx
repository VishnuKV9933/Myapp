import React from "react";
import SideBar from "./SideBar";
import Header from "./Header";
import SecondBar from "./SecondBar";
import Generel from "./Generel";
import LiveStatus from "./LiveStatus";
import ActivityLogo from "./ActivityLogo";
import DiviceStatus from "./DiviceStatus";
import location from "../Images/locate.png";
import Domain from "./Domain";


function Home() {
  return (
    <div className="flex">
      <div className="w-48  h-screen">
        <SideBar />
      </div>

      <div style={{ backgroundColor: "#F6F6F6" }} className="w-full h-screen">
        <Header />

        <div className="w-full  h-16 flex items-center">
          <div className="w-1/2">
            <div className="text-2xl	ml-10">Project</div>
          </div>

          <div className="w-1/2 flex justify-end">
            <button className="bg-blue-600 text-white h-10 px-3 text-sm mr-40">
              + Add Project
            </button>
          </div>
        </div>
<div className="mx-10">

<SecondBar/>

<div style={{height:"370px"}} className="flex mt-4 h-80 ">
  <div className=" w-4/6 ">
    <div className="flex gap-4 ">

    <Generel/>
<LiveStatus/>
    </div >

  <div style={{height:"177px"}}  className="mt-4 flex gap-4 ">
    <ActivityLogo/>
    <DiviceStatus/>
      </div>
  </div>


  <div  className=" w-2/6 ml-4 " >

    <div>

    <div className="bg-white pl-4 pb-3 ">
      Location-device
    </div>
    <img src={location} alt="img" />
    </div>

 <Domain/>
  </div>
 
</div>


</div>



      </div>
    </div>
  );
}

export default Home;
