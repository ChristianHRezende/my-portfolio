import { Select as AntSelect } from "antd";
import styled from "styled-components";
import { glow } from "../../../theme/variables";

export const Select = styled(AntSelect)`
  transition: filter 0.3s ease-in-out;
  &:hover {
    animation: ${glow} 1s ease-in-out infinite;
  }
`;
