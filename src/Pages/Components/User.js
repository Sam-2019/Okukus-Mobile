import React from "react";
import PropTypes from "prop-types";
import "./icons.css";

const User = ({ width, height, action }) => {
  return (
    <svg
      fill="currentColor"
      class="bi bi-person-circle"
      viewBox="0 0 16 16"
      id="person-circle"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      onClick={action}
    >
      <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 008 15a6.987 6.987 0 005.468-2.63z" />
      <path fill-rule="evenodd" d="M8 9a3 3 0 100-6 3 3 0 000 6z" />
      <path
        fill-rule="evenodd"
        d="M8 1a7 7 0 100 14A7 7 0 008 1zM0 8a8 8 0 1116 0A8 8 0 010 8z"
      />{" "}
    </svg>
  );
};

export default User;

User.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  action: PropTypes.func,
};
