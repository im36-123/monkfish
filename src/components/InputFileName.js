import React from "react";
import { connect } from "react-redux";
import { setBannerName } from "../actions/action";

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
    dispatch(setBannerName(value));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(InputFileName);
