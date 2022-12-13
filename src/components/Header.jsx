import React from "react";
import qrmcLogo from "../assets/vectors/qrmc_logo.svg";

const Header = () => {
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

              <a href="#" className="logo logo-light">
                <span className="logo-sm">
                  <img src="assets/images/logo-light.svg" alt="" height="22" />
                </span>
                <span className="logo-lg">
                  <img src="assets/images/logo-light.png" alt="" height="19" />
                </span>
              </a>
            </div>
          </div>

          <div className="d-flex">
            <div className="dropdown d-inline-block d-lg-none ms-2">
              <button
                type="button"
                className="btn header-item noti-icon waves-effect"
                id="page-header-search-dropdown"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="mdi mdi-magnify"></i>
              </button>
              <div
                className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                aria-labelledby="page-header-search-dropdown"
              >
                <form className="p-3">
                  <div className="form-group m-0">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search ..."
                        aria-label="Recipient's username"
                      />
                      <div className="input-group-append">
                        <button className="btn btn-primary" type="submit">
                          <i className="mdi mdi-magnify"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            {
              // * Language selection dropdown
              /* <div className="dropdown d-inline-block">
              <button
                type="button"
                className="btn header-item waves-effect"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img
                  id="header-lang-img"
                  src="assets/images/flags/us.jpg"
                  alt="Header Language"
                  height="16"
                />
              </button>
              <div className="dropdown-menu dropdown-menu-end">
                <a
                  href="#;"
                  className="dropdown-item notify-item language"
                  data-lang="en"
                >
                  <img
                    src="assets/images/flags/us.jpg"
                    alt="user-image"
                    className="me-1"
                    height="12"
                  />{" "}
                  <span className="align-middle">English</span>
                </a>

                <a
                  href="#;"
                  className="dropdown-item notify-item language"
                  data-lang="sp"
                >
                  <img
                    src="assets/images/flags/spain.jpg"
                    alt="user-image"
                    className="me-1"
                    height="12"
                  />{" "}
                  <span className="align-middle">Spanish</span>
                </a>

                <a
                  href="#;"
                  className="dropdown-item notify-item language"
                  data-lang="gr"
                >
                  <img
                    src="assets/images/flags/germany.jpg"
                    alt="user-image"
                    className="me-1"
                    height="12"
                  />{" "}
                  <span className="align-middle">German</span>
                </a>

                <a
                  href="#;"
                  className="dropdown-item notify-item language"
                  data-lang="it"
                >
                  <img
                    src="assets/images/flags/italy.jpg"
                    alt="user-image"
                    className="me-1"
                    height="12"
                  />{" "}
                  <span className="align-middle">Italian</span>
                </a>

                <a
                  href="#;"
                  className="dropdown-item notify-item language"
                  data-lang="ru"
                >
                  <img
                    src="assets/images/flags/russia.jpg"
                    alt="user-image"
                    className="me-1"
                    height="12"
                  />{" "}
                  <span className="align-middle">Russian</span>
                </a>
              </div>
            </div> */
            }

            {
              // * Other dropdown
              /* <div className="dropdown d-none d-lg-inline-block ms-1">
              <button
                type="button"
                className="btn header-item noti-icon waves-effect"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="bx bx-customize"></i>
              </button>
              <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end">
                <div className="px-lg-2">
                  <div className="row g-0">
                    <div className="col">
                      <a className="dropdown-icon-item" href="#">
                        <img
                          src="assets/images/brands/github.png"
                          alt="Github"
                        />
                        <span>GitHub</span>
                      </a>
                    </div>
                    <div className="col">
                      <a className="dropdown-icon-item" href="#">
                        <img
                          src="assets/images/brands/bitbucket.png"
                          alt="bitbucket"
                        />
                        <span>Bitbucket</span>
                      </a>
                    </div>
                    <div className="col">
                      <a className="dropdown-icon-item" href="#">
                        <img
                          src="assets/images/brands/dribbble.png"
                          alt="dribbble"
                        />
                        <span>Dribbble</span>
                      </a>
                    </div>
                  </div>

                  <div className="row g-0">
                    <div className="col">
                      <a className="dropdown-icon-item" href="#">
                        <img
                          src="assets/images/brands/dropbox.png"
                          alt="dropbox"
                        />
                        <span>Dropbox</span>
                      </a>
                    </div>
                    <div className="col">
                      <a className="dropdown-icon-item" href="#">
                        <img
                          src="assets/images/brands/mail_chimp.png"
                          alt="mail_chimp"
                        />
                        <span>Mail Chimp</span>
                      </a>
                    </div>
                    <div className="col">
                      <a className="dropdown-icon-item" href="#">
                        <img src="assets/images/brands/slack.png" alt="slack" />
                        <span>Slack</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div> */
            }

            {
              // * Notification dropdown
              /* <div className="dropdown d-inline-block">
              <button
                type="button"
                className="btn header-item noti-icon waves-effect"
                id="page-header-notifications-dropdown"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="bx bx-bell bx-tada"></i>
                <span className="badge bg-danger rounded-pill">3</span>
              </button>
              <div
                className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                aria-labelledby="page-header-notifications-dropdown"
              >
                <div className="p-3">
                  <div className="row align-items-center">
                    <div className="col">
                      <h6 className="m-0" key="t-notifications">
                        {" "}
                        Notifications{" "}
                      </h6>
                    </div>
                    <div className="col-auto">
                      <a href="#!" className="small" key="t-view-all">
                        {" "}
                        View All
                      </a>
                    </div>
                  </div>
                </div>
                <div data-simplebar style={{ maxHeight: "230px" }}>
                  <a href="#" className="text-reset notification-item">
                    <div className="d-flex">
                      <div className="avatar-xs me-3">
                        <span className="avatar-title bg-primary rounded-circle font-size-16">
                          <i className="bx bx-cart"></i>
                        </span>
                      </div>
                      <div className="flex-grow-1">
                        <h6 className="mb-1" key="t-your-order">
                          Your order is placed
                        </h6>
                        <div className="font-size-12 text-muted">
                          <p className="mb-1" key="t-grammer">
                            If several languages coalesce the grammar
                          </p>
                          <p className="mb-0">
                            <i className="mdi mdi-clock-outline"></i>{" "}
                            <span key="t-min-ago">3 min ago</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a href="#" className="text-reset notification-item">
                    <div className="d-flex">
                      <img
                        src="assets/images/users/avatar-3.jpg"
                        className="me-3 rounded-circle avatar-xs"
                        alt="user-pic"
                      />
                      <div className="flex-grow-1">
                        <h6 className="mb-1">James Lemire</h6>
                        <div className="font-size-12 text-muted">
                          <p className="mb-1" key="t-simplified">
                            It will seem like simplified English.
                          </p>
                          <p className="mb-0">
                            <i className="mdi mdi-clock-outline"></i>{" "}
                            <span key="t-hours-ago">1 hours ago</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a href="#" className="text-reset notification-item">
                    <div className="d-flex">
                      <div className="avatar-xs me-3">
                        <span className="avatar-title bg-success rounded-circle font-size-16">
                          <i className="bx bx-badge-check"></i>
                        </span>
                      </div>
                      <div className="flex-grow-1">
                        <h6 className="mb-1" key="t-shipped">
                          Your item is shipped
                        </h6>
                        <div className="font-size-12 text-muted">
                          <p className="mb-1" key="t-grammer">
                            If several languages coalesce the grammar
                          </p>
                          <p className="mb-0">
                            <i className="mdi mdi-clock-outline"></i>{" "}
                            <span key="t-min-ago">3 min ago</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>

                  <a href="#" className="text-reset notification-item">
                    <div className="d-flex">
                      <img
                        src="assets/images/users/avatar-4.jpg"
                        className="me-3 rounded-circle avatar-xs"
                        alt="user-pic"
                      />
                      <div className="flex-grow-1">
                        <h6 className="mb-1">Salena Layfield</h6>
                        <div className="font-size-12 text-muted">
                          <p className="mb-1" key="t-occidental">
                            As a skeptical Cambridge friend of mine occidental.
                          </p>
                          <p className="mb-0">
                            <i className="mdi mdi-clock-outline"></i>{" "}
                            <span key="t-hours-ago">1 hours ago</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="p-2 border-top d-grid">
                  <a
                    className="btn btn-sm btn-link font-size-14 text-center"
                    href="#"
                  >
                    <i className="mdi mdi-arrow-right-circle me-1"></i>{" "}
                    <span key="t-view-more">View More..</span>
                  </a>
                </div>
              </div>
            </div> */
            }

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
                  src="assets/images/users/avatar-1.jpg"
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
                <a className="dropdown-item" href="#">
                  <i className="bx bx-wallet font-size-16 align-middle me-1"></i>{" "}
                  <span key="t-my-wallet">My Wallet</span>
                </a>
                <a className="dropdown-item d-block" href="#">
                  <span className="badge bg-success float-end">11</span>
                  <i className="bx bx-wrench font-size-16 align-middle me-1"></i>{" "}
                  <span key="t-settings">Settings</span>
                </a>
                <a className="dropdown-item" href="#">
                  <i className="bx bx-lock-open font-size-16 align-middle me-1"></i>{" "}
                  <span key="t-lock-screen">Lock screen</span>
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item text-danger" href="#">
                  <i className="bx bx-power-off font-size-16 align-middle me-1 text-danger"></i>{" "}
                  <span key="t-logout">Logout</span>
                </a>
              </div>
            </div>

            {/* <div className="dropdown d-inline-block">
              <button
                type="button"
                className="btn header-item noti-icon right-bar-toggle waves-effect"
              >
                <i className="bx bx-cog bx-spin"></i>
              </button>
            </div> */}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
