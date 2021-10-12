import React from "react";
import imgFive from "../../Images/undraw_towing_6yy4.png";

const Notfound = () => {
  return (
    <div>
      <p className="text-xl text-red-500 text-center mt-12">
        sorry :( 404 not found
      </p>
      <img src={imgFive} alt="" />
    </div>
  );
};

export default Notfound;
