import React, { Component } from "react";
import { connect } from "react-redux";
import { setFloor, setThumbnailExtention } from "../actions/action";
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
    dispatch(setFloor(value));
  },
  setThumbnailExtention: value => {
    dispatch(setThumbnailExtention(value));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(RadioButton);
