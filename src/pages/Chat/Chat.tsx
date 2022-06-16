import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { User } from "../../components/User";
import { Wrapper, ChatBody } from "./styled.component";
import { Container } from "../../components/ui";

export const Chat = () => {
  return (
    <Wrapper>
      <Container>
        <Header />
        <ChatBody>
          <User />
        </ChatBody>
        <Footer />
      </Container>
    </Wrapper>
  );
};
