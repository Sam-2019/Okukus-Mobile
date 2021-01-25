import React from "react";
import PropTypes from "prop-types";
import "./icons.css";

const Pen = ({ width, height, action }) => {
  return (
    <svg
      fill="currentColor"
      class="bi bi-pen"
      viewBox="0 0 16 16"
      id="pen"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      onClick={action}
    >
      <path d="M13.498.795l.149-.149a1.207 1.207 0 111.707 1.708l-.149.148a1.5 1.5 0 01-.059 2.059L4.854 14.854a.5.5 0 01-.233.131l-4 1a.5.5 0 01-.606-.606l1-4a.5.5 0 01.131-.232l9.642-9.642a.5.5 0 00-.642.056L6.854 4.854a.5.5 0 11-.708-.708L9.44.854A1.5 1.5 0 0111.5.796a1.5 1.5 0 011.998-.001zm-.644.766a.5.5 0 00-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 000-.708l-1.585-1.585z" />
    </svg>
  );
};

export default Pen;

Pen.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  action: PropTypes.func,
};
