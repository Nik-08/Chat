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

export const Registration = () => {
  return (
    <AuthWrapper>
      <AuthBody>
        <AuthTitle>Registration</AuthTitle>
        <AuthItem>
          <AuthLabel htmlFor='registrationEmail'>Email</AuthLabel>
          <AuthInput
            id='registrationEmail'
            placeholder={"Email"}
            name={"email"}
            type={"email"}
          />
        </AuthItem>
        <AuthItem>
          <AuthLabel htmlFor='FirstName'>First Name</AuthLabel>
          <AuthInput
            id='LastName'
            placeholder={"First Name"}
            name={"name"}
            type={"text"}
          />
        </AuthItem>
        <AuthItem>
          <AuthLabel htmlFor='LastName'>Last Name</AuthLabel>
          <AuthInput
            id='LastName'
            placeholder={"Last Name"}
            name={"lastName"}
            type={"text"}
          />
        </AuthItem>
        <AuthItem>
          <AuthLabel htmlFor='registrationPassword'>Password</AuthLabel>
          <AuthInput
            id='registrationPassword'
            placeholder={"Password"}
            name={"password"}
            type={"password"}
          />
        </AuthItem>
        <Button buttonColor={"rgb(242, 137, 46)"}></Button>
      </AuthBody>
    </AuthWrapper>
  );
};
