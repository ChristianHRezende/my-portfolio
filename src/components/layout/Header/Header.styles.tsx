import styled from "styled-components";
import { Layout as AntLayout } from "antd";
import { colors } from "../../../theme/variables";

export const Header = styled(AntLayout.Header)`
  background-color: ${colors.backgroundGray};
  min-height: 82.18px;
  display: flex;
`;
