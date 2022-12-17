import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Container, Tab, Typography } from "@mui/material";
import React, { useState } from "react";
import Header from "../../../components/Header";
import "../../admin_actions/add_customer/add_customer_style.css";
import OrderDetails from "./OrderDetails";

const CreateEnquiry = () => {
  const [value, setValue] = useState("1");

  document.title = "Create Enquiry | QRMC";

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Header />
      <Container sx={{ marginTop: "8rem" }}>
        <Typography variant="h5" marginBottom={"1rem"}>
          Create New Order / Enquiry
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
                <Tab label="Order Details" value="1" />
                <Tab label="Site And Pouring Details" value="2" />
                <Tab label="Time Slots" value="3" />
                <Tab label="Concrete Mix Information" value="4" />
                <Tab label="Pricing Information" value="5" />
              </TabList>
            </Box>
            <TabPanel value="1">{<OrderDetails />}</TabPanel>
            <TabPanel value="2">Item 2</TabPanel>
            <TabPanel value="3">Item 3</TabPanel>
            <TabPanel value="4">Item 4</TabPanel>
            <TabPanel value="5">Item 5</TabPanel>
          </TabContext>
        </Box>
      </Container>
    </>
  );
};

export default CreateEnquiry;
