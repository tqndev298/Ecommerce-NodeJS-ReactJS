import React, { useState, useEffect, Fragment } from "react";

const RadioBox = ({ prices, handleFilters }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event) => {
    handleFilters(event.target.value);
    setValue(event.target.value);
  };

  return prices.map((p, i) => (
    <div key={i}>
      <input
        onChange={handleChange}
        type="radio"
        className="mr-2 ml-4"
        name={p}
        value={`${p._id}`}
      />
      <label className="form-check-label">{p.name}</label>
    </div>
  ));
};

export default RadioBox;
