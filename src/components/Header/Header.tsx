import React from "react";
import { ChatHeader, HeaderUser, HeaderUserName } from "./styled.component";
import { Button, HeaderContainer } from "../ui";

export const Header = () => {
  return (
    <ChatHeader>
      <HeaderContainer>
        <HeaderUser>
          <HeaderUserName>UserName</HeaderUserName>
        </HeaderUser>
        <Button />
      </HeaderContainer>
    </ChatHeader>
  );
};
