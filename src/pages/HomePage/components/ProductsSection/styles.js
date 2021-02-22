import styled from "styled-components";

const Container = styled.ul`
  width: 60%;
  min-width: 400px;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-shrink: 0;

  & > li {
    margin: 0 15px 30px 15px;
  }

  @media (max-width: 750px) {
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export default Container;
