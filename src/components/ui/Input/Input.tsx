import React, { FC } from "react";

import { InputComponent } from "./styled.component";

interface Props {
  placeholder: string;
  name: string;
  type: string;
}

export const Input: FC<Props> = ({ placeholder, name, type }) => {
  return (
    <InputComponent
      placeholder={placeholder}
      required
      name={name}
      type={type}
    />
  );
};
