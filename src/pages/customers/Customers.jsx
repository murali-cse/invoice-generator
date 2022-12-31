import React from "react";
import CustomTable from "../../components/CustomTable";
import Footer from "../../components/Footer";
import PageTitle from "../../components/PageTitle";

const Customers = () => {
  document.title = "Customers Managment| Nutz Invoice";
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
    <div className="main-content">
      <div className="page-content">
        <div className="container-fluid">
          <div
            className="d-flex"
            style={{ justifyContent: "space-between", alignItems: "center" }}
          >
            <PageTitle title={"Customers"} pb={0} mb={"10px"} />
            <button className="btn btn-primary">Add Customer</button>
          </div>
          <div className="row mt-4">
            <div className="col-lg-12">
              <CustomTable tableName={"Customers List"} data={tableData} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Customers;
