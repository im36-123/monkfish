import React, { Component } from "react";
import RadioButton from "../containers/RadioButtons";
import Sizes from "../containers/Sizes";
import Banners from "../containers/Banners";
import InputFileName from "../containers/InputFileName";

import "../styles/style.css";

class Monkfish extends Component {
  render() {
    return (
      <div>
        {/* 文字入力 */}
        <InputFileName />

        {/* サムネイルボタン */}
        <RadioButton arr={this.props.thumbnailExtentions} name="thumbnail" />

        {/* フロアボタン */}
        <RadioButton arr={this.props.floors} name="floor" />

        {/* サイズボタン */}
        <Sizes banners={this.props.banners} />

        {/* URL を表示する */}
        <Banners banners={this.props.banners} />
      </div>
    );
  }
}

Monkfish.defaultProps = {
  floors: ["car", "pc", "food"],
  thumbnailExtentions: ["png", "jpg", "gif"]
};

export default Monkfish;
