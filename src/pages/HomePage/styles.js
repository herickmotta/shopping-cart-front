import styled from "styled-components";
import colors from "../../config/colors";
import typography from "../../config/typography";

export const Page = styled.body`
  background: ${colors.white};
  font-family: ${typography.Roboto};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainContent = styled.main`
  display: flex;
  flex-shrink: 0;
  width: 90%;
  justify-content: center;
  padding: 80px;
`;
