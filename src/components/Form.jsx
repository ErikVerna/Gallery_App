import React from "react";
import PropTypes from "prop-types";

const Form = ({ handleSubmit }) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label className="w-75">
          Search: <input className="w-100" type="text" name="inputText" />
        </label>
        <button type="submit" className="btn btn-outline-secondary m-2">
          <span class="material-icons">search</span>
        </button>
      </form>
    </>
  );
};

Form.propTypes = {
  handleSubmit: PropTypes.func,
};

export default Form;
