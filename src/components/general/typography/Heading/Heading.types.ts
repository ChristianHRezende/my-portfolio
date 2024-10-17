import { TitleProps } from "antd/es/typography/Title";
import { CSSProperties } from "react";

export interface StyledHeadingProps {
  theme?: "gradient" | "normal"; // only for level 2
  noDefaultMargin?: boolean;
  color?: "primary" | "secondary";
  textAlign?: CSSProperties["textAlign"];
}
export type HeadingProps = StyledHeadingProps & TitleProps;
