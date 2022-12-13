import React from "react";
import {
  Box,
  Button,
  Chip,
  Container,
  FormControl,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import Header from "../../../components/Header";

const AddMixDesign = () => {
  return (
    <>
      <Header />
      <Container sx={{ marginTop: "8rem" }}>
        <Box>
          <Typography
            variant="h6"
            mb={"3%"}
            pb="3px"
            sx={{ borderBottom: 1, borderColor: "divider" }}
          >
            Add Mix Details
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <h5>Grade</h5>
              <TextField fullWidth sx={{ marginBottom: "0.5rem" }} />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <h5>20mm</h5>
              <TextField fullWidth sx={{ marginBottom: "0.5rem" }} />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <h5>Mix Code</h5>
              <TextField fullWidth sx={{ marginBottom: "0.5rem" }} />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <h5>12mm</h5>
              <TextField fullWidth sx={{ marginBottom: "0.5rem" }} />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <h5>Cement</h5>
              <TextField fullWidth sx={{ marginBottom: "0.5rem" }} />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <h5>MSand</h5>
              <TextField fullWidth sx={{ marginBottom: "0.5rem" }} />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <h5>Flyash</h5>
              <TextField fullWidth sx={{ marginBottom: "0.5rem" }} />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <h5>Admixture</h5>
              <TextField fullWidth sx={{ marginBottom: "0.5rem" }} />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <h5>GGBS</h5>
              <TextField fullWidth sx={{ marginBottom: "0.5rem" }} />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <h5>CRF</h5>
              <TextField fullWidth sx={{ marginBottom: "0.5rem" }} />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <h5>10mm</h5>
              <TextField fullWidth sx={{ marginBottom: "0.5rem" }} />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <h5>Silicon Fumes</h5>
              <TextField fullWidth sx={{ marginBottom: "0.5rem" }} />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <h5>Water</h5>
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
                marginBottom: "5rem",
                backgroundColor: "#f9be12",
                color: "black",
                width: "40%",
                "&:hover": { backgroundColor: "#edb10e" },
              }}
              onClick={() => {}}
            >
              <Typography sx={{ fontWeight: "600" }}>Add Mix</Typography>
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default AddMixDesign;
