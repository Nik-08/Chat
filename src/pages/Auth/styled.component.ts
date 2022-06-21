import styled from "styled-components";

export const AuthWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  width: 100%;
  height: 100%;
  transform: translate(-50%, -50%);
`;

export const AuthBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 700px;
  border: 2px solid #3a7d87;
  padding: 15px;
  border-radius: 10px;
`;

export const AuthTitle = styled.h1`
  text-align: center;
  font-size: 25px;
  margin-bottom: 15px;
  font-weight: 400;
`;

export const AuthItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px;
`;
export const AuthLabel = styled.label`
  display: block;
  margin-bottom: 5px;
`;
