import React from "react"
import { connect } from "react-redux"


const Search = ({ dispatch }) => {
  const handler = value => {
    dispatch({ type: "FILTER", payload: value });
  };
  return (
    <input
      placeholder="Buscá tu curso"
      onChange={({ target }) => handler(target.value)}
    />
  );
};

export default connect()(Search);










