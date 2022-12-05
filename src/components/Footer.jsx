import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6">{new Date().getFullYear()} © QRMC.</div>
            <div className="col-sm-6">
              <div className="text-sm-end d-none d-sm-block">
                Develop by Nutz Technovation Pvt Ltd.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
