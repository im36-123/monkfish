import React from "react";

const Banners = props => (
  <div>
    {props.banners.map(({ id, url }) => {
      return (
        <div key={id}>
          <p>{url}</p>
        </div>
      );
    })}
  </div>
);

export default Banners;
