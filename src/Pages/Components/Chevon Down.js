import React from "react";
import PropTypes from "prop-types";
import "./icons.css";

const ChevonDown = ({ width, height, action }) => {
  return (
    <svg
      fill="currentColor"
      className="bi bi-chevron-compact-down"
      viewBox="0 0 16 16"
      id="chevron-compact-down"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      onClick={action}
    >
      <path
        fillRule="evenodd"
        d="M1.553 6.776a.5.5 0 01.67-.223L8 9.44l5.776-2.888a.5.5 0 11.448.894l-6 3a.5.5 0 01-.448 0l-6-3a.5.5 0 01-.223-.67z"
      />
    </svg>
  );
};

export default ChevonDown;

ChevonDown.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  action: PropTypes.func,
};
