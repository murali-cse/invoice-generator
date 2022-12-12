import React, { useMemo, useState } from "react";
import MUIDataTable from "mui-datatables";
import { Box, Button, Menu, MenuItem, Typography } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const Suppliers = () => {
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
        name: "name",
        label: "name",
        options: {
          customHeadReader: ({ index, ...column }) => {
            return (
              <Box
                display={"flex"}
                justifyContent="center"
                alignItems={"center"}
              >
                <Typography noWrap={true} component="span">
                  {" "}
                  {column.label}
                </Typography>
              </Box>
            );
          },
        },
      },
      {
        name: "vendorcode",
        label: "vendor code",
      },
      {
        name: "firm",
        label: "firm",
      },
      {
        name: "address",
        label: "address",
      },
      {
        name: "supply",
        label: "supply",
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
                    <MenuItem>View</MenuItem>
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
        name: "nutz",
        vendorcode: "nutz-1234",
        firm: "Private",
        address: "Jeevanagar, Chitode, Erode",
        supply: "Software",
        actions: 1,
      },
      {
        name: "nutz",
        vendorcode: "nutz-1234",
        firm: "Private",
        address: "Jeevanagar, Chitode, Erode",
        supply: "Software",
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
        title={"Suppliers List"}
        data={data}
        columns={columns}
        options={options}
      />
    </>
  );
};

export default Suppliers;
