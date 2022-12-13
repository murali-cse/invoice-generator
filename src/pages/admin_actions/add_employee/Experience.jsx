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

const Experience = () => {
  return (
    <>
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            Work Experience
            <TextField fullWidth sx={{ marginBottom: "0.5rem" }} />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={6} lg={6}>
                Working From
                <TextField
                  id="date"
                  type="date"
                  defaultValue="2017-05-24"
                  sx={{ width: 220 }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={6}>
                Working To
                <TextField
                  id="date"
                  type="date"
                  defaultValue="2017-05-24"
                  sx={{ width: 220 }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            Previous Employer Name
            <TextField fullWidth sx={{ marginBottom: "0.5rem" }} />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            Position Held
            <TextField
              fullWidth
              sx={{ marginBottom: "0.5rem" }}
              id="memberName"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            Previous Employer Address
            <TextField fullWidth sx={{ marginBottom: "0.5rem" }} />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            Total Work Experience
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

export default Experience;
