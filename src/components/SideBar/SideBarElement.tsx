import React from "react";

interface Props {
  icon: React.ComponentType;
  iconColor: string;
  text: string;
}

export const SideBarElement: React.FC<Props & React.HTMLAttributes<HTMLDivElement>> = ({
  icon: Icon,
  iconColor,
  text,
  ...props
}) => {
  return (
    <div {...props} className={"side-bar_element"}>
      <div
        style={{ backgroundColor: iconColor }}
        className={"side-bar_element_icon-block"}
      >
        <Icon />
      </div>
      <span className={"side-bar_element_title"}>{text}</span>
    </div>
  );
};
