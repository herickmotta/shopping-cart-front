import styled from "styled-components";
import colors from "../../../../../../config/color";
import typography from "../../../../../../config/typography";

export const Card = styled.li`
  width: 150px;
  height: 240px;
  border-radius: 10px;
  overflow: hidden;
  font-family: ${typography.Roboto};
`;
export const ImageBox = styled.div`
  height: 50%;
  width: 100%;
  background: ${colors.midGray};
`;
export const InfoBox = styled.div`
  height: 35%;
  width: 100%;
  background: ${colors.whiteGray};
  font-size: 16px;
  padding: 15px;
  h2 {
    font-weight: bold;
    color: ${colors.blackGray};
    margin-bottom: 5px;
  }
  p {
    color: ${colors.darkGray};
  }
`;
export const Button = styled.button`
  height: 15%;
  width: 100%;
  background: ${colors.blackGray};
  color: ${colors.white};
  font-weight: bold;
`;
