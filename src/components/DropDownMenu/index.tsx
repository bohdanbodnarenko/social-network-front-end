import * as React from "react";
import { IoIosLogOut } from "react-icons/io";
import { useEffect, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import { Avatar } from "@material-ui/core";

import "./styles.scss";

type Menus = "main" | "settings";

interface ItemProps extends React.HTMLProps<HTMLDivElement> {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  goToMenu?: Menus;
  setActiveMenu?: (menu: Menus) => void;
}

interface Props {
  onClose: () => void;
  logout: () => void;
}

export const DropDownMenu: React.FC<Props> = ({ onClose, logout }) => {
  const [activeMenu, setActiveMenu] = useState<Menus>("main");
  const [menuHeight, setMenuHeight] = useState<number>(0);
  const node = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: Event) => {
      if (!node) {
        return;
      }
      const { current } = node;
      if (current && !current.contains(e.target as Node)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [onClose]);

  const calcHeight = (el: HTMLElement) => {
    setMenuHeight(el.offsetHeight);
  };

  const DropDownItem: React.FC<ItemProps> = ({
    goToMenu,
    leftIcon,
    rightIcon,
    children,
    ...props
  }) => {
    const handleClick = (e: any) => {
      if (props.onClick) {
        props.onClick(e);
      }
      if (goToMenu) {
        setActiveMenu(goToMenu);
      }
    };
    return (
      <div {...props} className={"dropdown_item"} onClick={handleClick}>
        <span className={"dropdown_item_button"}>{leftIcon}</span>
        {children}
        <span className={"dropdown_item_button__right"}>{rightIcon}</span>
      </div>
    );
  };
  return (
    <div
      className={"dropdown"}
      style={{ height: menuHeight ? menuHeight : "auto" }}
      ref={node}
    >
      <CSSTransition
        in={activeMenu === "main"}
        timeout={500}
        classNames={"menu-primary"}
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className={"menu"}>
          <DropDownItem
            leftIcon={
              <Avatar
                alt="Remy Sharp"
                // src={currentUser.imageUrl}
                sizes={"small"}
                className={"info-block_user-block_avatar"}
              >
                BB
                {/*{currentUser.imageUrl*/}
                {/*  ? undefined*/}
                {/*  : currentUser?.firstName[0] + currentUser?.lastName[0]}*/}
              </Avatar>
            }
          >
            Bohdan
          </DropDownItem>
          <DropDownItem rightIcon={<ArrowForwardIos />} goToMenu={"settings"}>
            Settings
          </DropDownItem>
          <DropDownItem onClick={logout} rightIcon={<IoIosLogOut />}>
            Log Out
          </DropDownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "settings"}
        unmountOnExit
        timeout={500}
        classNames={"menu-secondary"}
        onEnter={calcHeight}
      >
        <div className={"menu"}>
          <DropDownItem leftIcon={<ArrowBackIos />} goToMenu={"main"} />
          <DropDownItem leftIcon={<IoIosLogOut />} />
          <DropDownItem leftIcon={<IoIosLogOut />} />
          <DropDownItem leftIcon={<IoIosLogOut />} />
          <DropDownItem leftIcon={<IoIosLogOut />} />
        </div>
      </CSSTransition>
    </div>
  );
};
