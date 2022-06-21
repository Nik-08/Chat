import { Footer } from "../../components/Footer";
import { User, You } from "../../components/User";
import { Wrapper, ChatBody } from "./styled.component";
import { Container } from "../../components/ui";

export const Chat = () => {
  return (
    <Wrapper>
      <Container>
        <ChatBody>
          <User />
          <User />
          <User />
          <You />
        </ChatBody>
        <Footer />
      </Container>
    </Wrapper>
  );
};
