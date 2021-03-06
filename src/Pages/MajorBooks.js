import React, { Fragment } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer, Slide } from "react-toastify";
import { MediaQuery } from "./helper";

import Mobile from "./Mobile MajorBooks";
import Desktop from "./Desktop MajorBooks";

const breakpoint = 540;

const MajorBooks = () => {
  const { width } = MediaQuery();

  return (
    <Router>
      {width > breakpoint ? (
        <Fragment>
          <Desktop />
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            transition={Slide}
          />
        </Fragment>
      ) : (
        <Fragment>
          <Mobile />
          <ToastContainer
            position="bottom-center"
            autoClose={3000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggablePercent={60}
            pauseOnHover
            transition={Slide}
          />
        </Fragment>
      )}
    </Router>
  );
};

export default MajorBooks;
