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

const PersonalInfo = ({ callback }) => {
  const [gender, setGender] = useState("");
  const [nameList, setNameList] = useState([]);

  const handleChange = (e) => {
    setGender(e.target.value);
  };

  const onEnterPressed = (e) => {
    if (e.key === "Enter") {
      setNameList([...nameList, e.target.value]);
      e.target.value = "";
    }
  };

  const handleDelete = (index) => {
    nameList.splice(index, 1);
    setNameList([...nameList]);
  };

  return (
    <>
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            Gender
            <FormControl fullWidth>
              <Select
                value={gender}
                onChange={handleChange}
                displayEmpty
                inputProps={{ "aria-label": "QRMC Gender Field Label" }}
              >
                <MenuItem value="">Select Gender</MenuItem>
                <MenuItem value={"male"}>Male</MenuItem>
                <MenuItem value={"female"}>Female</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            Correspondece Address
            <TextField fullWidth sx={{ marginBottom: "0.5rem" }} />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            Marital Status
            <TextField fullWidth sx={{ marginBottom: "0.5rem" }} />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            Type Family Member Name and Hit Enter
            <TextField
              fullWidth
              sx={{ marginBottom: "0.5rem" }}
              id="memberName"
              onKeyUp={onEnterPressed}
            />
            {nameList.map((v, i) => {
              return (
                <Chip
                  label={v}
                  key={v}
                  onDelete={() => handleDelete(i)}
                  sx={{ marginRight: "5px" }}
                />
              );
            })}
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            Mother Tongue
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
            onClick={() => {
              callback(null, "3");
            }}
          >
            <Typography sx={{ fontWeight: "600" }}>Continue</Typography>
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default PersonalInfo;
