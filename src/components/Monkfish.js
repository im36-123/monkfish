import React, { Component } from "react";
import uuid from "uuid";
import "../styles/style.css";

const RadioButton = props => {
  return (
    <div>
      {props.arr.map(item => {
        return (
          <label key={item}>
            <input
              type="radio"
              name={props.name}
              value={item}
              onClick={props.handleChange}
            />
            {item}
          </label>
        );
      })}
    </div>
  );
};

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

const Banners = props => (
  <div>
    {props.banners
      .filter(({ id, shouldHide }) => {
        const selectedSizesMatch = props.selectedSizes.includes(id);
        const shouldHideMatch = !shouldHide.includes(props.selectedFloor);

        return selectedSizesMatch && shouldHideMatch;
      })
      .map(({ id, url }) => {
        return (
          <div key={id}>
            <p>{url}</p>
          </div>
        );
      })}
  </div>
);

class Monkfish extends Component {
  constructor(props) {
    super(props);
    this.state = {
      banners: []
    };
  }

  componentDidMount() {
    this.setState({ ...this.props });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps: ", prevProps);
    console.log("prevState: ", prevState);
  }

  handlePick = e => {
    const { value } = e.target;

    this.setState(prevState => {
      return {
        selectedSizes: prevState.selectedSizes.includes(value)
          ? prevState.selectedSizes.filter(element => element !== value)
          : prevState.selectedSizes.concat([value])
      };
    });
    this.formatToUrl();
  };

  handleChange = e => {
    const value = e.target.value;
    const name = e.target.name;
    console.log(value);

    switch (name) {
      case "thumbnail":
        this.setState({ selectedThumbnailExtentions: value });

        break;
      case "floor":
        this.setState({ selectedFloor: value });

        break;
      case "file_name":
        this.setState({ fileName: value });

        break;

      default:
        break;
    }
    this.formatToUrl();
  };

  formatToUrl = () => {
    console.log("formatToUrl");
    this.setState((state, props) => ({
      banners: props.banners.map(banner => {
        const url = banner.url
          .replace("##FLOOR_NAME##", state.selectedFloor)
          .replace("##FILE_NAME##", state.fileName);
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
        {/* サムネイルボタン */}
        <RadioButton
          arr={this.props.thumbnailExtentions}
          name="thumbnail"
          handleChange={this.handleChange}
        />

        {/* フロアボタン */}
        <RadioButton
          arr={this.props.floors}
          name="floor"
          handleChange={this.handleChange}
        />

        {/* サイズボタン */}
        <Sizes
          banners={this.state.banners}
          selectedFloor={this.state.selectedFloor}
          handlePick={this.handlePick}
        />

        {/* URL を表示する */}
        <Banners
          banners={this.state.banners}
          selectedSizes={this.state.selectedSizes}
          selectedFloor={this.state.selectedFloor}
        />

        {/* 文字入力 */}
        <div>
          <input
            type="text"
            placeholder="ファイル名"
            name="file_name"
            onChange={this.handleChange}
          />
        </div>
      </div>
    );
  }
}

Monkfish.defaultProps = {
  floors: ["car", "pc", "food"],
  thumbnailExtentions: ["png", "jpg", "gif"],
  banners: [
    {
      id: uuid(),
      size: "100 x 100",
      url: "http://100 x 100_##FLOOR_NAME##__##FILE_NAME##",
      shouldHide: ["pc"]
    },
    {
      id: uuid(),
      size: "200 x 200",
      url: "http://200 x 200_##FLOOR_NAME##__##FILE_NAME##",
      shouldHide: []
    },
    {
      id: uuid(),
      size: "300 x 300",
      url: "http://300 x 300_##FLOOR_NAME##__##FILE_NAME##___##EXTENTION##",
      shouldHide: []
    },
    {
      // 拡張子の変更ができるとき
      id: uuid(),
      size: "400 x 400",
      url:
        "http://400 x 400_##FLOOR_NAME##__##FILE_NAME##___##THUMBNAIL_EXTENTION##",
      shouldHide: []
    }
  ],
  selectedSizes: [],
  selectedFloor: "",
  fileName: "",
  selectedThumbnailExtentions: ""
};

export default Monkfish;
