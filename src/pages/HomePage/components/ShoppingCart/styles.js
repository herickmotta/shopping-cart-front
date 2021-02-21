import styled from "styled-components";
import colors from "../../../../config/colors";

export const Container = styled.div`
  width: 340px;
`;
export const CartBox = styled.div`
  overflow: hidden;
  width: 100%;
  height: 510px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  background: ${colors.lighterGray};
  h1 {
    font-size: 1.4rem;
    font-weight: bold;
    background: ${colors.midGray};
    color: ${colors.blackGray};
    width: 100%;
    text-align: center;
    padding: 15px 0;
  }
`;
export const CartProducts = styled.ul`
  padding: 20px;
  width: 100%;
`;
export const CalculateTotal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
  width: 100%;
  height: 100%;
  & > div {
    padding: 20px;
    border-top: 1px solid ${colors.midGray};
    display: flex;
    justify-content: space-between;
    color: ${colors.darkGray};
  }
  .total {
    font-weight: bold;
    color: ${colors.blackGray};
  }
`;

export const ButtonBox = styled.div`
  width: 100%;
  height: 60px;
  border-radius: 10px;
  overflow: hidden;
  margin: 20px 0;
  button {
    font-size: 18px;
  }
`;
