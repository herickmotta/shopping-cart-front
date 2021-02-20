import styled from "styled-components";
import colors from "../../../../config/colors";

export const Container = styled.div`
  width: 340px;
  background: ${colors.lighterGray};
  height: 510px;
  border-radius: 10px;
  overflow: hidden;
`;
export const CartBox = styled.div`
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
export const CalculateTotal = styled.div``;
