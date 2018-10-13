export default (
  banners,
  selectedSizes,
  selectedFloor,
  bannerName,
  selectedThumbnailExtention
) => {
  console.log("banners", banners);
  return banners
    .filter(({ id, shouldHide }) => {
      const selectedSizesMatch = selectedSizes.includes(id);
      const shouldHideMatch = !shouldHide.includes(selectedFloor);

      return selectedSizesMatch && shouldHideMatch;
    })
    .map(banner => {
      const reg = /(.*)(\.[^.]+$)/;
      const regMatch = reg.test(bannerName);

      const fileName = regMatch ? bannerName.match(reg)[1] : bannerName;

      const fileExtention = regMatch ? bannerName.match(reg)[2] : undefined;

      const thumbnailExtention = selectedThumbnailExtention
        ? selectedThumbnailExtention
        : fileExtention;

      const url = banner.url
        .replace("##FLOOR_NAME##", selectedFloor)
        .replace("##FILE_NAME##", fileName)
        .replace("##EXTENTION##", fileExtention)
        .replace("##THUMBNAIL_EXTENTION##", thumbnailExtention);

      return {
        ...banner,
        url
      };
    });
};
