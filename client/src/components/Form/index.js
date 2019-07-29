import React from "react";

function Form(props){
return (
  <div className="container">
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
      <button onClick={props.handleFormSubmit} className="btn btn-dark mt-3">
        Search
        </button>
    </div>
  </form>
  </div>
);
}

export default Form;
