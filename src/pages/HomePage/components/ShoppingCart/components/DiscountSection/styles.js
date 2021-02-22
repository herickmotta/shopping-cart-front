import styled from "styled-components";
import colors from "../../../../../../config/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  & > div {
    display: flex;
    margin-bottom: 20px;
  }
`;
export const Input = styled.input`
  background: ${colors.white};
  padding: 10px;
  border-radius: 5px;
  font-size: 14px;
  border: 1px solid ${colors.darkerGreen};
  margin-right: 20px;
`;

export const ButtonBox = styled.div`
  border-radius: 5px;
  overflow: hidden;
  width: 100%;
  height: 40px;
  & > button {
    padding: 10px;
  }
`;
