import styled from "styled-components";
import colors from "../../config/colors";
import typography from "../../config/typography";

export const Page = styled.body`
  background: ${colors.white};
  font-family: ${typography.Roboto};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainContent = styled.main`
  display: flex;
  width: 90%;
  padding: 80px 0;
`;
