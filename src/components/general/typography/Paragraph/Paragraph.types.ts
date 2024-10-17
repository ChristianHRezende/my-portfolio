import { ParagraphProps as AntParagraphProps } from "antd/es/typography/Paragraph";
import { CSSProperties } from "styled-components";

export interface ParagraphProps extends AntParagraphProps {
  textAlign?: CSSProperties["textAlign"];
  verticalAlign?: CSSProperties["verticalAlign"];
  fullWidth?: boolean;
}
