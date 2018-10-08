import React, { Component } from "react";
import uuid from "uuid";
import "../styles/style.css";

const Floors = props => (
  <div>
    {props.floors.map(floor => {
      return (
        <label key={floor}>
          <input
            type="radio"
            name="floor"
            value={floor}
            onClick={props.handleChangeFloor}
          />
          {floor}
        </label>
      );
    })}
  </div>
);

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

  handleChangeFloor = e => {
    const value = e.target.value;

    this.setState({ selectedFloor: value });
    this.formatToUrl();
  };

  handleChange = e => {
    const value = e.target.value;

    this.setState({ fileName: value });
    this.formatToUrl();
  };

  formatToUrl = () => {
    console.log("formatToUrl");
    this.setState({
      banners: this.props.banners.map(banner => {
        const url = banner.url
          .replace("##FLOOR_NAME##", this.state.selectedFloor)
          .replace("##FILE_NAME##", this.state.fileName);
        return {
          ...banner,
          url
        };
      })
    });
  };

  render() {
    return (
      <div>
        {/* フロアボタン */}
        <Floors
          floors={this.props.floors}
          handleChangeFloor={this.handleChangeFloor}
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
            onChange={this.handleChange}
          />
        </div>
      </div>
    );
  }
}

Monkfish.defaultProps = {
  floors: ["car", "pc", "food"],
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
      url: "http://300 x 300_##FLOOR_NAME##__##FILE_NAME##",
      shouldHide: []
    }
  ],
  selectedSizes: [],
  selectedFloor: "",
  fileName: ""
};

export default Monkfish;
