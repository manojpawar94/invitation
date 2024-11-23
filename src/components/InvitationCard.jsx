import React from "react";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import GodNaman from "./GodNaman";

const useStyle = makeStyles((theme) => ({
  text: {
    backgroundColor: "rgba(255, 255, 255, 0.7);" /* White with 70% opacity */,
    borderRadius: 8,
    padding: 4,
  },
  joins: {
    marginBottom: "12px !important",
    marginTop: "24px !important",
    fontWeight: "bold",
  },
  top: {},
}));

const StyledCard = styled(Card)(({ theme }) => ({
  textAlign: "center",
  marginBottom: theme.spacing(2),
  borderRadius: 16,
  border: "0.2px solid #ccc",
}));

const InvitationCard = () => {
  const classes = useStyle();
  return (
    <StyledCard>
      <CardMedia image={`${process.env.PUBLIC_URL}/images/invitation-bg.jpg`}>
        <CardContent>
          <GodNaman />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: 160,
              marginTop: 2,
              marginBottom: 4,
            }}
          >
            <CardMedia
              component="img"
              image={`${process.env.PUBLIC_URL}/images/ganesha.png`}
              sx={{
                maxHeight: "100%",
                maxWidth: "100%",
                objectFit: "contain",
              }}
            />
          </Box>
          <Typography
            variant="h6"
            color="textPrimary"
            style={{
              fontWeight: "bold",
            }}
          >
            With Joyful Hearts, We Cordially Invite You
          </Typography>
          <Typography
            variant="h6"
            color="textPrimary"
            style={{ marginBottom: 18 }}
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
            Son of Mrs. Manisha Shri. Mitharam Pandurang Pawar
          </Typography>
          <Typography
            variant="h6"
            color="textPrimary"
            style={{ fontWeight: "bold" }}
            className={classes.joins}
          >
            With
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
            style={{ marginBottom: 18 }}
          >
            Daughter of Mrs. Surekha Shri. Dilip Dattatray Tandel
          </Typography>
          <Typography
            variant="h6"
            color="textPrimary"
            style={{ marginBottom: 24 }}
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
