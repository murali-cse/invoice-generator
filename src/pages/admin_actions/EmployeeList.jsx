import React, { useMemo, useState } from "react";
import MUIDataTable from "mui-datatables";
import { Box, Button, Chip, Menu, MenuItem, Typography } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const EmployeeList = () => {
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

  const NoWrap = ({ val }) => {
    return (
      <Box display={"flex"} justifyContent="center" alignItems={"center"}>
        <Typography component={"span"} noWrap={true}>
          {val}
        </Typography>
      </Box>
    );
  };

  useMemo(() => {
    let tmp = [
      {
        name: "name",
        label: "name",
      },
      {
        name: "employeeid",
        label: "Employee Id",
        options: {
          customBodyRender: (val) => {
            return <NoWrap val={val} />;
          },
        },
      },
      {
        name: "doj",
        label: "date of joining",
        options: {
          customBodyRender: (val) => {
            return <NoWrap val={val} />;
          },
        },
      },
      {
        name: "dept",
        label: "department",
      },
      {
        name: "designation",
        label: "designation",
      },
      {
        name: "reportingto",
        label: "reporting to",
        options: {
          customBodyRender: (val) => {
            return <NoWrap val={val} />;
          },
        },
      },
      {
        name: "dob",
        label: "date of birth",
        options: {
          customBodyRender: (val) => {
            return <NoWrap val={val} />;
          },
        },
      },
      {
        name: "gender",
        label: "gender",
        options: {
          customBodyRender: (val) => {
            return <NoWrap val={val} />;
          },
        },
      },
      {
        name: "mothertongue",
        label: "mother tongue",
        options: {
          customBodyRender: (val) => {
            return <NoWrap val={val} />;
          },
        },
      },
      {
        name: "maritalstatus",
        label: "marital status",
        options: {
          customBodyRender: (val) => {
            return <NoWrap val={val} />;
          },
        },
      },
      {
        name: "familymember",
        label: "family member",
        options: {
          customBodyRender: (val) => {
            return <NoWrap val={val} />;
          },
        },
      },
      {
        name: "corsaddress",
        label: "correspondence address",
        options: {
          customBodyRender: (val) => {
            return <NoWrap val={val} />;
          },
        },
      },
      {
        name: "education",
        label: "education",
        options: {
          customBodyRender: (val) => {
            return <NoWrap val={val} />;
          },
        },
      },
      {
        name: "certificates",
        label: "certificates",
        options: {
          customBodyRender: (val) => {
            return <NoWrap val={val} />;
          },
        },
      },
      {
        name: "trainingundergone",
        label: "training undergone",
        options: {
          customBodyRender: (val) => {
            return <NoWrap val={val} />;
          },
        },
      },
      {
        name: "passportno",
        label: "passport no",
        options: {
          customBodyRender: (val) => {
            return <NoWrap val={val} />;
          },
        },
      },
      {
        name: "driverlicenseno",
        label: "driver license no",
        options: {
          customBodyRender: (val) => {
            return <NoWrap val={val} />;
          },
        },
      },
      {
        name: "dlvalidupto",
        label: "dl valid upto",
        options: {
          customBodyRender: (val) => {
            return <NoWrap val={val} />;
          },
        },
      },
      {
        name: "workexp",
        label: "work experience",
        options: {
          customBodyRender: (val) => {
            return <NoWrap val={val} />;
          },
        },
      },
      {
        name: "previousemployername",
        label: "previous employer's name",
        options: {
          customBodyRender: (val) => {
            return <NoWrap val={val} />;
          },
        },
      },
      {
        name: "previousemployeradd",
        label: "previous employer add",
        options: {
          customBodyRender: (val) => {
            return <NoWrap val={val} />;
          },
        },
      },
      {
        name: "duration",
        label: "duration",
        options: {
          customBodyRender: (val) => {
            return <NoWrap val={val} />;
          },
        },
      },
      {
        name: "positionheld",
        label: "position held",
        options: {
          customBodyRender: (val) => {
            return <NoWrap val={val} />;
          },
        },
      },
      {
        name: "totalworkexp",
        label: "total work experience",
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
              <Box
                display={"flex"}
                justifyContent="center"
                alignItems={"center"}
              >
                <Chip
                  label={val}
                  sx={{
                    textTransform: "capitalize",
                    backgroundColor: val === "active" ? "#3CB611" : "#CFAA2C",
                    color: "white",
                  }}
                />
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
        name: "Murali",
        employeeid: "123",
        doj: "05-07-2021",
        dept: "Developer",
        designation: "Flutter Developer",
        reportingto: "Gowtham AK",
        dob: "30-11-1997",
        gender: "Male",
        mothertongue: "Tamil",
        maritalstatus: "Married",
        familymember: "-",
        corsaddress: "jeevanagar, chitode, erode",
        education: "Bachelor of Engineering",
        certificates: "none",
        trainingundergone: "none",
        passportno: "none",
        driverlicenseno: "none",
        dlvalidupto: "none",
        workexp: "1 year",
        previousemployername: "White Devils Lab",
        previousemployeradd: "none",
        duration: "6 months",
        positionheld: "Android Developer",
        totalworkexp: "2 years",
        status: "active",
        actions: 1,
      },
      {
        name: "Murali",
        employeeid: "123",
        doj: "05-07-2021",
        dept: "Developer",
        designation: "Flutter Developer",
        reportingto: "Gowtham AK",
        dob: "30-11-1997",
        gender: "Male",
        mothertongue: "Tamil",
        maritalstatus: "Married",
        familymember: "none",
        corsaddress: "jeevanagar, chitode, erode",
        education: "Bachelor of Engineering",
        certificates: "none",
        trainingundergone: "none",
        passportno: "none",
        driverlicenseno: "none",
        dlvalidupto: "none",
        workexp: "1 year",
        previousemployername: "White Devils Lab",
        previousemployeradd: "none",
        duration: "6 months",
        positionheld: "Android Developer",
        totalworkexp: "2 years",
        status: "relieved",
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
        title={"Employee List"}
        data={data}
        columns={columns}
        options={options}
      />
    </>
  );
};

export default EmployeeList;
