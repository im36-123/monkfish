import React from "react";
import { connect } from "react-redux";

const Sizes = props => {
  console.log("props", props);
  return (
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
              onClick={e => props.pickBannerSize(e.target.value)}
            />
            {size}
          </label>
        );
      })}
    </div>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    ...ownProps,
    pickBannerSize: value => {
      dispatch({ type: "PICK_BANNER_SIZE", value });
    }
  };
};

export default connect(
  state => state,
  mapDispatchToProps
)(Sizes);
