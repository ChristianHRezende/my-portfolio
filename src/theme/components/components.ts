import { ThemeConfig } from "antd";
import * as dataDisplayComponents from "./dataDisplay";
import * as dataEntryComponents from "./dataEntry";
import * as layoutComponents from "./layout";
import * as generalComponents from "./general";
import * as navigationComponents from "./navigation";

const components: ThemeConfig["components"] = {
  ...dataDisplayComponents,
  ...dataEntryComponents,
  ...layoutComponents,
  ...generalComponents,
  ...navigationComponents,
};

export default components;
