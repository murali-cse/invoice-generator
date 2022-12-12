import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";

const Basic = ({ callback }) => {
  return (
    <>
      <Box display={"flex"} justifyContent={"center"} marginTop={"1rem"}>
        <Box width={"60%"}>
          <Grid
            container
            spacing={0}
            direction="column"
            justifyContent={"center"}
          >
            <Grid item>
              <Typography marginBottom={"0.5rem"}>Customer ID</Typography>
            </Grid>
            <Grid container justifyContent="center">
              <TextField fullWidth sx={{ marginBottom: "1rem" }} />
            </Grid>
            <Grid item>
              <Typography marginBottom={"0.5rem"}>Customer Name</Typography>
            </Grid>
            <Grid container justifyContent="center">
              <TextField fullWidth sx={{ marginBottom: "1rem" }} />
            </Grid>
            <Grid item>
              <Typography marginBottom={"0.5rem"}>Customer Ledger</Typography>
            </Grid>
            <Grid container justifyContent="center">
              <TextField fullWidth sx={{ marginBottom: "1rem" }} />
            </Grid>
          </Grid>
          <Button
            variant="contained"
            fullWidth
            disableElevation
            size="large"
            sx={{
              backgroundColor: "#f9be12",
              color: "black",
              "&:hover": { backgroundColor: "#edb10e" },
            }}
            onClick={() => {
              callback(null, "2");
            }}
          >
            <Typography sx={{ fontWeight: "600" }}>Continue</Typography>
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Basic;
