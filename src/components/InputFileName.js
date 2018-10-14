import React from "react";

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

export default InputFileName;
