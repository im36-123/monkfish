import { connect } from "react-redux";
import { setFloor, setThumbnailExtention } from "../actions/action";
import RadioButton from "../components/RadioButton";

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
