import React, { Component } from "react";
import uuid from "uuid";

class Monkfish extends Component {
  constructor(props) {
    super(props);
    this.state = {
      banners: []
    };
  }

  componentDidMount() {
    this.setState({ banners: this.props.banners, canShow: [] });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps: ", prevProps);
    console.log("prevState: ", prevState);
  }

  render() {
    return (
      <div>
        {/* floor 選択ボタン */}
        {this.props.floors.map(floor => {
          return (
            <label key={floor}>
              <input
                type="radio"
                name="floor"
                value={floor}
                onClick={this.onRadiobuttonHandler}
              />
              {floor}
            </label>
          );
        })}

        {/* サイズボタン */}
        {this.props.banners.map(({ id, size }) => {
          return (
            <label key={id}>
              <input
                type="checkbox"
                name="size"
                value={id}
                onClick={this.onCheckboxHandler}
              />
              {size}
            </label>
          );
        })}

        {/* URL を表示する */}
        {this.state.banners.map(banner => {
          if (this.state.canShow.includes(banner.id)) {
            return (
              <div key={banner.id}>
                <p>{banner.url}</p>
              </div>
            );
          }
        })}
      </div>
    );
  }

  onCheckboxHandler = e => {
    const { value } = e.target;

    this.setState(prevState => {
      return {
        canShow: prevState.canShow.includes(value)
          ? prevState.canShow.filter(element => element !== value)
          : prevState.canShow.concat([value])
      };
    });
  };

  onRadiobuttonHandler = e => {
    this.setState({
      banners: this.props.banners.map(banner => {
        return {
          ...banner,
          url: banner.url.replace("##BANNER_NAME##", e.target.value)
        };
      })
    });
  };
}

Monkfish.defaultProps = {
  floors: ["car", "pc", "food"],
  banners: [
    {
      id: uuid(),
      size: "100 x 100",
      url: "http://100 x 100_##BANNER_NAME##",
      shouldHide: ["pc"]
    },
    {
      id: uuid(),
      size: "200 x 200",
      url: "http://200 x 200_##BANNER_NAME##",
      shouldHide: []
    },
    {
      id: uuid(),
      size: "300 x 300",
      url: "http://300 x 300_##BANNER_NAME##",
      shouldHide: []
    }
  ],
  canShow: []
};

export default Monkfish;
