import { Image as AntImage, Button, Flex } from "antd";
import styled from "styled-components";
import { colors, glow } from "../../theme/variables";

export const Image = styled(AntImage)`
  width: 231px;
`;

export const Container = styled(Flex)`
  padding-top: 108px;
  padding-left: 10%;
  padding-right: 10%;
`;

export const PrimaryButton = styled(Button)`
  box-sizing: border-box;
  background: linear-gradient(
      0deg,
      ${colors.colorPrimary},
      ${colors.colorPrimary}
    ),
    ${colors.colorPrimary};
  border: 1px solid ${colors.colorPrimary};
  border-radius: 50px;
  width: 240px;
  height: 64px;
  & > span {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 21.38px;
    line-height: 32px;
  }
  transition: filter 0.3s ease-in-out;
  &:hover {
    animation: ${glow} 1s ease-in-out infinite;
  }
`;

export const SecondaryButton = styled(Button)`
  box-sizing: border-box;
  border: 2px solid ${colors.colorPrimary};
  border-radius: 50px;
  width: 240px;
  height: 64px;
  transition: filter 0.3s ease-in-out;
  &:hover {
    animation: ${glow} 1s ease-in-out infinite;
  }
  & > span {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 21.38px;
    line-height: 32px;
    color: ${colors.colorPrimary};
  }
`;
