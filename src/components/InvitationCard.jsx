import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles((theme) => ({
  text: {
    backgroundColor: "rgba(255, 255, 255, 0.7);" /* White with 70% opacity */,
    borderRadius: "8px",
    padding: "4px",
  },
  joins: {
    marginBottom: "18px !important",
    marginTop: "24px !important",
    fontWeight: "bold",
  },
  top: {},
}));

const StyledCard = styled(Card)(({ theme }) => ({
  textAlign: "center",
  marginBottom: theme.spacing(2),
}));

const InvitationCard = () => {
  const classes = useStyle();
  return (
    <StyledCard>
      <CardMedia
        image={`${process.env.PUBLIC_URL}/images/ganesha-bg.jpg`}
        sx={{
          backgroundImage: "url(/images/your-background-image.jpg)", // Replace with your image path
          backgroundSize: "cover", // Ensure the image covers the CardMedia
          backgroundPosition: "top", // Start the image from the top
        }}
      >
        <CardContent>
          <Typography
            variant="h6"
            color="textPrimary"
            style={{
              marginTop: "100px",
              fontWeight: "bold",
            }}
          >
            With Joyful Hearts, We Cordially Invite You
          </Typography>
          <Typography
            variant="h6"
            color="textPrimary"
            style={{ marginBottom: "24px" }}
          >
            to share in the celebration of love as we unite in the engagement
            and wedding ceremony of
          </Typography>
          <Typography
            variant="h2"
            color="primary"
            style={{ fontWeight: "bold" }}
          >
            Manoj
          </Typography>
          <Typography variant="h6" color="textPrimary">
            Son of Mrs. Manisha Shri Mitharam Pandurang Pawar
          </Typography>
          <Typography
            variant="h6"
            color="textPrimary"
            style={{ fontWeight: "bold" }}
            className={classes.joins}
          >
            And
          </Typography>
          <Typography
            variant="h2"
            color="primary"
            style={{ fontWeight: "bold" }}
          >
            Mansi
          </Typography>
          <Typography
            variant="h6"
            color="textPrimary"
            style={{ marginBottom: "24px" }}
          >
            Daughter of Mrs. Surekha Shri Dilip Dattatray Tandale
          </Typography>
          <Typography
            variant="h6"
            color="textPrimary"
            style={{ marginBottom: "36px" }}
          >
            Your presence will add joy to our special day as we bless the
            newlyweds on their beautiful journey together.
          </Typography>
        </CardContent>
      </CardMedia>
    </StyledCard>
  );
};

export default InvitationCard;
