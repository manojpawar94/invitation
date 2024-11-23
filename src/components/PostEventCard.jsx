import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Box,
  Typography,
  CardMedia,
  CardActions,
  Link,
  Button,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import EventIcon from "@mui/icons-material/Event";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import { styled } from "@mui/material/styles";

const StyledCard = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const PostEventCard = ({
  eventBgImage,
  eventTitle,
  displayEventDate,
  photoGalleryPath,
  eventDay,
  eventTime,
  eventLocation,
  eventLocationLink,
}) => {
  return (
    <StyledCard>
      <CardHeader
        title={eventTitle}
        sx={{ textAlign: "center" }}
        color="secondary"
      />
      <CardMedia
        alignitems="center"
        image={`${process.env.PUBLIC_URL}/images/${eventBgImage}`}
      >
        <Box
          display="flex"
          alignitems="center"
          justifyContent="center"
          height={120}
        ></Box>
      </CardMedia>
      <CardContent sx={{ mt: 2 }}>
        <Box display="flex" alignitems="center" sx={{ mb: 2 }}>
          <EventIcon fontSize="small" color="primary" />
          <Typography variant="body1" color="primary" sx={{ ml: 1 }}>
            {displayEventDate}, {eventDay}
          </Typography>
        </Box>
        <Box display="flex" alignitems="center" sx={{ mb: 2 }}>
          <AccessTimeFilledIcon fontSize="small" color="primary" />
          <Typography variant="body1" color="primary" sx={{ ml: 1 }}>
            {eventTime}
          </Typography>
        </Box>
        <Box display="flex" alignitems="center">
          <LocationOnIcon fontSize="small" color="textSecondary" />
          <Link href={eventLocationLink} underline="none">
            <Typography variant="body1" color="textSecondary" sx={{ ml: 1 }}>
              {eventLocation}
            </Typography>
          </Link>
        </Box>
      </CardContent>
      <CardActions>
        <Button
          component={RouterLink}
          to={`/${photoGalleryPath}/gallery`}
          disabled={!photoGalleryPath}
          startIcon={<PhotoLibraryIcon />}
          sx={{
            borderRadius: 4,
            paddingX: 2,
          }}
        >
          View Gallery
        </Button>
      </CardActions>
    </StyledCard>
  );
};

export default PostEventCard;
