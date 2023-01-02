import React from "react";
import qrmcLogo from "../assets/vectors/qrmc_logo.svg";

const Header = () => {
  const handleSidebar = () => {
    var body = document.getElementsByTagName("body")[0];
    if (body.getAttribute("class") == "sidebar-enable") {
      body.setAttribute("class", "");
    } else {
      body.setAttribute("class", "sidebar-enable");
    }
  };

  return (
    <>
      <header id="page-topbar">
        <div className="navbar-header">
          <div className="d-flex">
            <div className="navbar-brand-box">
              <a href="/" className="logo logo-dark">
                <span className="logo-sm">
                  <img src={qrmcLogo} alt="" height="50" />
                </span>
                <span className="logo-lg">
                  <img src={qrmcLogo} alt="" height="50" />
                </span>
              </a>

              <a href="/" className="logo logo-light">
                <span className="logo-sm">
                  <img src="assets/images/logo-light.svg" alt="" height="22" />
                </span>
                <span className="logo-lg">
                  <img src="assets/images/logo-light.png" alt="" height="19" />
                </span>
              </a>
            </div>
            <button
              type="button"
              class="btn btn-sm px-3 font-size-16 header-item waves-effect"
              id="vertical-menu-btn"
              onClick={handleSidebar}
            >
              <i class="fa fa-fw fa-bars"></i>
            </button>
          </div>

          <div className="d-flex">
            <div className="dropdown d-inline-block">
              <button
                type="button"
                className="btn header-item waves-effect"
                id="page-header-user-dropdown"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img
                  className="rounded-circle header-profile-user"
                  src={
                    process.env.PUBLIC_URL + "/assets/images/users/avatar-1.jpg"
                  }
                  alt="Header Avatar"
                />
                <span className="d-none d-xl-inline-block ms-1" key="t-henry">
                  Gowtham
                </span>
                <i className="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
              </button>
              <div className="dropdown-menu dropdown-menu-end">
                <a className="dropdown-item" href="#">
                  <i className="bx bx-user font-size-16 align-middle me-1"></i>{" "}
                  <span key="t-profile">Profile</span>
                </a>
                <a className="dropdown-item d-block" href="#">
                  {/* <span className="badge bg-success float-end">11</span> */}
                  <i className="bx bx-wrench font-size-16 align-middle me-1"></i>{" "}
                  <span key="t-settings">Settings</span>
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item text-danger" href="#">
                  <i className="bx bx-power-off font-size-16 align-middle me-1 text-danger"></i>{" "}
                  <span key="t-logout">Logout</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
