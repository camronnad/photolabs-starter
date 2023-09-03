import React, { useCallback, useState } from "react";

import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

function PhotoFavButton(props) {
  return (
    <div
      className="photo-list__fav-icon"
      onClick={() => props.toggleFavorite(props.photoId)}
    >
      <div className="photo-list__fav-icon-svg">
        <FavIcon
          selected={props.favoriteIds.includes(props.photoId)}
          largerSizing={true}
        />
      </div>
    </div>
  );
}

export default PhotoFavButton;
