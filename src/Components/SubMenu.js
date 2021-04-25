import React, { useState } from "react";
import { Link } from "react-router-dom";
// import styled from "styled-components";

const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <div>
      <Link
        className="sidebar-link"
        to={item.path}
        onClick={item.subNav && showSubnav}
      >
        <div>
          {item.icon}
          <div className="sidebar-label">{item.title}</div>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </Link>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <div className="dropdown-link" to={item.path} key={index}>
              {item.icon}
              <div className="sidebar-label">{item.title}</div>
            </div>
          );
        })}
    </div>
  );
};

export default SubMenu;
