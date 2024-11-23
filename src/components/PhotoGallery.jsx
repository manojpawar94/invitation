import React from "react";
import { ImageList, ImageListItem } from "@mui/material";

const PhotoGallery = ({ category, imageList }) => {
  return (
    <>
      <div className="row">
        <div className="col-12">
          <ImageList cols={3} variant="quilted">
            {imageList.map((image) => (
              <>
                <ImageListItem key={image}>
                  <img
                    alt={`${image.name}`}
                    srcSet={`${process.env.PUBLIC_URL}/images/${category}/${image.name}?fit=crop&auto=format`}
                    src={`${process.env.PUBLIC_URL}/images/${category}/${image.name}?fit=crop&auto=format`}
                    loading="lazy"
                  />
                </ImageListItem>
              </>
            ))}
          </ImageList>
        </div>
      </div>
    </>
  );
};

export default PhotoGallery;
