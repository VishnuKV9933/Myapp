import React from "react";
import logo from "../Images/logo.png";
import dashboard from "../Images/dashboard 1.png";
import campaign from "../Images/campaign 1.png"
import command  from "../Images/command 1.png"
import Bruchesta  from "../Images/channels1 1.png"
import Screans  from "../Images/devices1 1.png"
import media  from "../Images/media library 1.png"
import history  from "../Images/history 5.png"
import zone  from "../Images/zone 2.png"

function SideBar() {
  return (
    <div
      style={{ backgroundColor: "#0B3366" }}
      className=" flex flex-col h-full"
    >
      <div className="p-4">
        <img src={logo} alt="img" />
      </div>

      <div className="mt-6 ">

      <div
          style={{ backgroundColor: "#082A56" }}
          className="p-2  flex  pl-5 gap-3 text-white"
        >
          <img className="h-5 mt-1" src={dashboard} alt="img" />
            Dashboard
            </div>

        <div
       
          className="p-2  flex  pl-5 gap-3 text-white"
        >
          <img className="h-5 mt-1" src={campaign} alt="img" />
            Campaignonal
            </div>

        <div className="p-2 flex  pl-5 gap-3 text-white">
          <img className="h-5 mt-1" src={command} alt="img" />
          Commands
        </div>

        <div className="p-2 flex  pl-5 gap-3 text-white">
          <img className="h-5 mt-1" src={zone} alt="img" />
          Bruchesta
        </div>

        <div className="p-2 flex  pl-5 gap-3 text-white">
          <img className="h-5 mt-1" src={Bruchesta} alt="img" />
          Zonal
        </div>

        <div className="p-2 flex  pl-5 gap-3 text-white">
          <img className="h-5 mt-1" src={Screans} alt="img" />
          Screens
        </div>

        <div className="p-2 flex  pl-5 gap-3 text-white">
          <img className="h-5 mt-1" src={media} alt="img" />
          Media Assets
        </div>

        <div className="p-2 flex  pl-5 gap-3 text-white">
          <img className="h-5 mt-1" src={history} alt="img" />
          History
        </div>

      

      
      </div>
    </div>
  );
}

export default SideBar;
