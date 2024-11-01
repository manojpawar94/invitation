import React from "react";
import Header from "./components/Header";
import InvitationCard from "./components/InvitationCard";
import EventCard from "./components/EventCard";

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
        <div className="row">
          <div className="col-sm-6">
            <EventCard
              title="Engagement"
              date="17 November 2024, Sunday"
              location="Pacific Banquets, 4th floor, The Pacific, Shilp Chowk, Block G, Sector 13, Kharghar, Navi Mumbai, Maharashtra 410210"
              locationHref="https://maps.app.goo.gl/GBJwu2xwKi32gSN47"
            />
          </div>
          <div className="col-sm-6">
            <EventCard
              title="Wedding"
              date="25 November 2024, Sunday"
              location="Shehnai Hall, Service Road, Shahid Mangal Pandey Rd, Louis Wadi, Thane West, Thane, Maharashtra 400604"
              locationHref="https://maps.app.goo.gl/euddLbTsozmtQkef9"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
