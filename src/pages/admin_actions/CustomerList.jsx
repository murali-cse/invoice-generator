import React, { useMemo, useState } from "react";
import MUIDataTable from "mui-datatables";
import { Box, Button, Menu, MenuItem, Typography } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const CustomerList = () => {
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

  useMemo(() => {
    let tmp = [
      {
        name: "customerid",
        label: "ID",
        options: {
          customBodyRender: (val) => {
            return <Typography sx={{ textAlign: "center" }}>{val}</Typography>;
          },
        },
      },
      {
        name: "customername",
        label: "Name",
        options: {
          customBodyRender: (val) => {
            return <Typography sx={{ textAlign: "center" }}>{val}</Typography>;
          },
        },
      },
      {
        name: "customerledger",
        label: "Ledger",
        options: {
          customBodyRender: (val) => {
            return <Typography sx={{ textAlign: "center" }}>{val}</Typography>;
          },
        },
      },
      {
        name: "accountancycode",
        label: "Accountancy Code",
        options: {
          customBodyRender: (val) => {
            return <Typography sx={{ textAlign: "center" }}>{val}</Typography>;
          },
        },
      },
      {
        name: "plccode",
        label: "PLC Code",
        options: {
          customBodyRender: (val) => {
            return <Typography sx={{ textAlign: "center" }}>{val}</Typography>;
          },
        },
      },
      {
        name: "gstin",
        label: "gstin",
        options: {
          customBodyRender: (val) => {
            return <Typography sx={{ textAlign: "center" }}>{val}</Typography>;
          },
        },
      },
      {
        name: "tcsenabled",
        label: "tcs enabled",
        options: {
          customBodyRender: (val) => {
            return <Typography sx={{ textAlign: "center" }}>{val}</Typography>;
          },
        },
      },
      {
        name: "address",
        label: "Address",
        options: {
          customBodyRender: (val) => {
            return <Typography sx={{ textAlign: "center" }}>{val}</Typography>;
          },
        },
      },
      {
        name: "city",
        label: "city",
        options: {
          customBodyRender: (val) => {
            return <Typography sx={{ textAlign: "center" }}>{val}</Typography>;
          },
        },
      },
      {
        name: "state",
        label: "state",
        options: {
          customBodyRender: (val) => {
            return <Typography sx={{ textAlign: "center" }}>{val}</Typography>;
          },
        },
      },
      {
        name: "pincode",
        label: "pincode",
        options: {
          customBodyRender: (val) => {
            return (
              <Typography sx={{ textAlign: "center" }} noWrap={true}>
                {val}
              </Typography>
            );
          },
        },
      },
      {
        name: "phone",
        label: "phone",
        options: {
          customBodyRender: (val) => {
            return (
              <Typography sx={{ textAlign: "center" }} noWrap={true}>
                {val}
              </Typography>
            );
          },
        },
      },
      {
        name: "mobile",
        label: "mobile",
        options: {
          customBodyRender: (val) => {
            return <Typography sx={{ textAlign: "center" }}>{val}</Typography>;
          },
        },
      },
      {
        name: "email",
        label: "email",
        options: {
          customBodyRender: (val) => {
            return <Typography sx={{ textAlign: "center" }}>{val}</Typography>;
          },
        },
      },
      {
        name: "actions",
        label: "Actions",
        options: {
          customBodyRender: (i, data) => {
            console.log(data + "");
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
                    <MenuItem>Edit</MenuItem>
                    <MenuItem>Delete</MenuItem>
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
        customerid: "QRMC2457",
        customername: "Gowtham AK",
        customerledger: "100012",
        accountancycode: "ACC1234567890",
        plccode: "plc12345",
        gstin: "09876543211234567890",
        tcsenabled: "true",
        address: "Jeevanagar, Chitode, Erode",
        city: "Erode",
        state: "Tamilnadu",
        pincode: "638102",
        phone: "0424-987654",
        mobile: "9876543210",
        email: "murali@nutz.in",
        actions: 1,
      },
      {
        customerid: "QRMC2457",
        customername: "Gowtham AK",
        customerledger: "100012",
        accountancycode: "ACC1234567890",
        plccode: "plc12345",
        gstin: "09876543211234567890",
        tcsenabled: "true",
        address: "Jeevanagar, Chitode, Erode",
        city: "Erode",
        state: "Tamilnadu",
        pincode: "638102",
        phone: "0424-987654",
        mobile: "9876543210",
        email: "murali@nutz.in",
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
  };
  return (
    <>
      <MUIDataTable
        title={"Customer List"}
        data={data}
        columns={columns}
        options={options}
      />
    </>
  );
};

export default CustomerList;
