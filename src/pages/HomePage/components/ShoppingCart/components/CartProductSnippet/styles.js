import styled from "styled-components";
import colors from "../../../../../../config/colors";
import typography from "../../../../../../config/typography";

export const Box = styled.div`
  height: 60px;
  border: 1px solid ${colors.midGray};
  margin-bottom: 15px;
  font-family: ${typography.Roboto};
  display: flex;
  border-radius: 5px;
  overflow: hidden;
`;

export const ImageBox = styled.div`
  height: 100%;
  width: 20%;
  background: ${colors.midGray};
`;

export const InfoBox = styled.div`
  width: 70%;
  height: 100%;
  font-size: 16px;
  padding: 10px;
  h2 {
    font-weight: bold;
    color: ${colors.blackGray};
    margin-bottom: 5px;
  }
  & > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    p {
      color: ${colors.darkGray};
    }
  }
`;

export const AddOrRemoveItem = styled.div`
  height: 100%;
  width: 10%;
  display: flex;
  flex-direction: column;
  & > :first-child {
    border-bottom: 1px solid ${colors.midGray};
  }
  button {
    color: ${colors.midGray};
    border-left: 1px solid ${colors.midGray};
    height: 50%;
  }
`;
