import React from "react";

import {
  AuthWrapper,
  AuthItem,
  AuthBody,
  AuthTitle,
  AuthLabel,
} from "../styled.component";

import { AuthInput } from "../../../components/ui/Input/styled.component";
import { Button } from "../../../components/ui";

export const Login = () => {
  return (
    <AuthWrapper>
      <AuthBody>
        <AuthTitle>LogIn</AuthTitle>
        <AuthItem>
          <AuthLabel htmlFor='loginEmail'>Email</AuthLabel>
          <AuthInput id='loginEmail' />
        </AuthItem>
        <AuthItem>
          <AuthLabel htmlFor='loginPassword'>Password</AuthLabel>
          <AuthInput id='loginPassword' />
        </AuthItem>
        <Button buttonColor={"rgb(242, 137, 46)"} />
      </AuthBody>
    </AuthWrapper>
  );
};
