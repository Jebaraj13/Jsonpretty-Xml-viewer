import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Card } from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import CardHeader from "@material-ui/core/CardHeader";

const useStyles = makeStyles({
  box: {
    "& a": {
      color: "blue",
      textDecoration: "none",
      "&:hover": {
        color: "#7f7e94",
      },
    },

    "& li": {
      color: "#181a4a",
      padding: 3,
    },
  },
});

const Home = () => {
  const classes = useStyles();
  return (
    <div>
      <Box sx={{ flexGrow: 1 }} className={classes.box}>
        <Grid container columns={12} sx={{ padding: 1 }}>
          <Grid item xs={4}></Grid>
          <Grid item md={4}>
            <Card elevation={5} sx={{ padding: 1 }}>
              <CardHeader title="Welcome Home !" />
              <ul>
                <li>
                  <Link to="/Jsonpretty" style={{ textDecoration: "none" }}>
                    Json Pretty
                  </Link>
                </li>
                <li>
                  <Link to="/fetchpretty">Json Pretty From Json API</Link>
                </li>
                <li>
                  <Link to="/xml-formatter">XML Formatter</Link>
                </li>
                <li>
                  <Link to="/xml-viewer">XML Viewer</Link>
                </li>
                <li>
                  <Link to="/json-xml-download">Json to XML Downloader</Link>
                </li>
              </ul>
            </Card>
          </Grid>

          <Grid item md={4}></Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Home;
