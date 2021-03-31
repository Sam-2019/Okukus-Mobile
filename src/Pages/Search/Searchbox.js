import React from "react";
import PropTypes from "prop-types";
import { Input } from "../Components/Input";
import Button from "../Components/Button";

const Searchbox = ({ action, input, setInput }) => {
  return (
    <>
      <Input
        type="search"
        class_name="header-input  "
        placeholder="Search"
        value={input}
        action={setInput}
      />

      <Button name="Search" class_name="header-primary2" action={action} />
    </>
  );
};

export default Searchbox;

Searchbox.propTypes = {
  action: PropTypes.func,
  input: PropTypes.string,
  setInput: PropTypes.func,
};
