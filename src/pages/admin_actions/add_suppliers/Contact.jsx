import React from "react";
import {
  Box,
  Button,
  Chip,
  FormControl,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";

const Contact = () => {
  return (
    <>
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            Name Of the Contact Person
            <TextField fullWidth sx={{ marginBottom: "0.5rem" }} />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            Phone With Std Code
            <TextField fullWidth sx={{ marginBottom: "0.5rem" }} />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            Designation Of the Contact Person
            <TextField fullWidth sx={{ marginBottom: "0.5rem" }} />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            Fax
            <TextField fullWidth sx={{ marginBottom: "0.5rem" }} />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            Address
            <TextField fullWidth sx={{ marginBottom: "0.5rem" }} />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            Mobile
            <TextField fullWidth sx={{ marginBottom: "0.5rem" }} />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            City & State
            <TextField fullWidth sx={{ marginBottom: "0.5rem" }} />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            Email
            <TextField fullWidth sx={{ marginBottom: "0.5rem" }} />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            Is Your Firm MSME?
            <TextField fullWidth sx={{ marginBottom: "0.5rem" }} />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            Brief Description Of Your Company
            <TextField fullWidth sx={{ marginBottom: "0.5rem" }} />
          </Grid>
        </Grid>
        <Box display={"flex"} justifyContent={"center"}>
          <Button
            variant="contained"
            disableElevation
            size="large"
            sx={{
              marginTop: "2rem",
              marginBottom: "10%",
              backgroundColor: "#f9be12",
              color: "black",
              width: "40%",
              "&:hover": { backgroundColor: "#edb10e" },
            }}
            onClick={() => {}}
          >
            <Typography sx={{ fontWeight: "600" }}>Continue</Typography>
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Contact;
