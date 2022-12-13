import { Box, Button, Chip, Tab } from "@mui/material";
import TabPanel from "@mui/lab/TabPanel";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import React, { useState } from "react";
import Footer from "../../components/Footer";
import "./style.css";
import CustomerList from "./CustomerList";
import EmployeeList from "./EmployeeList";
import MixDesign from "./MixDesign";
import Suppliers from "./Suppliers";
import { Link } from "react-router-dom";

const AdminActions = () => {
  const [value, setValue] = useState("1");
  const [buttonText, setButtonText] = useState("Add Customer");
  const [buttonLink, setButtonLink] = useState("/addcustomer");
  const chipColor = "#E8E9EB";

  document.title = "Admin Actions | QRMC";

  const tabPanelStyle = {
    paddingLeft: 0,
    paddingRight: 0,
  };

  const handleChange = (e, newValue) => {
    setValue(newValue);

    switch (newValue) {
      case "1":
        setButtonText("Add Customer");
        setButtonLink("/addcustomer");
        break;
      case "2":
        setButtonText("Add Employee");
        setButtonLink("/addemployee");
        break;
      case "3":
        setButtonText("Add Mix Design");
        setButtonLink("/addmixdesign");
        break;
      case "4":
        setButtonText("Add Suppliers");
        setButtonLink("/addsuppliers");
        break;
      default:
        setButtonText("Add Customer");
        setButtonLink("/addcustomer");
        break;
    }
  };

  return (
    <>
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-10">
                <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                  <h4 className="mb-sm-0 font-size-18">Admin Actions</h4>
                </div>
              </div>
              <div className="col-2">
                <Link to={buttonLink}>
                  <Button
                    variant="contained"
                    style={{
                      backgroundColor: "#f9be12",
                      color: "black",
                      boxShadow: "0 0",
                    }}
                  >
                    {buttonText}
                  </Button>
                </Link>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <Box sx={{ width: "100%", typography: "body1" }}>
                  <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                      <TabList
                        onChange={handleChange}
                        aria-label="Admin actions main tab bar"
                        TabIndicatorProps={{
                          style: {
                            transition: "none",
                          },
                        }}
                        className={"mainTab"}
                      >
                        <Tab
                          label={
                            <span
                              style={{
                                display: "flex",
                                alignItems: "center",
                              }}
                            >
                              Customer{" "}
                              <Chip
                                label="999+"
                                size="small"
                                className="mx-2"
                                style={{
                                  backgroundColor: chipColor,
                                }}
                              ></Chip>
                            </span>
                          }
                          value={"1"}
                        />
                        <Tab
                          label={
                            <span
                              style={{
                                display: "flex",
                                alignItems: "center",
                              }}
                            >
                              Employee
                              <Chip
                                label="999+"
                                size="small"
                                className="mx-2"
                                style={{
                                  backgroundColor: chipColor,
                                }}
                              ></Chip>
                            </span>
                          }
                          value={"2"}
                        />
                        <Tab
                          label={
                            <span
                              style={{
                                display: "flex",
                                alignItems: "center",
                              }}
                            >
                              Mix Design
                              <Chip
                                label="999+"
                                size="small"
                                className="mx-2"
                                style={{
                                  backgroundColor: chipColor,
                                }}
                              ></Chip>
                            </span>
                          }
                          value={"3"}
                        />
                        <Tab
                          label={
                            <span
                              style={{
                                display: "flex",
                                alignItems: "center",
                              }}
                            >
                              Suppliers
                              <Chip
                                label="999+"
                                size="small"
                                className="mx-2"
                                style={{
                                  backgroundColor: chipColor,
                                }}
                              ></Chip>
                            </span>
                          }
                          value={"4"}
                        />
                      </TabList>
                    </Box>
                    <TabPanel value={"1"} sx={tabPanelStyle}>
                      {<CustomerList />}
                    </TabPanel>
                    <TabPanel value={"2"} sx={tabPanelStyle}>
                      {<EmployeeList />}
                    </TabPanel>
                    <TabPanel value={"3"} sx={tabPanelStyle}>
                      {<MixDesign />}
                    </TabPanel>
                    <TabPanel value={"4"} sx={tabPanelStyle}>
                      {<Suppliers />}
                    </TabPanel>
                  </TabContext>
                </Box>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default AdminActions;
