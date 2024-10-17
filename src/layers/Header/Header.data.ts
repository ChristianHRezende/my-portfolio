import { MenuProps } from "antd";
import { SECTIONS } from "../../constants";
import { goToSectionId } from "../../utils";

export const items: MenuProps["items"] = [
  {
    key: 0,
    label: "Home",
    onClick: () => goToSectionId(SECTIONS.WELCOME),
  },
  {
    key: 1,
    label: "Projects",
    onClick: () => goToSectionId(SECTIONS.PROJECTS),
  },
  {
    key: 2,
    label: "Experience",
    onClick: () => goToSectionId(SECTIONS.EXPERIENCE),
  },
  {
    key: 3,
    label: "Contact",
    onClick: () => goToSectionId(SECTIONS.CONTACT),
  },
];
