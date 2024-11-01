import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Box,
  Typography,
  Link,
  CardMedia,
} from "@mui/material";
import EventIcon from "@mui/icons-material/Event";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import { styled } from "@mui/material/styles";
import CountdownTimer from "./CountdownTimer";

const StyledCard = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const EventCard = ({
  eventBgImage,
  eventTitle,
  eventDate,
  displayEventDate,
  eventDay,
  eventTime,
  eventLocation,
  eventLocationLink,
}) => {
  return (
    <StyledCard>
      <CardHeader title={eventTitle} sx={{ textAlign: "center" }} color="secondary"/>
      <CardMedia
        alignitems="center"
        image={`${process.env.PUBLIC_URL}/images/${eventBgImage}`}
      >
        <Box display="flex" alignitems="center" justifyContent="center">
          <Typography variant="h3" color="textSecondary" sx={{ ml: 1 }}>
            <CountdownTimer eventDate={eventDate} />
          </Typography>
        </Box>
      </CardMedia>
      <CardContent>
        <Box display="flex" alignitems="center" >
          <EventIcon fontSize="small" color="primary" />
          <Typography variant="body1" color="primary" sx={{ ml: 1 }}>
            {displayEventDate}, {eventDay}
          </Typography>
        </Box>
        <Box display="flex" alignitems="center" >
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
    </StyledCard>
  );
};

export default EventCard;
