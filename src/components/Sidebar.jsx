import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const selected = { backgroundColor: "#F9BF14", color: "black" };
  const selectedIconColor = { color: "black" };
  const unselectedIconColor = { color: "white" };
  var routes = [];

  <i class="bx bx-refresh"></i>;
  routes = [
    {
      icon: "bx bx-user",
      text: "Admin Actions",
      selected: location.pathname === "/" ? true : false,
    },
    {
      icon: "bx bx-line-chart",
      text: "Marketing Enquiry",
      selected: false,
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
  useEffect(() => {
    console.log(location.pathname);
  }, []);

  return (
    <>
      <div className="vertical-menu" style={{ backgroundColor: "#6C6E69" }}>
        <div data-simplebar className="h-100">
          <div id="sidebar-menu">
            <ul className="metismenu list-unstyled" id="side-menu">
              {routes.map((v) => {
                return (
                  <li style={v.selected ? selected : null}>
                    <a href="/" className="waves-effect">
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
                    </a>
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
