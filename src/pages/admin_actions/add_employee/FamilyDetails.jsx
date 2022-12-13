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

const FamilyDetails = () => {
  return (
    <>
      <Box>
        <Typography variant="h6" mb={"2%"}>
          Amar's Details
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            Name
            <TextField fullWidth sx={{ marginBottom: "0.5rem" }} />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            Relationship
            <TextField fullWidth sx={{ marginBottom: "0.5rem" }} />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            Gender
            <TextField fullWidth sx={{ marginBottom: "0.5rem" }} />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            Occupation or Studying
            <TextField
              fullWidth
              sx={{ marginBottom: "0.5rem" }}
              id="memberName"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            Date Of Birth
            <TextField
              id="date"
              type="date"
              defaultValue="2017-05-24"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            Whether Staying with You
            <TextField fullWidth sx={{ marginBottom: "0.5rem" }} />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            Contact Number
            <TextField
              type={"number"}
              fullWidth
              sx={{ marginBottom: "0.5rem" }}
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

export default FamilyDetails;
