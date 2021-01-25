import React from "react";
import { useHistory } from "react-router-dom";
import Cart from "../Components/Cart";
import "./products.css";

const Products = () => {
  let history = useHistory();

  return (
    <div className="products  ">
      {Array(8)
        .fill()
        .map((item, index) => (
          <div className="products-wrapper " key={index}>
            <div className="products-discount-rate">-30%</div>
            <div className="products-group ">
              <div
                className="products-image "
                onClick={() => {
                  history.push(`/product/${index}`);
                }}
              ></div>
              <div
                className="products-name"
                onClick={() => {
                  history.push(`/product/${index}`);
                }}
              >
                Logest name ever you go fhrfghdgjhj djhgdjthjtyjrtyjryj see
                Longest htrhetrhetr name ever you go see
              </div>

              <div
                className="products-discount-price"
                onClick={() => {
                  history.push(`/product/${index}`);
                }}
              >
                Ghc999
              </div>

              <div className="priceXcart">
                <div className="products-price">Ghc699</div>
                <div className="products-add2cart">
                  <Cart width="17" height="17" />
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Products;
