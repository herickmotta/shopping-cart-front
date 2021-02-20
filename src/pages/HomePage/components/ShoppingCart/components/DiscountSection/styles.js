import styled from "styled-components";
import colors from "../../../../../../config/colors";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
export const Input = styled.input`
  background: ${colors.white};
  padding: 10px;
  border-radius: 5px;
  font-size: 14px;
  border: 1px solid ${colors.midGray};
  margin-right: 20px;
`;

export const ButtonBox = styled.div`
  border-radius: 5px;
  overflow: hidden;
  & > button {
    padding: 10px;
  }
`;
