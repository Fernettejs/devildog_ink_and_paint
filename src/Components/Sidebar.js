import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';

const SideBarNav = styled.nav`
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className="sidebar">
      <Link className="nav-icon" to="">
        <FaIcons.FaBars onClick={showSidebar} />
      </Link>
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
