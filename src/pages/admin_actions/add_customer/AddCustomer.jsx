import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Container, Tab, Typography } from "@mui/material";
import React, { useState } from "react";
import Header from "../../../components/Header";
import AccountDetails from "./AccountDetails";
import "./add_customer_style.css";
import Basic from "./Basic";
import PersonalInfo from "./PersonalInfo";

const AddCustomer = () => {
  const [value, setValue] = useState("1");

  document.title = "Add Customer | QRMC";

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Header />
      <Container sx={{ marginTop: "8rem" }}>
        <Typography variant="h5" marginBottom={"1rem"}>
          Add Customer
        </Typography>
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="QRMC Add Customers"
                centered={true}
                scrollButtons={"auto"}
              >
                <Tab label="Basic" value="1" />
                <Tab label="Account Details" value="2" />
                <Tab label="Personal Info" value="3" />
              </TabList>
            </Box>
            <TabPanel value="1">{<Basic callback={handleChange} />}</TabPanel>
            <TabPanel value="2">
              {<AccountDetails callback={handleChange} />}
            </TabPanel>
            <TabPanel value="3">{<PersonalInfo />}</TabPanel>
          </TabContext>
        </Box>
      </Container>
    </>
  );
};

export default AddCustomer;
