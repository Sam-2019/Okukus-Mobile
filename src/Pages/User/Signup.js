import React from "react";
import PropTypes from "prop-types";
import Back from "../Components/Back";
import Input from "../Components/Input";
import Button from "../Components/Button";
import Home from "../Components/Home";
import Message from "../Components/Message";
import "./user.css";

const Signup = () => {
  return (
    <div className="user-wrapper">
      <div className="header">
        <div className="category">
          <div className="object-1">
            <Home width={30} height={30} />
          </div>
          <div className="object-2"> Create account</div>
        </div>

        <div className="category ">
          <div className="object-2">
            <Button name="Login" class_name="header-secondary" />
          </div>

          {/* <div className="">
            <Button name="Next" class_name="header-primary" />
          </div> */}
        </div>
      </div>

      <div className="main">
        <form className="form-wrapper ">
          <Input class_name="input " placeholder="Name " onChange />
          <Input class_name="input " placeholder="Email" onChange />
          <Input class_name="input" placeholder="Password" onChange />
          <Input class_name="input " placeholder="Confirm Password" onChange />

          <Input
            type="date"
            class_name="input "
            placeholder="Date of birth"
            onChange
          />

          <Message class_name="message " message="Hello" />

          <Button name="Signup" class_name=" primary" />
          {/* <Button name="Login" class_name="secondary " /> */}
        </form>
      </div>
    </div>
  );
};
export default Signup;
