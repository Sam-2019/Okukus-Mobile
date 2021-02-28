import React from "react";
import PropTypes from "prop-types";
import Notify from "../Components/Notify";
import Add from "../Components/Add";
import Subtract from "../Components/Subtract";
import Bin from "../Components/Bin";
import BinFIll from "../Components/BinFill";
import Love from "../Components/Love";
import LoveFill from "../Components/LoveFill";
import Confirm from "../Components/Confirm";
import "./cartItem.css";

const CartItem = ({
  unit_price,
  product_name,
  cover_photo_url,
  quantity,
  id,
  product_unique_id,
  handleToggle,
  unique_id,
  onFormSubmit,
}) => {
  const [loveFill, setLoveFill] = React.useState(false);
  const [binFill, setBinFill] = React.useState(false);
  const [notify, setNotify] = React.useState(false);
  const [confirm, setConfirm] = React.useState(false);

  const showNotify = () => {
    setNotify(true);

    const timer = setTimeout(() => {
      setNotify(false);
    }, 3000);
    return () => clearTimeout(timer);
  };

  const updateLove = () => {
    setLoveFill(true);

    const timer = setTimeout(() => {
      setLoveFill(false);
    }, 1000);

    showNotify();

    return () => clearTimeout(timer);
  };

  const updateBin = () => {
    setBinFill(true);

    const timer = setTimeout(() => {
      setBinFill(false);
    }, 1000);
    setConfirm(true);
    return () => clearTimeout(timer);
  };

  return (
    <>
      <div className="cart_item_wrapper">
        <div className="checkBox">
          <input
            onChange={handleToggle(unique_id)}
            type="checkbox"
            value="1"
          />
        </div>

        <div className="cart-item-detail">
          <div className="imageXname">
            <div className="image-placeholder  loading"></div>

            <div className="nameXprice">
              <div className="item-name">{product_name}</div>

              <div className="item-price">GHc {unit_price}</div>
            </div>
          </div>

          <div className="priceXactions">
            <div className="love " onClick={updateLove}>
              {loveFill ? (
                <LoveFill width={18} height={20} />
              ) : (
                <Love width={18} height={20} />
              )}
            </div>

            <div className="bin" onClick={updateBin}>
              {binFill ? (
                <BinFIll width={18} height={20} />
              ) : (
                <Bin width={18} height={20} />
              )}
            </div>

            <div className="binXaddXsubtract">
              <div
                className="addXsubtract 
            "
              >
                <div className="subtract">
                  <Subtract width={16} height={25} />
                </div>

                <div className="quantity">1</div>

                <div className="add">
                  <Add width={16} height={25} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {notify ? (
        <Notify close={() => setNotify(false)}>Item added to wish list</Notify>
      ) : null}

      {confirm ? (
        <Confirm
          close={() => setConfirm(false)}
          primary="Delete"
          secondary="Cancel"
        >
          Are you sure you want to remove this product from your shopping cart?
        </Confirm>
      ) : null}
    </>
  );
};

export default CartItem;

CartItem.propTypes = {
  handleToggle: PropTypes.func,
  // i:PropTypes.Number
};
