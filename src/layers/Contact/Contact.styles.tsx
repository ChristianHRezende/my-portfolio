import { Menu as AntMenu, Flex } from "antd";
import { FaMailBulk } from "react-icons/fa";
import styled from "styled-components";
import { colors, glow } from "../../theme/variables";

export const Menu = styled(AntMenu)`
  position: relative;
  min-width: 380px;
`;

export const Link = styled.a`
  text-decoration: none;
  color: ${colors.colorSecondary} !important;
  transition: filter 0.3s ease-in-out;
  &:hover {
    color: ${colors.colorPrimary} !important;
    animation: ${glow} 1s ease-in-out infinite;
  }
`;

export const MailIcon = styled(FaMailBulk)`
  margin-top: 5px;
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
