import { Layout as AntLayout, Menu as AntMenu } from "antd";
import styled from "styled-components";
import { colors } from "../../theme/variables";

export const Header = styled(AntLayout.Header)`
  background-color: ${colors.backgroundGray};
  min-height: 82.18px;
  display: flex;
`;

export const Menu = styled(AntMenu)`
  position: relative;
  min-width: 380px;
`;
