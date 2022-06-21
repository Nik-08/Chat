import styled from "styled-components";

export const UserWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: start;
  margin-bottom: 10px;
`;

export const YouWrapper = styled(UserWrapper)`
  justify-content: end;
  flex-direction: row-reverse;
`;

export const UserBody = styled.div`
  background: rgba(58, 125, 135, 0.5);
  padding: 5px;
  border-radius: 8px 8px 8px 0px;
  font-size: 16px;
  line-height: 20px;
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 5px;
`;

export const YouBody = styled(UserBody)`
  text-align: right;
  margin-right: 5px;
  border-radius: 8px 8px 0px 8px;
`;

export const UserName = styled.div`
  color: #ffeb54;
`;

export const UserText = styled.div`
  color: #ffeb54;
`;

export const UserImage = styled.div`
  max-width: 35px;
  width: 100%;
  display: flex;
  align-items: end;
`;
