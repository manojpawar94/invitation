import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Box,
  Typography,
  Link,
  CardMedia,
  CardActions,
  Button,
} from "@mui/material";
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
      <CardContent>
        <Box display="flex" alignitems="center">
          <EventIcon fontSize="small" color="primary" />
          <Typography variant="body1" color="primary" sx={{ ml: 1 }}>
            {displayEventDate}, {eventDay}
          </Typography>
        </Box>
        <Box display="flex" alignitems="center">
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
          href={photoGalleryPath}
          target="_blank" // Opens the link in a new tab
          rel="noopener noreferrer"
          component={Link}
          to={photoGalleryPath}
          disabled={!photoGalleryPath}
        >
          View Gallery
        </Button>
      </CardActions>
    </StyledCard>
  );
};

export default PostEventCard;