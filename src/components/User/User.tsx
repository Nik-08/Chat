import {
  UserWrapper,
  UserBody,
  UserName,
  UserText,
  UserImage,
} from "./styled.component";

import male from "../../assets/male.png";
import female from "../../assets/female.png";

export const User = () => {
  return (
    <UserWrapper>
      <UserImage>
        {"sex" ? <img src={male} alt='' /> : <img src={female} alt='' />}
      </UserImage>
      <UserBody>
        <UserName>Name</UserName>
        <UserText>Fucking text</UserText>
      </UserBody>
    </UserWrapper>
  );
};
