import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
  SvgIcon,
  Chip,
} from "@mui/material";
import EventIcon from "@mui/icons-material/Event"; // Icon for date
import LocationOnIcon from "@mui/icons-material/LocationOn"; // Icon for location

import "./App.css";
import Header from "./component/header";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  center: {
    textAlign: "center", // MUI shadow
  },
  heading: {
    fontWeight: "bold",
    color: "#3f51b5", // MUI primary color
    marginBottom: theme.spacing(1),
  },
  subheading: {
    color: "#555", // Dark gray for subtitling
    marginBottom: theme.spacing(1),
  },
  section: {
    marginBottom: "16px",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <>
      <div className="container">
        <Header />
        <div className={`row ${classes.section}`} style={{ marginTop: "16px" }}>
          <div className="col-12">
            <Card className={classes.center}>
              <CardContent>
                <div className={`row ${classes.section}`}>
                  <div className="col-sm-12">
                    <Typography
                      variant="h6"
                      align="center"
                      style={{ color: "#333", fontWeight: "bold" }}
                    >
                      With Joyful Hearts, We Cordially Invite You
                    </Typography>

                    <Typography
                      variant="h6"
                      align="center"
                      style={{ color: "#333" }}
                    >
                      to share in the celebration of love as we unite in the
                      engagement and wedding ceremony of
                    </Typography>
                  </div>
                </div>
                <div className={`row ${classes.section}`}>
                  <div className="col-sm-12">
                    <Typography variant="h2" className={classes.heading}>
                      Manoj
                    </Typography>
                    <Typography variant="body1" color="textSecondary">
                      Son of Mrs. Manisha Shri Mitharam Pandurang Pawar
                    </Typography>
                  </div>
                </div>
                <div className={`row ${classes.section}`}>
                  <div className="col-sm-12">
                    <Typography
                      variant="h6"
                      align="center"
                      style={{ color: "#333" }}
                    >
                      Joins
                    </Typography>
                  </div>
                </div>
                <div className={`row ${classes.section}`}>
                  <div className="col-sm-12">
                    <Typography variant="h2" className={classes.heading}>
                      Mansi
                    </Typography>
                    <Typography variant="body1" color="textSecondary">
                      Daughter of Mrs. Surekha Shri Dilip Dattatray Tandale
                    </Typography>
                  </div>
                </div>
                <div className={`row ${classes.section}`}>
                  <div className="col-sm-12">
                    <Typography
                      variant="h6"
                      align="center"
                      style={{ color: "#333" }}
                    >
                      Your presence will add joy to our special day as we bless
                      the newlyweds on their beautiful journey together.
                    </Typography>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <Card>
              <CardMedia>
                <CardHeader title="Enagement" />
                <CardContent>
                  <Typography variant="h2" className={classes.heading}>
                    17
                  </Typography>
                  <Typography variant="h6" color="textSecondary" gutterBottom>
                    <SvgIcon component={EventIcon} fontSize="small" /> November
                    2024, Sunday
                  </Typography>
                  <Typography variant="h6" color="textSecondary">
                    <SvgIcon component={LocationOnIcon} fontSize="small" />{" "}
                    Pacific Banquets, 4th floor, The Pacific, Shilp Chowk, Block
                    G, Sector 13, Kharghar, Navi Mumbai, Maharashtra 410210
                  </Typography>
                </CardContent>
              </CardMedia>
            </Card>
          </div>
          <div className="col-sm-6">
            <Card>
              <CardHeader title="Wedding" />
              <CardMedia>
                {/* You can add an image here if you like */}

                <CardContent>
                  <Typography variant="h2" className={classes.heading}>
                    25
                  </Typography>
                  <Typography variant="h6" color="textSecondary" gutterBottom>
                    <SvgIcon component={EventIcon} fontSize="small" /> November
                    2024, Monday
                  </Typography>
                  <Typography variant="h6" color="textSecondary">
                    <SvgIcon component={LocationOnIcon} fontSize="small" />{" "}
                    Shehnai Hall, Service Road, Shahid Mangal Pandey Rd, Louis
                    Wadi, Thane West, Thane, Maharashtra 400604
                  </Typography>
                </CardContent>
              </CardMedia>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
