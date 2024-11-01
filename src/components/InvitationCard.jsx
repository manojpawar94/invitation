import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledCard = styled(Card)(({ theme }) => ({
  transition: "transform 0.3s, box-shadow 0.3s",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
  },
  textAlign: "center",
  marginBottom: theme.spacing(2),
}));

const InvitationCard = () => {
  return (
    <StyledCard>
      <CardContent>
        <Typography variant="h6" color="textPrimary" gutterBottom>
          With Joyful Hearts, We Cordially Invite You
        </Typography>
        <Typography variant="h6" color="textPrimary" gutterBottom>
          to share in the celebration of love as we unite in the engagement and
          wedding ceremony of
        </Typography>
        <Typography variant="h2" color="primary">
          Manoj
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Son of Mrs. Manisha Shri Mitharam Pandurang Pawar
        </Typography>
        <Typography variant="h6" color="textPrimary" gutterBottom>
          Joins
        </Typography>
        <Typography variant="h2" color="primary">
          Mansi
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Daughter of Mrs. Surekha Shri Dilip Dattatray Tandale
        </Typography>
        <Typography variant="h6" color="textPrimary" gutterBottom>
          Your presence will add joy to our special day as we bless the
          newlyweds on their beautiful journey together.
        </Typography>
      </CardContent>
    </StyledCard>
  );
};

export default InvitationCard;
