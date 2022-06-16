import styled from "styled-components";

export const ButtonStyle = styled.button`
  display: block;
  padding: 7px 15px;
  border-radius: 10px;
  font-size: 18px;
  cursor: pointer;
  border: none;
  outline: none;
  background: rgb(242, 137, 46);
  transition: 0.3s;
  color: #fff;
  &:hover {
    background: yellow;
    transition: 0.3s;
    background: rgb(217, 119, 34);
  }
`;
