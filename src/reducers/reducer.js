const defaultState = {
  banners: [],
  selectedSizes: []
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_THUMBNAIL_EXTENTION":
      return {
        ...state,
        selectedThumbnailExtention: action.value
      };

    case "SET_FLOOR":
      return {
        ...state,
        selectedFloor: action.value
      };

    case "SET_BANNER_NAME":
      return {
        ...state,
        bannerName: action.value
      };

    case "PICK_BANNER_SIZE":
      return {
        ...state,
        selectedSizes: state.selectedSizes.includes(action.value)
          ? state.selectedSizes.filter(element => element !== action.value)
          : state.selectedSizes.concat([action.value])
      };

    default:
      return state;
  }
};

export default reducer;
