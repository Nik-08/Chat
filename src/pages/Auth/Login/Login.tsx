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
          <AuthInput
            id='loginEmail'
            placeholder={"Email"}
            name={"email"}
            type={"email"}
          />
        </AuthItem>
        <AuthItem>
          <AuthLabel htmlFor='loginPassword'>Password</AuthLabel>
          <AuthInput
            id='loginPassword'
            placeholder={"Password"}
            name={"password"}
            type={"password"}
          />
        </AuthItem>
        <Button buttonColor={"rgb(242, 137, 46)"} />
      </AuthBody>
    </AuthWrapper>
  );
};
