import React from "react";
import PropTypes from "prop-types";
import "./popup.css";

const PopUp = ({ children, close }) => {
  return (
    <div className="popup-wrapper">
      <div className="popup">
        {/* <div className="close-button">
          <Close width={30} height={30} action={close} />
        </div> */}

        <div>{children}</div>
      </div>
    </div>
  );
};

export default PopUp;

PopUp.propTypes = {
  close: PropTypes.func,
  children: PropTypes.node.isRequired
};