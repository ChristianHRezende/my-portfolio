import { keyframes } from "styled-components";

export const glow = keyframes`
  0% {
    filter: drop-shadow(0 0 5px rgba(255, 255, 255, 1));
  }
  50% {
    filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.8));
  }
  100% {
    filter: drop-shadow(0 0 5px rgba(255, 255, 255, 1));
  }
`;
