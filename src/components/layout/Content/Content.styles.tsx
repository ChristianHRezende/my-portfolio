import styled from "styled-components";
import { Layout as AntLayout } from "antd";
import { breakpoints, colors } from "../../../theme/variables";

export const Content = styled(AntLayout.Content)`
  background-color: ${colors.background};
  min-height: 82.18px;
  display: flex;
  flex-direction: column;
  padding-left: 324.66px;
  padding-right: 324.66px;

  @media (max-width: ${breakpoints.medium}px) {
    padding-left: 162px;
    padding-right: 162px;
  }

  @media (max-width: ${breakpoints.small}px) {
    padding-left: 16px;
    padding-right: 16px;
  }
`;
