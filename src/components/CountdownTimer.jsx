import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles((theme) => ({
  title: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
  card: {
    backgroundColor: "rgba(255, 255, 255, 0.7);" /* White with 70% opacity */,
    borderRadius: "8px",
    paddingLeft: "8px",
    paddingRight: "8px",
  },
}));

const formatNumber = (num) => {
  return String(num).padStart(2, "0");
};

const CountdownTimer = ({ eventDate }) => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const classes = useStyle();

  useEffect(() => {
    const calculateCountdown = () => {
      const currentDate = new Date();
      const eventDateObj = new Date(eventDate);
      const diffTime = eventDateObj - currentDate;

      if (diffTime <= 0) {
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
      const diffHours = Math.floor(
        (diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const diffMinutes = Math.floor(
        (diffTime % (1000 * 60 * 60)) / (1000 * 60)
      );
      const diffSeconds = Math.floor((diffTime % (1000 * 60)) / 1000);

      setCountdown({
        days: diffDays,
        hours: diffHours,
        minutes: diffMinutes,
        seconds: diffSeconds,
      });
    };

    calculateCountdown();
    const intervalId = setInterval(calculateCountdown, 1000);

    return () => clearInterval(intervalId);
  }, [eventDate]);

  return (
    <>
      <div
        className="row"
        style={{
          textAlign: "center",
          paddingTop: "20px",
        }}
      >
        <div className="col-4">
          <Typography className={classes.title}>Days</Typography>
        </div>
        <div className="col-4">
          <Typography className={classes.title}>Hours</Typography>
        </div>
        <div className="col-4">
          <Typography className={classes.title}>Minutes</Typography>
        </div>
      </div>
      <div
        className="row"
        style={{ textAlign: "center", paddingBottom: "20px" }}
      >
        <div className="col-4">
          <Typography color="primary" variant="h3" className={classes.card}>
            {countdown.days != undefined ? formatNumber(countdown.days) : 0}
          </Typography>
        </div>
        <div className="col-4">
          <Typography color="primary" variant="h3" className={classes.card}>
            {countdown.hours != undefined ? formatNumber(countdown.hours) : 0}
          </Typography>
        </div>
        <div className="col-4">
          <Typography color="primary" variant="h3" className={classes.card}>
            {countdown.minutes != undefined
              ? formatNumber(countdown.minutes)
              : 0}
          </Typography>
        </div>
      </div>
    </>
  );
};

export default CountdownTimer;
