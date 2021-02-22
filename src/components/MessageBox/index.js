import React from "react";
import styled from "styled-components";
import colors from "../../config/colors";
import typography from "../../config/typography";

export default function MessageBox({ text, isError }) {
  return <Box isError={isError}>{text}</Box>;
}

const Box = styled.div`
  width: 100%;
  color: ${(props) => (props.isError ? colors.red : colors.green)};
  font-family: ${typography.Roboto};
`;
