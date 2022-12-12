import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Container, Tab, Typography } from "@mui/material";
import React, { useState } from "react";
import Header from "../../../components/Header";
import "./add_customer_style.css";
import Basic from "./Basic";
import PersonalInfo from "./PersonalInfo";

const AddEmployee = () => {
  const [value, setValue] = useState("1");

  document.title = "Add Employee | QRMC";

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Header />
      <Container sx={{ marginTop: "8rem" }}>
        <Typography variant="h5" marginBottom={"1rem"}>
          Add Employee
        </Typography>
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="QRMC Add Employee label"
                centered={true}
                scrollButtons={"auto"}
              >
                <Tab label="Basic" value="1" />
                <Tab label="Personal Info" value="2" />
                <Tab label="Family Details" value="3" />
                <Tab label="Qualification" value="4" />
                <Tab label="Experience" value="5" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <Basic callback={handleChange} />
            </TabPanel>
            <TabPanel value="2">
              <PersonalInfo callback={handleChange} />
            </TabPanel>
            <TabPanel value="3">{"item three"}</TabPanel>
            <TabPanel value="4">{"item three"}</TabPanel>
            <TabPanel value="5">{"item three"}</TabPanel>
          </TabContext>
        </Box>
      </Container>
    </>
  );
};

export default AddEmployee;
