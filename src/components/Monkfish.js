import React, { Component } from "react";
import uuid from "uuid";

const Floors = props => (
  <div>
    {props.floors.map(floor => {
      return (
        <label key={floor}>
          <input
            type="radio"
            name="floor"
            value={floor}
            onClick={props.handleChange}
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
      if (!shouldHide.includes(props.selectedFloor)) {
        return (
          <label key={id}>
            <input
              type="checkbox"
              name="size"
              value={id}
              onClick={props.handlePick}
            />
            {size}
          </label>
        );
      }
    })}
  </div>
);

const Banners = props => (
  <div>
    {props.banners.map(({ id, url }) => {
      if (props.canShow.includes(id)) {
        return (
          <div key={id}>
            <p>{url}</p>
          </div>
        );
      }
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

  render() {
    return (
      <div>
        {/* フロアボタン */}
        <Floors floors={this.props.floors} handleChange={this.handleChange} />

        {/* サイズボタン */}
        <Sizes
          banners={this.state.banners}
          selectedFloor={this.state.selectedFloor}
          handlePick={this.handlePick}
        />

        {/* URL を表示する */}
        <Banners banners={this.state.banners} canShow={this.state.canShow} />
      </div>
    );
  }

  handlePick = e => {
    const { value } = e.target;

    this.setState(prevState => {
      return {
        canShow: prevState.canShow.includes(value)
          ? prevState.canShow.filter(element => element !== value)
          : prevState.canShow.concat([value])
      };
    });
  };

  handleChange = e => {
    this.setState({
      banners: this.props.banners.map(banner => {
        return {
          ...banner,
          url: banner.url.replace("##FLOOR_NAME##", e.target.value)
        };
      }),
      selectedFloor: e.target.value
    });
  };
}

Monkfish.defaultProps = {
  floors: ["car", "pc", "food"],
  banners: [
    {
      id: uuid(),
      size: "100 x 100",
      url: "http://100 x 100_##FLOOR_NAME##",
      shouldHide: ["pc"]
    },
    {
      id: uuid(),
      size: "200 x 200",
      url: "http://200 x 200_##FLOOR_NAME##",
      shouldHide: []
    },
    {
      id: uuid(),
      size: "300 x 300",
      url: "http://300 x 300_##FLOOR_NAME##",
      shouldHide: []
    }
  ],
  canShow: [],
  selectedFloor: ""
};

export default Monkfish;
