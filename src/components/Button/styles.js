import styled from "styled-components";
import colors from "../../config/colors";
import typography from "../../config/typography";

const Container = styled.button`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "100%"};
  background: ${colors.blackGray};
  font-family: ${typography.Roboto};
  font-weight: bold;
  font-size: 16px;
  color: ${colors.white};
`;

export default Container;
