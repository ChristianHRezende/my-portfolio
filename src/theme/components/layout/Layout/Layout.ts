import { LayoutToken } from "antd/es/layout/style";
import { colors as colorsVars } from "../../../variables";

const background = colorsVars.background;
const Layout: Partial<LayoutToken> = {
  headerBg: background,
  bodyBg: background,
  footerBg: background,
};

export default Layout;
