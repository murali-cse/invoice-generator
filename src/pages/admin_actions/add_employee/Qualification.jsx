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

const Qualification = () => {
  return (
    <>
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            Educational Qualification
            <FormControl fullWidth>
              <Select
                value={""}
                displayEmpty
                inputProps={{ "aria-label": "QRMC Gender Field Label" }}
              >
                <MenuItem value="">Select Educational Qualification</MenuItem>
                <MenuItem value={"male"}>SSC/10th/Equivalent</MenuItem>
                <MenuItem value={"female"}>HSC/Intermediate</MenuItem>
                <MenuItem value={"female"}>Diploma (S)</MenuItem>
                <MenuItem value={"female"}>Degree (S)</MenuItem>
                <MenuItem value={"female"}>Post Graduate (S)</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            Passport Number
            <TextField fullWidth sx={{ marginBottom: "0.5rem" }} />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            Certificates
            <TextField fullWidth sx={{ marginBottom: "0.5rem" }} />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            Driver License Number
            <TextField
              fullWidth
              sx={{ marginBottom: "0.5rem" }}
              id="memberName"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            Training Undergone
            <TextField fullWidth sx={{ marginBottom: "0.5rem" }} />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            Driver License Valid Upto
            <TextField
              id="date"
              type="date"
              defaultValue="2017-05-24"
              fullWidth
            />
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

export default Qualification;
