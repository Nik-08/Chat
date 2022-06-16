import React from "react";
import { ChatHeader } from "./styled.component";
import { Button } from "../ui";

export const Header = () => {
  return (
    <ChatHeader>
      <div className='header__user'>
        <div className='header__user-image'></div>
        <div className='header__user-name'>UserName</div>
      </div>
      <Button />
    </ChatHeader>
  );
};
