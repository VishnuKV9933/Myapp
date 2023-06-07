import React from "react";
import img1 from "../Images/activity1.png";
import img2 from "../Images/activity2.png";
import img3 from "../Images/activity3.png";



function ActivityLogo() {
  return (
    <div className="w-1/2 bg-white h-full pt-4 pl-4">
      <div className="mb-3">Activity Logos</div>

      <div className="overflow-y-scroll">

      <div className="flex">
        <img className="w-4 h-4" src={img1} alt="" />

        <div className=" w-4/6 text-slate-400 ml-4">
          <div className="text-sm">Device</div>
          <div style={{ fontSize: "10px" }} className="">
            FutureIk device 3 report generate successfully
          </div>
        </div>

        <div className="text-sm text-slate-400">
          <div style={{ fontSize: "13px" }}>16 Mar 2023</div>
          <div style={{ fontSize: "13px" }}>16:30:25 pm</div>
        </div>
      </div>

      <hr/>


      <div className="flex">
        <img className="w-4 h-4" src={img2} alt="" />

        <div className=" w-4/6 text-slate-400 ml-4">
          <div className="text-sm">Device</div>
          <div style={{ fontSize: "10px" }} className="">
            FutureIk device 3 report generate successfully
          </div>
        </div>

        <div className="text-sm text-slate-400">
          <div style={{ fontSize: "13px" }}>16 Mar 2023</div>
          <div style={{ fontSize: "13px" }}>16:30:25 pm</div>
        </div>
      </div>

      <hr/>

      <div className="flex">
        <img className="w-4 h-4" src={img3} alt="" />

        <div className=" w-4/6 text-slate-400 ml-4">
          <div className="text-sm">Device</div>
          <div style={{ fontSize: "10px" }} className="">
            FutureIk device 3 report generate successfully
          </div>
        </div>

        <div className="text-sm text-slate-400">
          <div style={{ fontSize: "13px" }}>16 Mar 2023</div>
          <div style={{ fontSize: "13px" }}>16:30:25 pm</div>
        </div>
      </div>
      </div>





    </div>
  );
}

export default ActivityLogo;
