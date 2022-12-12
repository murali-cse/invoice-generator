import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";

const AccountDetails = ({ callback }) => {
  return (
    <>
      <Box>
        <Box>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              Accountancy Code
              <TextField fullWidth sx={{ marginBottom: "1rem" }} />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              GSTIN (Optional)
              <TextField fullWidth sx={{ marginBottom: "1rem" }} />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              Mix Code
              <TextField fullWidth sx={{ marginBottom: "1rem" }} />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              TCS Enabled (Optional)
              <TextField fullWidth sx={{ marginBottom: "1rem" }} />
            </Grid>
          </Grid>
          <Box display={"flex"} justifyContent={"center"}>
            <Button
              variant="contained"
              fullWidth
              disableElevation
              size="large"
              sx={{
                marginTop: "1rem",
                backgroundColor: "#f9be12",
                color: "black",
                width: "40%",
                "&:hover": { backgroundColor: "#edb10e" },
              }}
              onClick={() => {
                callback(null, "3");
              }}
            >
              <Typography sx={{ fontWeight: "600" }}>Continue</Typography>
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AccountDetails;
