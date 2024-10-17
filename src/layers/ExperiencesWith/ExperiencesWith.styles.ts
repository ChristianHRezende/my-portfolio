import { Flex } from "antd";
import styled, { keyframes } from "styled-components";
import { glow } from "../../theme/variables";

export const Container = styled(Flex)`
  padding-top: 108px;
  padding-left: 10%;
  padding-right: 10%;
`;

export const IconsContainer = styled(Flex)`
  & > * {
    background: linear-gradient(90deg, #5badff, #1373d1);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: filter 0.3s ease-in-out;
    &:hover {
      animation: ${glow} 1s ease-in-out infinite;
    }
  }
`;
