import { Typography } from "antd";
import styled, { css } from "styled-components";
import { colors } from "../../../../theme/variables";
import { ParagraphProps } from "./Paragraph.types";

export const Paragraph = styled(Typography.Paragraph).withConfig({
  shouldForwardProp: (prop) =>
    prop !== "fullWidth" && prop !== "textAlign" && prop !== "verticalAlign",
})<ParagraphProps>`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 27px;
  text-align: ${({ textAlign }) => textAlign ?? "center"};
  letter-spacing: 0.02em;
  color: ${colors.secondaryText};
  vertical-align: ${({ verticalAlign }) => verticalAlign ?? "middle"};
  ${(fullWidth) =>
    fullWidth &&
    css`
      width: 100%;
    `}
`;
