import React from "react";

const CustomTable = ({ tableName, data = [] }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title mb-4">{tableName}</h4>
        <div className="table-responsive">
          <table className="table align-middle table-nowrap mb-0">
            <thead className="table-light">
              <tr>
                <th className="align-middle">S.No</th>
                <th className="align-middle">Order ID</th>
                <th className="align-middle">Billing Name</th>
                <th className="align-middle">Date</th>
                <th className="align-middle">Total</th>
                <th className="align-middle">View Details</th>
              </tr>
            </thead>
            <tbody>
              {data.map((v, i) => {
                return (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>
                      <a href="" className="text-body fw-bold">
                        {v.orderId}
                      </a>
                    </td>
                    <td>{v.billingName}</td>
                    <td>{v.date}</td>
                    <td>{v.total}</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-primary btn-sm btn-rounded waves-effect waves-light"
                      >
                        View Details
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          {data.length == 0 ? (
            <h5 className="text-center m-4">No Data Found !</h5>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default CustomTable;
