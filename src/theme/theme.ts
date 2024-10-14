import { components } from "./components";
import { tokens } from "./tokens";
import { ThemeConfig } from "antd";
console.log("tokens", tokens);

const theme: ThemeConfig = {
  token: {
    ...tokens,
  },
  components: {
    ...components,
  },
};

export default theme;
