import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Container, Tab, Typography } from "@mui/material";
import React, { useState } from "react";
import Header from "../../../components/Header";
import "../add_employee/add_customer_style.css";
import BankDetails from "./BankDetails";
import Basic from "./Basic";
import Contact from "./Contact";
import Statutory from "./Statutory";

const AddSuppliers = () => {
  const TAB1 = "Basic Details";
  const TAB2 = "Contact Details";
  const TAB3 = "Bank Details";
  const TAB4 = "Statutory Details";

  const [value, setValue] = useState("1");

  document.title = "Add Suppliers | QRMC";

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Header />
      <Container sx={{ marginTop: "8rem" }}>
        <Typography variant="h5" marginBottom={"1rem"}>
          Add Suppliers
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
                <Tab label={TAB1} value="1" />
                <Tab label={TAB2} value="2" />
                <Tab label={TAB3} value="3" />
                <Tab label={TAB4} value="4" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <Basic />
            </TabPanel>
            <TabPanel value="2">
              <Contact />
            </TabPanel>
            <TabPanel value="3">{<BankDetails />}</TabPanel>
            <TabPanel value="4">{<Statutory />}</TabPanel>
          </TabContext>
        </Box>
      </Container>
    </>
  );
};

export default AddSuppliers;
