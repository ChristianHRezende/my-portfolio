import { ThemeConfig } from "antd";
import * as layoutComponents from "./layout";
import * as generalComponents from "./general";
import * as navigationComponents from "./navigation";

const components: ThemeConfig["components"] = {
  ...layoutComponents,
  ...generalComponents,
  ...navigationComponents,
};

export default components;
