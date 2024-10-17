import { ComponentToken } from "antd/es/select/style";
import { colors } from "../../../variables";
import { GlobalToken } from "antd";

const Select: Partial<ComponentToken | GlobalToken> = {
  selectorBg: colors.backgroundGrayLight,
  multipleItemBg: "red",
  optionActiveBg: colors.backgroundGrayLight,
  optionSelectedColor: colors.background,
  colorText: colors.colorPrimary,
  colorBgElevated: colors.backgroundGrayLight,
};

export default Select;
