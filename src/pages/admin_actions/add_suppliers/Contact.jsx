import React, { useState } from "react";
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
  const [selectedService, setSelectedService] = useState([]);
  const services = [
    "Cement",
    "Aggregates-12mm",
    "Aggregates-20mm",
    "P Sand",
    "M Sand",
    "Flyash",
    "Admixtures",
    "Repair/Service Provider",
    "Others",
  ];

  const onChipClick = (v) => {
    setSelectedService([...selectedService, v]);
  };

  const checkSelectedService = (v) => {
    return selectedService.includes(v);
  };

  const onChipDelete = (v) => {
    let i = selectedService.indexOf(v);
    selectedService.splice(i, 1);
    console.log(selectedService);
    setSelectedService([...selectedService]);
  };

  return (
    <>
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            Name Of the Contact Person
            <TextField fullWidth sx={{ marginBottom: "0.5rem" }} />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            Phone With Std Code
            <TextField fullWidth sx={{ marginBottom: "0.5rem" }} />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            Designation Of the Contact Person
            <TextField fullWidth sx={{ marginBottom: "0.5rem" }} />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            Fax
            <TextField fullWidth sx={{ marginBottom: "0.5rem" }} />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            Address
            <TextField fullWidth sx={{ marginBottom: "0.5rem" }} />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            Mobile
            <TextField fullWidth sx={{ marginBottom: "0.5rem" }} />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            City & State
            <TextField fullWidth sx={{ marginBottom: "0.5rem" }} />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            Email
            <TextField fullWidth sx={{ marginBottom: "0.5rem" }} />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            Is Your Firm MSME?
            <TextField fullWidth sx={{ marginBottom: "0.5rem" }} />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            Brief Description Of Your Company
            <TextField fullWidth sx={{ marginBottom: "0.5rem" }} />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Typography>Type of items interested for supply/service</Typography>
            {services.map((v, i) => {
              let isSelected = checkSelectedService(v);
              return (
                <Chip
                  key={v + i}
                  label={v}
                  sx={{
                    marginRight: "10px",
                    marginTop: "10px",
                    backgroundColor: isSelected ? "#F9BF14" : null,
                  }}
                  onClick={!isSelected ? () => onChipClick(v) : null}
                  onDelete={isSelected ? () => onChipDelete(v) : null}
                />
              );
            })}
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
