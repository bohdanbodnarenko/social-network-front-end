import React from "react";

import {
  IoMdPeople,
  IoIosList,
  IoIosChatbubbles,
  IoIosLogOut,
} from "react-icons/io";

import "./styles.scss";

import { SideBarElement } from "./SideBarElement";
import * as colors from "../../shared/constants/colors";

export const SideBar: React.FC = () => {
  return (
    <div className={"side-bar"}>
      <div className={"side-bar_logo-wrapper"}>
        <span className={"side-bar_logo"}>PEO</span>
      </div>

      <div className={"side-bar_middle-block"}>
        <SideBarElement
          icon={IoMdPeople}
          iconColor={colors.LIGHT_BLUE}
          text={"People"}
        />{" "}
        <SideBarElement
          icon={IoIosList}
          iconColor={colors.YELLOW}
          text={"Categories"}
        />{" "}
        <SideBarElement
          icon={IoIosChatbubbles}
          iconColor={colors.PURPLE}
          text={"Messages"}
        />
      </div>

      <SideBarElement
        icon={IoIosLogOut}
        iconColor={colors.RED}
        text={"Log Out"}
        style={{
          borderTop: `1.2px ${colors.GREY} solid`,
          position: "absolute",
          bottom: "5%",
          width: "100%",
        }}
      />
    </div>
  );
};
