import { connect } from "react-redux";
import { pickBannerSize } from "../actions/action";
import Sizes from "../components/Sizes";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    ...ownProps,
    pickBannerSize: value => {
      dispatch(pickBannerSize(value));
    }
  };
};

export default connect(
  state => state,
  mapDispatchToProps
)(Sizes);
