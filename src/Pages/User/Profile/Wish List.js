import React from "react";
import WishItem from "./wish-item";
import Back from "../../Components/Back";
import Bin from "../../Components/Bin";

const WishList = () => {
  return (
    <div className="user-wrapper">
      <div className="header">
        <div className="category">
          <div className="object-1">
            <Back width={30} height={30} />
          </div>
          <div className="object-2"> Wish List (1)</div>
        </div>
      </div>

      <div className="main ">
        <div className="wrapper-item">
          {Array(10)
            .fill()
            .map((item, index) => (
              <WishItem key={index} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default WishList;