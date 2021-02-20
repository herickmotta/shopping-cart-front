import styled from "styled-components";

const Container = styled.ul`
  width: 60%;
  display: flex;
  flex-wrap: wrap;
  flex-shrink: 0;

  & > li {
    margin-right: 30px;
    margin-bottom: 30px;
  }
`;

export default Container;
