import React from "react";
import SearchItem from "./searchItem";

const SearchData = ({ data }) => {
  return (
    <div className="products2">
      {data.map((items, index) => (
        <SearchItem key={index} {...items} />
      ))}
    </div>
  );
};

export default SearchData;
