import React from "react";
import "./Round.css";

function Domain() {
  return (
    <div style={{ height: "120px" }} className="bg-white w-full mt-4 p-4">
      <div>Domain Quata</div>

      <div className="flex">


        <div className="flex">
          <div
            className="flex justify-center items-center w-14 h-14 rounded-full 
            border-8 border-gray-300 bg-transparent ml-4 mr-8 mt-3"
          >
            <p style={{ fontSize: "10px" }} className="ml-2  text-gray-300">
              60.33%
              <span>
                {" "}
                <p className="-mt-2 ml-1">Used</p>
              </span>
            </p>
          </div>

          <div className="flex flex-col h-full justify-center mt-3">
            <div style={{ fontSize: "13px" }} className="text-slate-400">
              Data usage
            </div>
            <div className="text-sm">60.30gb/100gb</div>
          </div>

        </div>

        <div className=" w-full ml-10">
           
            <div className="flex">
            <div className="flex flex-col items-end">
                <div style={{fontSize:"10px"}} className="text-gray-300">Today</div>
                <div style={{fontSize:"12px"}} className="text-sm">30.00</div>
            </div>

            <div className="flex flex-col mt-1 ml-2">
                <div style={{fontSize:"6px"}} className="text-emerald-500">Increase</div>
                <div style={{fontSize:"12px"}} className="text-gray-300">+51.5</div>
            </div>
            </div>

            <div className="flex">
            <div className="flex flex-col items-end">
                <div style={{fontSize:"10px"}} className="text-gray-300">Today</div>
                <div style={{fontSize:"12px"}} className="text-sm">30.00</div>
            </div>

            <div className="flex flex-col mt-1 ml-2">
                <div style={{fontSize:"6px"}} className="text-red-500">Decrease</div>
                <div style={{fontSize:"12px"}} className="text-gray-300">+51.5</div>
            </div>


            </div>


            


        </div>
      </div>

    </div>
  );
}

export default Domain;
