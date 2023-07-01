import { Box, Typography, styled, Divider } from "@mui/material";
import { emptychatImage } from "../../../constants/data";

const Compoment = styled(Box)`
  background: #f8f9fa;
  text-align: center;
  height: 100%;
`;

const Container = styled(Box)`
  padding: 0 200px;
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
`;

const StyledDivider = styled(Divider)`
  opacity: 0.4;
  border-width: 2px;
  margin-top: 15px;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
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
      <StyledDivider />
    </Compoment>
  );
};

export default EmptyChat;
