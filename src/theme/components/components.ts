import { ThemeConfig } from "antd";
import * as layoutComponents from "./layout";
import * as generalComponents from "./general";

const components: ThemeConfig["components"] = {
  ...layoutComponents,
  ...generalComponents,
};

export default components;
