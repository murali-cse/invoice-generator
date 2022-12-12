import { Box, Button, Menu, MenuItem } from "@mui/material";
import MUIDataTable from "mui-datatables";
import React, { useMemo, useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const MixDesign = () => {
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
        name: "grade",
        label: "grade",
      },
      {
        name: "mixcode",
        label: "Mix Code",
      },
      {
        name: "cement",
        label: "cement",
      },
      {
        name: "flyash",
        label: "flyash",
      },
      {
        name: "ggbs",
        label: "ggbs",
      },
      {
        name: "tenmm",
        label: "10mm",
      },
      {
        name: "twentymm",
        label: "20mm",
      },
      {
        name: "msand",
        label: "msand",
      },
      {
        name: "admixture",
        label: "admixture",
      },
      {
        name: "crf",
        label: "crf",
      },
      {
        name: "silliconfumes",
        label: "sillicon fumes",
      },
      {
        name: "water",
        label: "water",
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
        grade: "Grade 1",
        mixcode: "Mix1234",
        cement: "cement",
        flyash: "flyash",
        ggbs: "ggbs",
        tenmm: "10 mm",
        twentymm: "20 mm",
        msand: "M sand",
        admixture: "Ad Mixture",
        crf: "crf",
        silliconfumes: "Sillicon Fumes",
        water: "water",
      },
      {
        grade: "Grade 1",
        mixcode: "Mix1234",
        cement: "cement",
        flyash: "flyash",
        ggbs: "ggbs",
        tenmm: "10 mm",
        twentymm: "20 mm",
        msand: "M sand",
        admixture: "Ad Mixture",
        crf: "crf",
        silliconfumes: "Sillicon Fumes",
        water: "water",
      },
      {
        grade: "Grade 1",
        mixcode: "Mix1234",
        cement: "cement",
        flyash: "flyash",
        ggbs: "ggbs",
        tenmm: "10 mm",
        twentymm: "20 mm",
        msand: "M sand",
        admixture: "Ad Mixture",
        crf: "crf",
        silliconfumes: "Sillicon Fumes",
        water: "water",
      },
      {
        grade: "Grade 1",
        mixcode: "Mix1234",
        cement: "cement",
        flyash: "flyash",
        ggbs: "ggbs",
        tenmm: "10 mm",
        twentymm: "20 mm",
        msand: "M sand",
        admixture: "Ad Mixture",
        crf: "crf",
        silliconfumes: "Sillicon Fumes",
        water: "water",
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
        title={"Mix Design List"}
        data={data}
        columns={columns}
        options={options}
      />
    </>
  );
};

export default MixDesign;
