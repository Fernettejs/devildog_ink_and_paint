import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';

import logo from "../assets/images/logo-white.png";



const SideBarNav = styled.nav`
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className="sidebar">
      <div className="left">
        <Link className="nav-icon" >
          <FaIcons.FaBars onClick={showSidebar} />
        </Link>
      </div>
      <div className="sidebar-center">
        <Link to="/">
          <img id="logo" src={logo} alt="logo" />
        </Link>
      </div>
      <SideBarNav className="sidebar-nav" sidebar={sidebar}>
        <div className="sidebar-wrap">
          <Link className="nav-icon" to="">
            <AiIcons.AiOutlineClose onClick={showSidebar} />
          </Link>
          {SidebarData.map((item, index) => {
            return <SubMenu item={item} key={index} />;
          })}
        </div>
      </SideBarNav>
    </div>
  );
};

export default Sidebar;
