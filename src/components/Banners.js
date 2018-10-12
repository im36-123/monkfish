import React from "react";
import { connect } from "react-redux";
import selectBnners from "../selectors/selector";

const Banners = props => (
  <div>
    {props.banners.map(({ id, url }) => {
      return (
        <div key={id}>
          <p>{url}</p>
        </div>
      );
    })}
  </div>
);

const mapStateToProps = (state, ownProps) => {
  return {
    ...state,
    banners: selectBnners(
      ownProps.banners,
      state.selectedSizes,
      state.selectedFloor
    )
  };
};

export default connect(mapStateToProps)(Banners);
