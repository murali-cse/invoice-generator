import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";

const OrderDetails = () => {
  return (
    <>
      <Box display={"flex"} justifyContent="center">
        <Box marginTop={"1rem"}>
          <Grid container spacing={2}>
            <Grid item container spacing={2}>
              <Grid item sm={"12"} xs={"12"} lg={"6"} md={"6"}>
                <Typography marginBottom={"0.5rem"}>Customer Name</Typography>
                <TextField fullWidth sx={{ marginBottom: "1rem" }} />
              </Grid>
              <Grid item sm={"12"} xs={"12"} lg={"6"} md={"6"}>
                <Typography marginBottom={"0.5rem"}>Customer ID</Typography>
                <TextField fullWidth sx={{ marginBottom: "1rem" }} />
              </Grid>
            </Grid>
            <Grid item container spacing={2}>
              <Grid item sm={"12"} xs={"12"} lg={"6"} md={"6"}>
                <Typography marginBottom={"0.5rem"}>Mobile Number</Typography>
                <TextField fullWidth sx={{ marginBottom: "1rem" }} />
              </Grid>
              <Grid item sm={"12"} xs={"12"} lg={"6"} md={"6"}>
                <Typography marginBottom={"0.5rem"}>GSTIN</Typography>
                <TextField fullWidth sx={{ marginBottom: "1rem" }} />
              </Grid>
            </Grid>
            <Grid item container spacing={2}>
              <Grid item sm={"12"} xs={"12"} lg={"6"} md={"6"}>
                <Typography marginBottom={"0.5rem"}>Enquiry Date</Typography>
                <TextField fullWidth sx={{ marginBottom: "1rem" }} />
              </Grid>
              <Grid item sm={"12"} xs={"12"} lg={"6"} md={"6"}>
                <Typography marginBottom={"0.5rem"}>Order Through</Typography>
                <TextField fullWidth sx={{ marginBottom: "1rem" }} />
              </Grid>
            </Grid>
            <Grid item container spacing={2}>
              <Grid item sm={"12"} xs={"12"} lg={"6"} md={"6"}>
                <Typography marginBottom={"0.5rem"}>Order Id</Typography>
                <TextField fullWidth sx={{ marginBottom: "1rem" }} />
              </Grid>
            </Grid>
          </Grid>
          <Box textAlign={"center"} mt="20px">
            <Button
              variant="contained"
              disableElevation
              size="large"
              sx={{
                backgroundColor: "#f9be12",
                marginBottom: "50px",
                width: "50%",
                color: "black",
                "&:hover": { backgroundColor: "#edb10e" },
              }}
            >
              <Typography sx={{ fontWeight: "600" }}>Continue</Typography>
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default OrderDetails;
