/* eslint-disable react-refresh/only-export-components */
import { render, RenderOptions } from "@testing-library/react";
import React, { ReactElement } from "react";

import { ConfigProvider } from "antd";
import { theme } from "../theme";

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return <ConfigProvider theme={theme}>{children}</ConfigProvider>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
