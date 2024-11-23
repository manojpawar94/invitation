import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Box,
  Button,
  Typography,
  Link,
  CardMedia,
  CardActions,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import EventIcon from "@mui/icons-material/Event";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import { styled } from "@mui/material/styles";
import CountdownTimer from "./CountdownTimer";
import { AddToCalendarButton } from "add-to-calendar-button-react";

const StyledCard = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const UpComingEventCard = ({
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
      <CardContent sx={{ mb: 1, mt: 2 }}>
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
          <Typography variant="body1" color="textSecondary" sx={{ ml: 1 }}>
            {eventLocation}
          </Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Button
          component={RouterLink}
          href={eventLocation}
          startIcon={<LocationOnIcon />}
          sx={{
            borderRadius: 4,
            paddingX: 2,
          }}
        >
          Open Google Map Location
        </Button>
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

export default UpComingEventCard;
