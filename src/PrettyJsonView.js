import JSONPretty from "react-json-prettify";
import Grid from "@mui/material/Grid";
import { Card } from "@mui/material";
import CardHeader from "@material-ui/core/CardHeader";

const PrettyJsonView = ({ saved_data }) => {
  return (
    <div>
      <Grid container spacing={4} columns={12} sx={{ padding: 4 }}>
        <Grid item md={12} sx={{ padding: 1 }}>
          <Card elevation={5} sx={{ padding: 1 }}>
            <CardHeader title="JsonPrettify from Json API" />
            <JSONPretty json={saved_data} />
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};
export default PrettyJsonView;
