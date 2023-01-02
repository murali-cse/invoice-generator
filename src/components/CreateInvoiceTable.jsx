import { Chip } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import React from "react";

const CreateInvoiceTable = ({
  tableName,
  data = [],
  isGstAvailable = false,
  gstPercent = 0,
  isDiscountAvailabe = false,
  discountPrice = 0,
  callback,
}) => {
  const sum = () => {
    if (data.length === 0) {
      return 0;
    }

    data = data.map((v) => Number(v.qty) * Number(v.price));

    let total = data.reduce((acc, item) => acc + item);

    if (isGstAvailable && isDiscountAvailabe) {
      total = total - discountPrice;
      total = total * (1 + gstPercent / 100);
    }

    return total;
  };

  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title mb-4">{tableName}</h4>
        <div className="table-responsive">
          <table className="table align-middle table-nowrap mb-0">
            <thead className="table-light">
              <tr>
                <th className="align-middle">S.No</th>
                <th className="align-middle">Description</th>
                <th className="align-middle">Price</th>
                <th className="align-middle">Quantity</th>
                <th className="align-middle">Total</th>
                <th className="align-middle">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((v, i) => {
                return (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{v.desc}</td>
                    <td>₹ {v.price}</td>
                    <td>{v.qty}</td>
                    <td>₹ {Number(v.qty) * Number(v.price)}</td>
                    <td>
                      <Chip
                        label={"Remove"}
                        style={{
                          backgroundColor: deepOrange[800],
                          color: "white",
                        }}
                        size={"small"}
                        onClick={(e) => callback(i)}
                      />
                    </td>
                  </tr>
                );
              })}
              <tr>
                <th colSpan={4} style={{ textAlign: "right" }}>
                  Total
                </th>
                <th>₹ {sum()}</th>
              </tr>
              <tr>
                <th colSpan={4} style={{ textAlign: "right" }}>
                  Total
                </th>
                <th>₹ {sum()}</th>
              </tr>
            </tbody>
          </table>
          {data.length === 0 ? (
            <h5 className="text-center m-4">No Data Found !</h5>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default CreateInvoiceTable;
