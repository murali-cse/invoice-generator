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

const Basic = () => {
  return (
    <>
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            Name Of the Company
            <TextField fullWidth sx={{ marginBottom: "0.5rem" }} />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            GST Number
            <TextField fullWidth sx={{ marginBottom: "0.5rem" }} />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            Vendor Code
            <TextField fullWidth sx={{ marginBottom: "0.5rem" }} />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            PAN Number
            <TextField fullWidth sx={{ marginBottom: "0.5rem" }} />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            Type Of the Firm
            <TextField fullWidth sx={{ marginBottom: "0.5rem" }} />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            TIN Number
            <TextField fullWidth sx={{ marginBottom: "0.5rem" }} />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            Country
            <TextField fullWidth sx={{ marginBottom: "0.5rem" }} />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            Status Of the Company
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

export default Basic;
