import styled from "styled-components";
import { colors, glow } from "../../../theme/variables";
import { Card as AntCard } from "antd";

export const Card = styled(AntCard)`
  width: 390px;
  background-color: ${colors.card};
  border-color: transparent;
  transition: filter 0.3s ease-in-out;

  &:hover {
    border-color: ${colors.colorSecondary};
    animation: ${glow} 1s ease-in-out infinite;
  }
`;

export const Meta = styled(AntCard.Meta)`
  & > div > div {
    color: ${colors.colorPrimary} !important;
  }
`;
