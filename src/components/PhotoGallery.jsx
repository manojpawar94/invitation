import { ImageList, ImageListItem, Typography } from "@mui/material";

const PhotoGallery = ({ title, category, imageList }) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Typography variant="h3" color="primary">
              {title}
            </Typography>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <ImageList cols={2}>
              {imageList.map((image) => (
                <>
                  <ImageListItem key={image}>
                    <img
                      src={`${process.env.PUBLIC_URL}/images/${category}/${image}`}
                    />
                  </ImageListItem>
                </>
              ))}
            </ImageList>
          </div>
        </div>
      </div>
    </>
  );
};

export default PhotoGallery;
