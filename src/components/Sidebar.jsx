import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const selected = { backgroundColor: "#F9BF14", color: "black" };
  const selectedIconColor = { color: "black" };
  const unselectedIconColor = { color: "white" };

  const pathname = location.pathname;

  var routes = [
    {
      icon: "bx bx-grid-alt",
      text: "Dashboard",
      selected: location.pathname === "/" ? true : false,
      path: "/",
    },
    {
      icon: "bx bx-group",
      text: "Customers",
      selected: location.pathname === "/customers" ? true : false,
      path: "/customers",
    },
    {
      icon: "bx bx-file-blank",
      text: "Invoices",
      selected: pathname.includes("/invoice") ? true : false,
      path: "/invoices",
    },
    {
      icon: "bx bx-receipt",
      text: "Templates",
      selected: location.pathname === "/templates" ? true : false,
      path: "/templates",
    },
  ];

  return (
    <>
      <div className="vertical-menu" style={{ backgroundColor: "#2A3043" }}>
        <div data-simplebar className="h-100">
          <div id="sidebar-menu">
            <ul className="metismenu list-unstyled" id="side-menu">
              {routes.map((v) => {
                return (
                  <li style={v.selected ? selected : null} key={v.text}>
                    <Link to={v.path ? v.path : "/"} className="waves-effect">
                      <i
                        className={v.icon}
                        style={
                          v.selected ? selectedIconColor : unselectedIconColor
                        }
                      ></i>
                      <span
                        style={
                          v.selected ? selectedIconColor : unselectedIconColor
                        }
                      >
                        {v.text}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
