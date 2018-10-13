import React, { Component } from "react";
import { connect } from "react-redux";

class RadioButton extends Component {
  handleChange = e => {
    const { name } = this.props;
    const { value } = e.target;
    if (name === "floor") {
      this.props.setFloor(value);
    } else if (name === "thumbnail") {
      this.props.setThumbnailExtention(value);
    }
  };

  render() {
    return (
      <div>
        {this.props.arr.map(item => {
          return (
            <label key={item}>
              <input
                type="radio"
                name={this.props.name}
                value={item}
                onClick={e => this.handleChange(e)}
              />
              {item}
            </label>
          );
        })}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setFloor: value => {
    dispatch({ type: "SET_FLOOR", value });
  },
  setThumbnailExtention: value => {
    dispatch({ type: "SET_THUMBNAIL_EXTENTION", value });
  }
});

export default connect(
  null,
  mapDispatchToProps
)(RadioButton);
