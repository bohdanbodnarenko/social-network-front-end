import React from "react";
import { NavLink } from "react-router-dom";

import {
  IoIosListBox,
  IoIosChatbubbles,
  IoMdPeople,
  IoLogoFreebsdDevil,
} from "react-icons/io";

import "./styles.scss";

export const SideBar: React.FC = () => {
  return (
    <div className={"side-bar"}>
      <ul className={"side-bar_list"}>
        <NavLink
          to={"/feed"}
          className={"side-bar_nav-link"}
          activeClassName={"side-bar_nav-link__active"}
        >
          <IoLogoFreebsdDevil />
          <span className={"side-bar_nav-link_title"}>Feed</span>
        </NavLink>
        <NavLink
          to={"/people"}
          className={"side-bar_nav-link"}
          activeClassName={"side-bar_nav-link__active"}
        >
          <IoMdPeople />
          <span className={"side-bar_nav-link_title"}>People</span>
        </NavLink>
        <NavLink
          className={"side-bar_nav-link"}
          to={"/categories"}
          activeClassName={"side-bar_nav-link__active"}
        >
          <IoIosListBox />
          <span className={"side-bar_nav-link_title"}>Categories</span>
        </NavLink>
        <NavLink
          to={"/messages"}
          className={"side-bar_nav-link"}
          activeClassName={"side-bar_nav-link__active"}
        >
          <IoIosChatbubbles />
          <span className={"side-bar_nav-link_title"}>Messages</span>
        </NavLink>
      </ul>
    </div>
  );
};
