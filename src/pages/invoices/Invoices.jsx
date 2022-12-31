import { Box, Modal, Typography } from "@mui/material";
import React from "react";
import CustomTable from "../../components/CustomTable";
import Footer from "../../components/Footer";
import PageTitle from "../../components/PageTitle";
import template1 from "../../assets/images/template_1.png";
import template2 from "../../assets/images/template_2.png";
import { Link } from "react-router-dom";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 10,
  p: 4,
};

const Invoices = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  document.title = "Invoices Management | Nutz Invoice";
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

  let templates = [
    {
      name: "Template 1",
      img: template1,
      category: "basic",
    },
    {
      name: "Template 2",
      img: template2,
      category: "basic",
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
            <PageTitle title={"Invoices"} pb={0} mb={"10px"} />
            <button className="btn btn-primary" onClick={handleOpen}>
              Create Invoice
            </button>

            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={modalStyle}>
                <Typography
                  id="modal-modal-title"
                  variant="h6"
                  component="h2"
                  mb={3}
                >
                  Choose a template
                </Typography>
                <div
                  className="d-flex"
                  style={{ justifyContent: "space-around" }}
                >
                  {templates.map((v, i) => {
                    return (
                      <Link to={"/invoice/" + (i + 1)} key={i}>
                        <div className="text-center">
                          <img
                            src={v.img}
                            alt="invoice template"
                            height={"100px"}
                            width={"auto"}
                            style={{
                              objectFit: "cover",
                              marginBottom: "4px",
                            }}
                          />
                          <h6 className="mt-2">{v.name}</h6>
                          <p className="m-0 p-0">{v.category}</p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </Box>
            </Modal>
          </div>
          <div className="row mt-4">
            <div className="col-lg-12">
              <CustomTable tableName={"Invoice List"} data={tableData} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Invoices;
