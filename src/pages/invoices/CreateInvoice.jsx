import {
  TextField,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Button,
} from "@mui/material";
import axios from "axios";
import moment from "moment/moment";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../components/Footer";
import PageTitle from "../../components/PageTitle";
import ReactLoading from "react-loading";
import CreateInvoiceTable from "../../components/CreateInvoiceTable";
import { useForm } from "react-hook-form";

const CreateInvoice = () => {
  const params = useParams();
  const { register, handleSubmit } = useForm();
  const [district, setDistrict] = useState();
  const [state, setState] = useState();
  const [loading, setLoading] = useState(false);
  const [pincode, setPincode] = useState();
  const [gstAvailabe, setGstAvailabe] = useState(false);
  const [data, setData] = useState([]);

  const today = () => {
    var now = moment(new Date()).format("YYYY-MM-DD").toString();
    return now;
  };

  const handleGST = (e) => {
    setGstAvailabe(e.target.checked);
  };

  const getStateAndDistrict = (e) => {
    let pincode = e.target.value;
    setPincode(e.target.value);
    if (pincode.length === 6) {
      setLoading(true);
      setPincode(pincode);
      axios
        .get("https://api.postalpincode.in/pincode/" + pincode)
        .then((v) => {
          setLoading(false);
          let data = v.data[0].PostOffice[0];
          setDistrict(data.District);
          setState(data.State);
        })
        .catch((err) => {
          setLoading(false);
        });
    }
  };

  const handleInvoiceData = (d) => {
    setData([...data, d]);
  };

  const removeData = (d) => {
    setData(data.filter((data, i) => i !== d));
  };

  return (
    <div className="main-content">
      <div className="page-content">
        <div className="container-fluid">
          <PageTitle title={"Create Invoice"} pb={0} mb={"10px"} />
          {loading ? (
            <div
              className="d-flex"
              style={{
                justifyContent: "center",
                alignItems: "center",
                height: "70vh",
              }}
            >
              <ReactLoading type="spin" color="black" />
            </div>
          ) : (
            <>
              {
                // * invoice info
              }
              <div className="row mt-4">
                <h5 style={{ color: "#1e88e5", marginBottom: "15px" }}>
                  Invoice Info
                </h5>
                <div className="col-6">
                  <TextField label="Invoice Number" fullWidth={true} />
                </div>
                <div className="col-6">
                  <TextField
                    label="Invoice Date"
                    type={"date"}
                    fullWidth
                    focused={true}
                    value={today()}
                  />
                </div>
              </div>
              {
                // * billing info
              }
              <div className="row mt-4">
                <h5 style={{ color: "#1e88e5", marginBottom: "15px" }}>
                  Billing Info
                </h5>
                <div className="col-lg-4 col-sm-12 col-xs-12 col-md-4 mt-3">
                  <TextField
                    label="Customer or Company Name"
                    fullWidth={true}
                  />
                </div>
                <div className="col-lg-4 col-sm-12 col-xs-12 col-md-4 mt-3">
                  <TextField
                    label="Phone Number"
                    type={"number"}
                    fullWidth={true}
                  />
                </div>
                <div className="col-lg-4 col-sm-12 col-xs-12 col-md-4 mt-3">
                  <TextField label="Email" type={"email"} fullWidth={true} />
                </div>
                <div className="col-lg-4 col-sm-12 col-xs-12 col-md-4 mt-3">
                  <TextField
                    label="Pincode"
                    type={"number"}
                    fullWidth={true}
                    onChange={getStateAndDistrict}
                    value={pincode}
                  />
                </div>
                <div className="col-lg-4 col-sm-12 col-xs-12 col-md-4 mt-3">
                  <TextField
                    label="State"
                    type={"text"}
                    InputProps={{
                      readOnly: true,
                    }}
                    fullWidth={true}
                    value={state}
                  />
                </div>
                <div className="col-lg-4 col-sm-12 col-xs-12 col-md-4 mt-3">
                  <TextField
                    label="District"
                    type={"text"}
                    fullWidth={true}
                    InputProps={{
                      readOnly: true,
                    }}
                    value={district}
                  />
                </div>
                <div className="col-12 mt-3">
                  <TextField label={"Address"} fullWidth />
                </div>
                <div className="col-12 mt-3">
                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox onChange={handleGST} />}
                      label="Is this GST bill ?"
                      onChange={handleGST}
                    />
                  </FormGroup>
                </div>
                {gstAvailabe ? (
                  <>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 mt-3">
                      <TextField label={"Customer GST No"} fullWidth={true} />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 mt-3">
                      <TextField
                        label={"GST Percentage (%)"}
                        fullWidth={true}
                      />
                    </div>
                  </>
                ) : null}
              </div>
              {
                // * payment info
              }
              <div className="row mt-4">
                <h5 style={{ color: "#1e88e5", marginBottom: "15px" }}>
                  Payment Info
                </h5>
                <div className="col-lg-4 col-xs-12 col-sm-12 col-md-6 mt-3">
                  <TextField label={"Bank Name"} fullWidth={true} />
                </div>
                <div className="col-lg-4 col-xs-12 col-sm-12 col-md-6 mt-3">
                  <TextField label={"Account Name"} fullWidth={true} />
                </div>
                <div className="col-lg-4 col-xs-12 col-sm-12 col-md-6 mt-3">
                  <TextField label={"Account No"} fullWidth={true} />
                </div>
              </div>
              {
                // * discount info
              }
              <div className="row mt-4">
                <h5 style={{ color: "#1e88e5", marginBottom: "15px" }}>
                  Payment Info
                </h5>
              </div>
              {
                // * invoice data
              }
              <div className="row mt-4">
                <h5 style={{ color: "#1e88e5", marginBottom: "15px" }}>
                  Invoice Data
                </h5>
                <form onSubmit={handleSubmit(handleInvoiceData)}>
                  <div className="row">
                    <div className="col-lg-5 col-xs-12 col-sm-12 col-md-6 mt-3">
                      <TextField
                        label={"Description"}
                        fullWidth={true}
                        {...register("desc")}
                      />
                    </div>
                    <div className="col-lg-3 col-xs-12 col-sm-12 col-md-6 mt-3">
                      <TextField
                        label={"Qty"}
                        type="number"
                        fullWidth={true}
                        {...register("qty")}
                      />
                    </div>
                    <div className="col-lg-3 col-xs-12 col-sm-12 col-md-6 mt-3">
                      <TextField
                        label={"Price"}
                        type="number"
                        fullWidth={true}
                        {...register("price")}
                      />
                    </div>
                    <div
                      className="col-lg-1 col-xs-12 col-sm-12 col-md-6 d-flex mt-3"
                      style={{ alignItems: "center" }}
                    >
                      <Button
                        variant="contained"
                        size="large"
                        disableElevation={true}
                        type="submit"
                      >
                        Add
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
              {
                // * table view
              }
              <div className="row mt-4">
                <CreateInvoiceTable data={data} callback={removeData} />
              </div>
            </>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CreateInvoice;
