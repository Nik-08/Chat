import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ChatBody = styled.div`
  width: 100%;
  height: 85vh;
  padding: 15px;
  border: 2px solid #3a7d87;
  border-top: none;
  border-radius: 10px;
  overflow-y: auto;
`;
