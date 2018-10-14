import { connect } from "react-redux";
import selectBnners from "../selectors/selector";
import Banners from "../components/Banners";

const mapStateToProps = (state, ownProps) => {
  return {
    ...state,
    banners: selectBnners(
      ownProps.banners,
      state.selectedSizes,
      state.selectedFloor,
      state.bannerName,
      state.selectedThumbnailExtention
    )
  };
};

export default connect(mapStateToProps)(Banners);
