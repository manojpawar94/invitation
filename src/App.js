import React from "react";
import Header from "./components/CenteredAppBar";
import InvitationCard from "./components/InvitationCard";
import UpcomingEventCard from "./components/UpComingEventCard";
import PostEventCard from "./components/PostEventCard";
import Footer from "./components/Footer";
import { Typography } from "@mui/material";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="row" style={{ marginTop: "16px" }}>
          <div className="col-12">
            <InvitationCard />
          </div>
        </div>
        <div
          className="row"
          style={{ marginTop: "16px", marginBottom: "16px" }}
        >
          <div className="col-12">
            <Typography
              variant="h4"
              color="primary"
              sx={{ textAlign: "center" }}
            >
              Upcoming Events
            </Typography>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <UpcomingEventCard
              eventBgImage="haladi-bg.jpeg"
              eventTitle="Haldi Ceremony"
              eventDateTime="2024-11-24T19:00:00"
              displayEventDate="24 November 2024"
              eventDay="Sunday"
              eventTime="07:00 PM"
              eventLocation="202/B Wing, Omkar Complex, Ambadi Naka, Opp. Bank of Baroda, Tal. Bhiwandi, Thane, Maharashtra 421302"
              eventLocationLink="https://maps.app.goo.gl/6yCfwXjZqfBuQz9F6"
            />
          </div>
          <div className="col-sm-6">
            <UpcomingEventCard
              eventBgImage="wedding-bg.jpg"
              eventTitle="Wedding Ceremony"
              eventDateTime="2024-11-25T11:00:00"
              displayEventDate="25 November 2024"
              eventDay="Monday"
              eventTime="11:00 AM"
              eventLocation="Shehnai Hall, Service Road, Shahid Mangal Pandey Rd, Louis Wadi, Thane West, Thane, Maharashtra 400604"
              eventLocationLink="https://maps.app.goo.gl/euddLbTsozmtQkef9"
            />
          </div>
        </div>
        <div
          className="row"
          style={{ marginTop: "16px", marginBottom: "16px" }}
        >
          <div className="col-12">
            <Typography
              variant="h4"
              color="primary"
              sx={{ textAlign: "center" }}
            >
              Completed Events
            </Typography>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <PostEventCard
              eventBgImage="engagement-bg.jpeg"
              eventTitle="Engagement Ceremony"
              eventDateTime="2024-11-17T10:30:00"
              displayEventDate="17 November 2024"
              eventDay="Sunday"
              eventTime="10:30 AM"
              eventLocation="Pacific Banquets, 4th floor, Shilp Chowk, Block G, Sector 13, Kharghar, Navi Mumbai, Maharashtra 410210"
              eventLocationLink="https://maps.app.goo.gl/GBJwu2xwKi32gSN47"
            />
          </div>
          <div className="col-sm-6">
            <PostEventCard
              eventBgImage="tilak-bg.tiff"
              eventTitle="Tilak Ceremony"
              eventDateTime="2024-07-07T10:30:00"
              displayEventDate="07 July 2024"
              eventDay="Sunday"
              eventTime="10:30 AM"
              eventLocation="Sai Leela Banquet Hall, Shop No 9, First Floor, Patel Paradise, Sector 35E, Kharghar, Navi Mumbai, Maharashtra 410210"
              eventLocationLink="https://maps.app.goo.gl/GBJwu2xwKi32gSN47"
              photoGalleryPath="https://www.playbook.com/s/nikhil-movies/C1mXNH9FL1794E1VbrTUmeHd"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
