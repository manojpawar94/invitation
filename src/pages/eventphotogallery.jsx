import { React, useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import PhotoGallery from "../components/PhotoGallery";
import { EventPhotoGalleryData } from "../data/EventPhotoGalleryData";
import { Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const EventPhotoGallery = () => {
  const { category } = useParams();
  const [imageList, setImageList] = useState([]);

  useEffect(() => {
    setImageList(EventPhotoGalleryData[category]["images"]);
  }, [category]);

  return (
    <div className="container">
      <div className="row" style={{ marginTop: "24px", marginBottom: "16px" }}>
        <div className="col-2"></div>
        <div className="col-8">
          <Typography variant="h4" color="primary" sx={{ textAlign: "center" }}>
            {EventPhotoGalleryData[category]["title"]}
          </Typography>
        </div>
        <div className="col-2">
          <Button
            component={Link}
            to={`/`}
            startIcon={<ArrowBackIcon />}
            variant="outlined"
          >
            Back
          </Button>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <PhotoGallery category={category} imageList={imageList} />
        </div>
      </div>
    </div>
  );
};

export default EventPhotoGallery;
