import styled from "styled-components";
import colors from "../../../../config/color";

export const Container = styled.header`
  height: 80px;
  width: 100%;
  background: ${colors.lighterGray};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  color: ${colors.blackGray};
  font-weight: bold;
  h1 {
    font-size: 2rem;
  }
`;

export const UserBox = styled.div`
  display: flex;
  align-items: center;
  p {
    margin-left: 10px;
  }
`;
export const Avatar = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background: ${colors.darkGray};
`;
