import React from "react";
import { connect } from "react-redux";

const InputFileName = props => (
  <div>
    <input
      type="text"
      placeholder="ファイル名"
      name="banner_name"
      onChange={e => props.setBannerName(e.target.value)}
    />
  </div>
);

const mapDispatchToProps = dispatch => ({
  setBannerName: value => {
    dispatch({ type: "SET_BANNER_NAME", value });
  }
});

export default connect(
  null,
  mapDispatchToProps
)(InputFileName);
