import styled from "styled-components";
import { Layout as AntLayout } from "antd";
import { breakpoints, colors } from "../../../theme/variables";

export const Footer = styled(AntLayout.Footer)`
  background-color: ${colors.backgroundGrayLight};
  min-height: 82.18px;
  display: flex;
  padding-left: 324.66px;
  padding-right: 324.66px;
  margin-top: 107px;

  @media (max-width: ${breakpoints.medium}px) {
    padding-left: 162px;
    padding-right: 162px;
  }

  @media (max-width: ${breakpoints.small}px) {
    padding-left: 16px;
    padding-right: 16px;
  }
`;
