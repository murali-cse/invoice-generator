import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const selected = { backgroundColor: "#F9BF14", color: "black" };
  const selectedIconColor = { color: "black" };
  const unselectedIconColor = { color: "white" };

  var routes = [];

  routes = [
    {
      icon: "bx bx-user",
      text: "Admin Actions",
      selected: location.pathname === "/" ? true : false,
      path: "/",
    },
    {
      icon: "bx bx-line-chart",
      text: "Marketing Enquiry",
      selected: location.pathname === "/marketenq" ? true : false,
      path: "/marketenq",
    },
    {
      icon: "bx bx-book",
      text: "Order Book",
      selected: false,
    },
    {
      icon: "bx bx-wrench",
      text: "Quality Control",
      selected: false,
    },
    {
      icon: "bx bx-cog",
      text: "Operations",
      selected: false,
    },
    {
      icon: "bx bx-rupee",
      text: "Purchase",
      selected: false,
    },
    {
      icon: "bx bxs-factory",
      text: "Production",
      selected: false,
    },
    {
      icon: "bx bxs-truck",
      text: "Fleet Management",
      selected: false,
    },
    {
      icon: "bx bx-store",
      text: "Stores",
      selected: false,
    },
    {
      icon: "bx bxs-user-detail",
      text: "Accounts",
      selected: false,
    },
    {
      icon: "bx bx-group",
      text: "Human Resources",
      selected: false,
    },
    {
      icon: "bx bx-calculator",
      text: "Rate Calc",
      selected: false,
    },
    {
      icon: "bx bxs-report",
      text: "MIS Reports",
      selected: false,
    },
  ];

  return (
    <>
      <div className="vertical-menu" style={{ backgroundColor: "#6C6E69" }}>
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
