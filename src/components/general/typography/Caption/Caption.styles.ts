import { Typography } from "antd";
import styled from "styled-components";
import { colors } from "../../../../theme/variables";

export const Paragraph = styled(Typography.Paragraph)`
  font-style: normal;
  font-weight: 300;
  font-size: 14.1155px;
  line-height: 21px;
  display: flex;
  align-items: center;
  letter-spacing: 0.02em;
  color: ${colors.secondaryText};
`;
