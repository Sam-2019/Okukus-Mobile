import React from "react";
import PropTypes from "prop-types";
import Back from "../Components/Back";
import Input from "../Components/Input";
import Button from "../Components/Button";
import Home from "../Components/Home";
import Message from "../Components/Message";
import Summary from "../Summary/Summary";
import PopUp from "../Components/Popup";
import Question from "../Components/Question";
import "./order.css";

const Order = () => {
  const [paymentMethod, setPaymentMethod] = React.useState("");
  const [state, setState] = React.useState(false);

  let selectedOption = null;

  switch (paymentMethod) {
    case "Cash":
      selectedOption = "cash";
      break;
    case "Momo":
      selectedOption = "momo";
  }

  return (
    <div className="checkout-wrapper">
      <div className="header ">
        <div className="category ">
          <div className="object-1">
            <Back width={30} height={30} />
          </div>
          <div className="object-2"> Order</div>
        </div>
      </div>

      <div className="main item">
        <form className="form-wrapper ">
          <div className="page_title"> Shipping Information</div>
          <Input class_name="input " placeholder="Location" onChange />
          <Input class_name="input " placeholder="Digital Address" onChange />
          <Input class_name="input " placeholder="Phone Number" onChange />

          <div className="page_title">Payment</div>
          <div className="payment-method">
            <div
              className={selectedOption === "cash" ? "cash" : "select"}
              onClick={() => {
                setPaymentMethod("Cash");
              }}
            >
              Cash
            </div>
            <div
              className={selectedOption === "momo" ? "momo" : "select"}
              onClick={() => {
                setPaymentMethod("Momo");
              }}
            >
              Momo
            </div>
          </div>

          {selectedOption === "momo" ? (
            <>
              <div className="payment-instruction ">
                <div className="pay-know-how ">
                  <div>HOW TO PAY WITH MOMO</div>
                  <Question
                    width="30"
                    height="30"
                    action={() => {
                      setState(true);
                    }}
                  />
                </div>
                <Input class_name="input " placeholder="Name" onChange />
                <Input class_name="input " placeholder="Momo Number" onChange />
                <Input
                  class_name="input "
                  placeholder="Transaction ID"
                  onChange
                />
              </div>
            </>
          ) : null}
        </form>
      </div>

      {state ? (
        <PopUp close={() => setState(false)}>
          <ol>
            <li>Dial *170# on your phone</li>
            <li>Select MoMoPay &amp; PayBill</li>
            <li>Select MoMoPay</li>
            <li>
              Enter <strong>283051 </strong> as the Merchant ID
            </li>
            <li>Enter Reference</li>
            <li>Enter Your Pin to confirm payment</li>
          </ol>

          <div>
            Upon successful payment, please use the details of the payment to
            fill the fields below
          </div>
        </PopUp>
      ) : null}


    </div>
  );
};
export default Order;
