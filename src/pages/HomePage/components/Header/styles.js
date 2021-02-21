import styled from "styled-components";
import colors from "../../../../config/colors";

export const Container = styled.header`
  height: 80px;
  width: 100%;
  padding: 40px 0;
  background: ${colors.lighterGray};
  color: ${colors.blackGray};
  font-weight: bold;
  display: flex;
  justify-content: center;
  h1 {
    font-size: 2rem;
  }
`;
export const Content = styled.div`
  height: 100%;
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
