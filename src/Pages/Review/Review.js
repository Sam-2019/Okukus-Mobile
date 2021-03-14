import React from "react";
import Back from "../Components/Back";
import ReviewItem from "./reviewItem";
import { data } from "./reviewData";
import PlaceholderReview from "./reviewItem-Placeholder";
import "./review.css";

const Review = () => {
  return (
    <div className="page-wrapper">
      <div className="header">
        <div className="category">
          <div className="object-1">
            <Back width={30} height={30} />
          </div>
          <div className="object-2"> Review (1)</div>
        </div>
      </div>

      <div className="main">
        <div className=" wrapper-item">
          {/* <PlaceholderReview /> */}
          {data.map((item, index) => (
            <ReviewItem key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Review;
