import React, { Component } from "react";
import RadioButton from "./RadioButton";
import Sizes from "./Sizes";
import Banners from "./Banners";
import InputFileName from "./InputFileName";

import "../styles/style.css";

class Monkfish extends Component {
  constructor(props) {
    super(props);
    this.state = {
      banners: [],
      selectedSizes: []
    };
  }

  render() {
    return (
      <div>
        {/* 文字入力 */}
        <InputFileName handleChange={this.handleChange} />

        {/* サムネイルボタン */}
        <RadioButton arr={this.props.thumbnailExtentions} name="thumbnail" />

        {/* フロアボタン */}
        <RadioButton arr={this.props.floors} name="floor" />

        {/* サイズボタン */}
        <Sizes banners={this.props.banners} />

        {/* URL を表示する */}
        <Banners
          banners={this.props.banners}
          selectedSizes={this.state.selectedSizes}
          selectedFloor={this.state.selectedFloor}
        />
      </div>
    );
  }
}

Monkfish.defaultProps = {
  floors: ["car", "pc", "food"],
  thumbnailExtentions: ["png", "jpg", "gif"],
  selectedSizes: [],
  selectedFloor: "",
  bannerName: "",
  selectedThumbnailExtention: ""
};

export default Monkfish;
