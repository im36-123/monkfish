import React from "react";

const Sizes = props => (
  <div>
    {props.banners.map(({ id, size, shouldHide }) => {
      return (
        <label
          key={id}
          className={
            shouldHide.includes(props.selectedFloor) ? "is-hide" : undefined
          }
        >
          <input
            type="checkbox"
            name="size"
            value={id}
            onClick={props.handlePick}
          />
          {size}
        </label>
      );
    })}
  </div>
);

export default Sizes;
