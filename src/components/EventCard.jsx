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
} from "@mui/material";
import EventIcon from "@mui/icons-material/Event";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import { styled } from "@mui/material/styles";
import CountdownTimer from "./CountdownTimer";
import { AddToCalendarButton } from "add-to-calendar-button-react";

const StyledCard = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const EventCard = ({
  eventBgImage,
  eventTitle,
  eventDateTime,
  displayEventDate,
  eventDay,
  eventTime,
  eventLocation,
  eventLocationLink,
}) => {
  const endDate = new Date(
    new Date(eventDateTime).getTime() + 4 * 60 * 60 * 1000
  );

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
        <Box display="flex" alignitems="center" justifyContent="center">
          <Typography variant="h3" color="textSecondary" sx={{ ml: 1 }}>
            <CountdownTimer eventDate={eventDateTime} />
          </Typography>
        </Box>
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
        <AddToCalendarButton
          name={`${eventTitle}: Manoj Pawar`}
          options={["Apple", "Google"]}
          location={eventLocation}
          start={eventDateTime}
          end={endDate.toISOString()}
          creator="mmpawar94@gmail.com"
        ></AddToCalendarButton>
      </CardActions>
    </StyledCard>
  );
};

export default EventCard;
