import { FC } from "react";
import { ButtonStyle } from "./styled.component";

interface ButtonProps {
  buttonColor: string;
}

export const Button = ({ buttonColor }: ButtonProps) => {
  const login = false;
  return (
    <ButtonStyle buttonColor={buttonColor}>
      {login ? "Log Out" : "Log In"}
    </ButtonStyle>
  );
};
