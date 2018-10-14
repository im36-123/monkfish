import { connect } from "react-redux";
import { setFloor, setThumbnailExtention } from "../actions/action";
import RadioButtons from "../components/RadioButtons";

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
)(RadioButtons);
