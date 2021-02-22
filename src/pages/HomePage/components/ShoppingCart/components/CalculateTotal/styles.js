import styled from "styled-components";
import colors from "../../../../../../config/colors";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
  width: 100%;
  height: 100%;
  & > div {
    padding: 20px;
    border-top: 1px solid ${colors.green};
    display: flex;
    justify-content: space-between;
    color: ${colors.darkerGreen};
  }
  .total {
    font-weight: bold;
    color: ${colors.blackGray};
  }
`;

export default Container;
