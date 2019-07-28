import React, { Component } from "react";
import API from "../../utils/API";


function Form(props){
return (
  <form>
    <div className="form-group">
      <label htmlFor="search">Book Search:</label>
      <input
        onChange={props.handleInputChange}
        value={props.search}
        name="search"
        type="text"
        className="form-control"
        placeholder="Search a Book"
        id="search"
      />
      <button onClick={props.handleFormSubmit} className="btn btn-primary mt-3">
        Search
        </button>
    </div>
  </form>
);
}

export default Form;
