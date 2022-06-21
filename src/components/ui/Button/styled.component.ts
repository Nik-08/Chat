import styled from "styled-components";

type Props = {
  buttonColor: string;
};

export const ButtonStyle = styled.button<Props>`
  display: block;
  padding: 7px 15px;
  border-radius: 10px;
  font-size: 18px;
  cursor: pointer;
  border: none;
  outline: none;
  background: ${(props) => props.buttonColor};
  transition: 0.3s;
  color: #fff;
  &:hover {
    background: yellow;
    transition: 0.3s;
    background: rgb(217, 119, 34);
  }
`;
