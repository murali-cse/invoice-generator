import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div
        class="account-pages"
        style={{
          padding: "10%",
          backgroundColor: "#EFF0ED",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-8 col-lg-6 col-xl-5">
              <div class="card overflow-hidden">
                <div style={{ backgroundColor: "#F9BF14" }}>
                  <div class="row">
                    <div class="col-7">
                      <div class="text-primary p-4">
                        <h5 style={{ color: "black" }}>Welcome Back !</h5>
                        <p style={{ color: "black" }}>Sign in to continue</p>
                      </div>
                    </div>
                    <div class="col-5 align-self-end">
                      <img
                        src="assets/images/profile-img.png"
                        alt=""
                        class="img-fluid"
                      />
                    </div>
                  </div>
                </div>
                <div class="card-body pt-0">
                  <div class="auth-logo">
                    <Link class="auth-logo-light">
                      <div class="avatar-md profile-user-wid mb-4">
                        <span class="avatar-title rounded-circle bg-light">
                          <img
                            src="assets/images/logo-light.svg"
                            alt=""
                            class="rounded-circle"
                            height="34"
                          />
                        </span>
                      </div>
                    </Link>

                    <Link class="auth-logo-dark">
                      <div class="avatar-md profile-user-wid mb-4">
                        <span class="avatar-title rounded-circle bg-light">
                          <img
                            src={""}
                            alt=""
                            class="rounded-circle"
                            height="40"
                          />
                        </span>
                      </div>
                    </Link>
                  </div>
                  <div class="p-2">
                    <form class="form-horizontal">
                      <div class="mb-4">
                        <label for="username" class="form-label">
                          Username
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="username"
                          placeholder="Enter username"
                        />
                      </div>

                      <div class="mb-4">
                        <label class="form-label">Password</label>
                        <div class="input-group auth-pass-inputgroup">
                          <input
                            type="password"
                            class="form-control"
                            placeholder="Enter password"
                            aria-label="Password"
                            aria-describedby="password-addon"
                          />
                          <button
                            class="btn btn-light "
                            type="button"
                            id="password-addon"
                          >
                            <i class="mdi mdi-eye-outline"></i>
                          </button>
                        </div>
                      </div>

                      <div class="mt-5 mb-4 d-grid">
                        <Link to="/" class="btn btn-warning">
                          Log In
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
