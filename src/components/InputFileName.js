import React from "react";

const InputFileName = props => (
  <div>
    <input
      type="text"
      placeholder="ファイル名"
      name="banner_name"
      onChange={props.handleChange}
    />
  </div>
);

export default InputFileName;
