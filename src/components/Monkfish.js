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

  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps: ", prevProps);
    console.log("prevState: ", prevState);
  }

  formatToUrl = () => {
    console.log("formatToUrl");
    this.setState((state, props) => ({
      banners: props.banners.map(banner => {
        const { bannerName, selectedThumbnailExtention, selectedFloor } = state;
        const reg = /(.*)(\.[^.]+$)/;
        const regMatch = reg.test(bannerName);

        const fileName = regMatch ? bannerName.match(reg)[1] : bannerName;

        const fileExtention = regMatch ? bannerName.match(reg)[2] : undefined;

        const thumbnailExtention = selectedThumbnailExtention
          ? selectedThumbnailExtention
          : fileExtention;

        const url = banner.url
          .replace("##FLOOR_NAME##", selectedFloor)
          .replace("##FILE_NAME##", fileName)
          .replace("##EXTENTION##", fileExtention)
          .replace("##THUMBNAIL_EXTENTION##", thumbnailExtention);

        return {
          ...banner,
          url
        };
      })
    }));
  };

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
