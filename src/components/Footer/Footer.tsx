import { Input } from "../ui";
import { ChatFooter } from "./styled.component";
export const Footer = () => {
  return (
    <ChatFooter>
      <Input placeholder={"Text"} name={"text"} type={"text"} />
    </ChatFooter>
  );
};
