import React from "react";

const Banners = props => (
  <div>
    {props.banners
      .filter(({ id, shouldHide }) => {
        const selectedSizesMatch = props.selectedSizes.includes(id);
        const shouldHideMatch = !shouldHide.includes(props.selectedFloor);

        return selectedSizesMatch && shouldHideMatch;
      })
      .map(({ id, url }) => {
        return (
          <div key={id}>
            <p>{url}</p>
          </div>
        );
      })}
  </div>
);

export default Banners;
