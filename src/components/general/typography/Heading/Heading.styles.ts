import { Typography } from "antd";
import styled, { css } from "styled-components";
import { colors } from "../../../../theme/variables";
import { StyledHeadingProps } from "./Heading.types";

const DefaultHeading = styled(Typography.Title).withConfig({
  shouldForwardProp: (prop) =>
    prop !== "textAlign" && prop !== "noDefaultMargin",
})<StyledHeadingProps>`
  font-family: "Poppins";
  color: ${({ color = "secondary" }) =>
    color === "primary"
      ? `${colors.colorPrimary} !important`
      : `${colors.colorSecondary} !important`};
`;

export const H1 = styled(DefaultHeading)`
  font-style: normal;
  font-weight: 800;
  font-size: 55px;
  line-height: 63px;
  text-align: ${({ textAlign }) => textAlign ?? "center"};
  color: ${colors.colorPrimary};
  & > span {
    background: linear-gradient(45deg, #ff8660, #9a33ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const H2 = styled(DefaultHeading)<StyledHeadingProps>`
  font-style: normal;
  font-weight: 800;
  font-size: 35px;
  line-height: 36px;
  text-transform: uppercase;
  text-align: ${({ textAlign }) => textAlign ?? "center"};
  color: ${colors.secondaryText};
  ${({ theme }) =>
    theme === "gradient" &&
    css`
      background: linear-gradient(90deg, #5badff, #1373d1);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    `}
`;

export const H3 = styled(DefaultHeading)<StyledHeadingProps>`
  font-style: normal;
  font-weight: 700;
  font-size: 21.7405px;
  line-height: 33px;
  display: flex;
  align-items: center;
  text-align: ${({ textAlign }) => textAlign ?? "center"};
  color: ${colors.colorPrimary};
  margin: ${(props) => props.noDefaultMargin && "0 !important"};
`;

export const H4 = styled(DefaultHeading)`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: 0.12em;
  text-align: ${({ textAlign }) => textAlign ?? "center"};
  color: ${colors.secondaryText};
`;
