import { TextField } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import Footer from "../../components/Footer";
import PageTitle from "../../components/PageTitle";

const CreateInvoice = () => {
  const params = useParams();

  return (
    <div className="main-content">
      <div className="page-content">
        <div className="container-fluid">
          <PageTitle title={"Create Invoice"} pb={0} mb={"10px"} />
          <div className="row mt-4">
            <h5 style={{ color: "#1e88e5", marginBottom: "15px" }}>
              Invoice Info
            </h5>
            <div className="col-4">
              <TextField label="Invoice Number" fullWidth />
            </div>
            <div className="col-4">
              <TextField
                label="Invoice Date"
                type={"date"}
                fullWidth
                focused={true}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CreateInvoice;
