import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

function HelpPage() {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="flex-end"
      marginTop={38}
    >
      <Typography color="#072E3E">
        We Have Been Here. We Can <strong>Help</strong>.
      </Typography>
    </Grid>
  );
}

export default HelpPage;
