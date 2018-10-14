import { connect } from "react-redux";
import { setBannerName } from "../actions/action";
import InputFileName from "../components/InputFileName";

const mapDispatchToProps = dispatch => ({
  setBannerName: value => {
    dispatch(setBannerName(value));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(InputFileName);
