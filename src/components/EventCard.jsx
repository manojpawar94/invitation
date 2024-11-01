import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Box,
  Typography,
  Link,
} from "@mui/material";
import EventIcon from "@mui/icons-material/Event";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { styled } from "@mui/material/styles";

const StyledCard = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  transition: "transform 0.3s, box-shadow 0.3s",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
  },
}));

const EventCard = ({ title, date, location, locationHref }) => {
  return (
    <StyledCard>
      <CardHeader title={title} sx={{ textAlign: "center" }} />
      <CardContent>
        <Box display="flex" alignItems="center" gutterBottom>
          <EventIcon fontSize="small" />
          <Typography variant="h6" color="primary" sx={{ ml: 1 }}>
            {date}
          </Typography>
        </Box>
        <Box display="flex" alignItems="center">
          <LocationOnIcon fontSize="small" />
          <Link href={locationHref} underline="none">
            <Typography variant="h6" color="textSecondary" sx={{ ml: 1 }}>
              {location}
            </Typography>
          </Link>
        </Box>
      </CardContent>
    </StyledCard>
  );
};

export default EventCard;
