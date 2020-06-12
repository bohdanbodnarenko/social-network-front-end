import React from "react";

import {
  IoIosListBox,
  IoIosChatbubbles,
  IoIosLogOut,
  IoMdPeople,
} from "react-icons/io";

import "./styles.scss";

export const SideBar: React.FC = () => {
  return (
    <div className={"side-bar"}>
      <ul className={"side-bar_list"}>
        <li className={"side-bar_nav-link side-bar_nav-link__active"}>
          <IoMdPeople />
          <span className={"side-bar_nav-link_title"}>People</span>
        </li>
        <li className={"side-bar_nav-link"}>
          <IoIosListBox />
          <span className={"side-bar_nav-link_title"}>Categories</span>
        </li>
        <li className={"side-bar_nav-link"}>
          <IoIosChatbubbles />
          <span className={"side-bar_nav-link_title"}>Messages</span>
        </li>
        <li className={"side-bar_nav-link"}>
          <IoIosLogOut />
          <span className={"side-bar_nav-link_title"}>Logout</span>
        </li>
      </ul>
    </div>
  );
};
