export default (banners, selectedSizes, selectedFloor) => {
  console.log("banners", banners);
  return banners.filter(({ id, shouldHide }) => {
    const selectedSizesMatch = selectedSizes.includes(id);
    const shouldHideMatch = !shouldHide.includes(selectedFloor);

    return selectedSizesMatch && shouldHideMatch;
  });
};
