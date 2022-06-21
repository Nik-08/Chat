import React from "react";
import {
  YouWrapper,
  YouBody,
  UserName,
  UserText,
  UserImage,
} from "./styled.component";

import male from "../../assets/male.png";
import female from "../../assets/female.png";

export const You = () => {
  return (
    <div>
      <YouWrapper>
        <UserImage>
          {"sex" ? <img src={male} alt='' /> : <img src={female} alt='' />}
        </UserImage>
        <YouBody>
          <UserName>Name</UserName>
          <UserText>Fucking text</UserText>
        </YouBody>
      </YouWrapper>
    </div>
  );
};
