import React, { useMemo, useState } from "react";
import MUIDataTable from "mui-datatables";
import { Box, Button, Chip, Menu, MenuItem, Typography } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

const MarketingEnquiry = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [columns, setColumns] = useState([]);
  const [index, setIndex] = useState(0);
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);

  const handleClick = (event, i) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
    setIndex(i);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  const NoWrap = ({ val, newcard, display = "flex" }) => {
    return (
      <Box display={display} justifyContent="center" alignItems={"center"}>
        <Typography component={"span"} noWrap={true}>
          {val}{" "}
          {newcard ? <Chip size="small" label="new" color="success" /> : ""}
        </Typography>
      </Box>
    );
  };

  useMemo(() => {
    let tmp = [
      {
        name: "name",
        label: "name",
        options: {
          customBodyRender: (val) => {
            return (
              <NoWrap val={val.name} newcard={val.isNew} display="block" />
            );
          },
        },
      },
      {
        name: "customerid",
        label: "Customer Id",
        options: {
          customBodyRender: (val) => {
            return <NoWrap val={val} />;
          },
        },
      },
      {
        name: "enqdate",
        label: "enquiry date",
        options: {
          customBodyRender: (val) => {
            return <NoWrap val={val} />;
          },
        },
      },
      {
        name: "ordertaken",
        label: "Order Taken",
        options: {
          customBodyRender: (val) => {
            return <NoWrap val={val} />;
          },
        },
      },
      {
        name: "designation",
        label: "designation",
        options: {
          customBodyRender: (val) => {
            return <NoWrap val={val} />;
          },
        },
      },
      {
        name: "status",
        label: "status",
        options: {
          customBodyRender: (val) => {
            return (
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Chip label={val} />
              </Box>
            );
          },
        },
      },
      {
        name: "actions",
        label: "Actions",
        options: {
          customBodyRender: (i, data) => {
            return (
              <Box display="flex" justifyContent="center" alignItems="center">
                <Button
                  id={"more-button" + i}
                  aria-haspopup="true"
                  aria-controls={index === i ? `action-menu${i}` : undefined}
                  aria-expanded={index === i ? true : undefined}
                  onClick={(e) => handleClick(e, i)}
                >
                  <MoreVertIcon
                    sx={{
                      color: "black",
                    }}
                  />
                </Button>
                {index === i ? (
                  <Menu
                    id={"action-menu" + i}
                    open={open}
                    elevation={2}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    MenuListProps={{
                      "aria-labelledby": `more-button${i}`,
                    }}
                  >
                    <MenuItem>View</MenuItem>
                    <MenuItem>Approve</MenuItem>
                    <MenuItem>Reject</MenuItem>
                    <MenuItem>Edit</MenuItem>
                    <MenuItem>Delete</MenuItem>
                    <MenuItem>Download</MenuItem>
                  </Menu>
                ) : null}
              </Box>
            );
          },
        },
      },
    ];

    setColumns(tmp);

    let tmpData = [
      {
        name: { name: "Ananth Residentials", isNew: true },
        customerid: "QRMC-45879412QC",
        enqdate: "05-07-2021",
        ordertaken: "Faizel",
        designation: "Flutter Developer",
        status: "Pending",
        actions: 1,
      },
      {
        name: { name: "Ananth Residentials", isNew: false },
        customerid: "QRMC-45879412QC",
        enqdate: "05-07-2021",
        ordertaken: "Gokul",
        designation: "Flutter Developer",
        status: "Draft",
        actions: 2,
      },
    ];

    setData(tmpData);
  }, [open, anchorEl, index]);

  const options = {
    filterType: "checkbox",
    elevation: 0,
    filter: false,
    viewColumns: false,
    responsive: "simple",
  };
  return (
    <>
      <>
        <div className="main-content">
          <div className="page-content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-10">
                  <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                    <h4 className="mb-sm-0 font-size-18">Marketing Enquiry</h4>
                  </div>
                </div>
                <div className="col-2">
                  <Link to="/addenq">
                    <Button
                      fullWidth
                      variant="contained"
                      style={{
                        backgroundColor: "#f9be12",
                        color: "black",
                        boxShadow: "0 0",
                      }}
                    >
                      Add
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="row" style={{ marginTop: "20px" }}>
                <div className="col-12">
                  <MUIDataTable
                    title={""}
                    data={data}
                    columns={columns}
                    options={options}
                  />
                </div>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </>
    </>
  );
};

export default MarketingEnquiry;
