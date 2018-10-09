import React from "react";

const RadioButton = props => {
  return (
    <div>
      {props.arr.map(item => {
        return (
          <label key={item}>
            <input
              type="radio"
              name={props.name}
              value={item}
              onClick={props.handleChange}
            />
            {item}
          </label>
        );
      })}
    </div>
  );
};

export default RadioButton;
