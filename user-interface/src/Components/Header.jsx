import React from "react";
import image1 from "../Images/head1.png";
import image2 from "../Images/head2.png";
import image3 from "../Images/head3.png";

function Header() {
  return (
    <div style={{backgroundColor:"#FAFAFA"}} className="w-full  h-20 flex justify-end">
      <div className=" flex gap-8 items-center mr-10">
        <div>
          <img src={image1} alt="img" />
        </div>

        <div>
          <img src={image2} alt="img" />
        </div>

        <div>
          <img src={image3} alt="img" />
        </div>
      </div>
    </div>
  );
}

export default Header;
