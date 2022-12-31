import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import CustomTable from "../../components/CustomTable";
import Footer from "../../components/Footer";
import PageTitle from "../../components/PageTitle";

const Dashboard = () => {
  document.title = "Dashboard | Nutz Invoices";

  const tableData = [
    {
      orderId: "#NBZ001",
      billingName: "Murali",
      date: "20-12-2012",
      total: "$100",
    },
    {
      orderId: "#NBZ001",
      billingName: "Murali",
      date: "20-12-2012",
      total: "$100",
    },
    {
      orderId: "#NBZ001",
      billingName: "Murali",
      date: "20-12-2012",
      total: "$100",
    },
  ];

  return (
    <>
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <PageTitle title={"dashboard"} />
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                <Box sx={{ typography: "body1" }}>
                  <div className="card mini-stats-wid">
                    <div className="card-body">
                      <div className="d-flex">
                        <div className="flex-grow-1">
                          <p className="text-muted fw-medium">Orders</p>
                          <h4 className="mb-0">1,235</h4>
                        </div>

                        <div className="flex-shrink-0 align-self-center">
                          <div className="mini-stat-icon avatar-sm rounded-circle bg-primary">
                            <span className="avatar-title">
                              <i className="bx bx-copy-alt font-size-24"></i>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Box>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <CustomTable
                  tableName={"Latest Transactions"}
                  data={tableData}
                />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Dashboard;
