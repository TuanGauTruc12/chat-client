import { Box, Typography, styled } from "@mui/material";
import { emptychatImage } from "../../../constants/data";

const Compoment = styled(Box)`
  background: #f8f9fa;
  text-align: center;
  height: 100%;
`;

const Container = styled(Box)`
  padding: 0 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Image = styled("img")({
  width: 400,
  marginTop: 100,
});

const Title = styled(Typography)`
  font-size: 32px;
  margin: 25px 0 10px 0;
  font-family: inherit;
  font-weight: 300;
  color: #41525d;
`;

const SubTitle = styled(Typography)`
  font-size: 14px;
  color: #667781;
  font-weight: 400;
  font-family: inherit;
  :last-child {
    border-bottom: 2px solid #41525d;
    padding-bottom: 20px;
    width: fit-content;
    margin: 0 auto;
  }
`;

const EmptyChat = () => {
  return (
    <Compoment>
      <Container>
        <Image src={emptychatImage} alt="empty-chat" />
        <Title>WhatsApp Web</Title>
        <SubTitle>
          Now send and receive messages without keeping your phone online.
        </SubTitle>
        <SubTitle>
          Use WhatsApp on up to 4 linked devices and 1 phone at the same time.
        </SubTitle>
      </Container>
    </Compoment>
  );
};

export default EmptyChat;
