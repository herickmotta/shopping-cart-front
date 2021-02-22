import styled from "styled-components";
import colors from "../../../../config/colors";

export const Container = styled.div`
  width: 340px;
`;
export const CartBox = styled.div`
  overflow: hidden;
  width: 100%;
  min-height: 510px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  background: ${colors.waterGreen};
  h1 {
    font-size: 1.4rem;
    font-weight: bold;
    background: ${colors.green};
    color: ${colors.white};
    width: 100%;
    text-align: center;
    padding: 15px 0;
  }
`;
export const CartProducts = styled.ul`
  padding: 20px;
  width: 100%;
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

export const EmptyCartBox = styled.div`
  width: 100%;
  height: 80px;
`;
