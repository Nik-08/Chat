import styled from "styled-components";

export const Container = styled.div`
  max-width: 830px;
  width: 100%;
  padding: 0 15px;
  border: 2px solid #3a7d87;
  border-top: none;
  position: relative;
`;

export const HeaderContainer = styled(Container)`
  display: flex;
  align-items: center;
  border: none;
  margin: 0px auto;
  justify-content: space-between;
`;
