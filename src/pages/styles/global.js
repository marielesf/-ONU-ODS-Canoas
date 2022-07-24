import { createGlobalStyle } from "styled-components";

export const ConvertPxToVW = (size, width = 1440) =>
  `${(size / width) * 100}vw`;

export const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root {
      font-size: ${ConvertPxToVW(24)};

      @media (min-width: 768px) {
        font-size: ${ConvertPxToVW(18)};
      }

      @media (min-width: 1024px) {
        font-size: ${ConvertPxToVW(16)};
      }
    }
`;

export default Global;
