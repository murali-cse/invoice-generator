import React from "react";

const PageTitle = ({ title, pb = null, mb = null }) => {
  return (
    <div className="row">
      <div className="col-10">
        <div
          className="page-title-box d-sm-flex align-items-center justify-content-between"
          style={{ paddingBottom: pb }}
        >
          <h4 className="mb-sm-0 font-size-18">{title}</h4>
        </div>
      </div>
    </div>
  );
};

export default PageTitle;
