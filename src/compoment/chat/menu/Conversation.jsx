import { Box, Typography, styled } from "@mui/material";
import { AccountContext } from "../../../context/AccountProvider";
import { useContext, useEffect, useState } from "react";
import { setConversation, getConversation } from "../../../service/api";
import { formatDate } from "../../../utils/common-utils";

const Compoment = styled(Box)`
  display: flex;
  height: 45px;
  padding: 13px 0;
  cursor: pointer;
`;

const Image = styled("img")({
  width: 50,
  height: 50,
  borderRadius: "50%",
  padding: "0 14px",
  objectFit: "cover",
});

const Container = styled(Box)`
  display: flex;
`;

const Timestamp = styled(Typography)`
  font-size: 12px;
  margin-left: auto;
  color: #000;
  margin-right: 12px;
`;

const Text = styled(Typography)`
  color: #000; 
  margin-right: 20px;
  max-width: 200px;
  flex: auto;
  font-size: 16px;
  line-height: 1.2;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 4px;
`;

const Conversation = ({ user }) => {
  const { setPerson, account, newMessageFlag } = useContext(AccountContext);
  const [message, setMessage] = useState({});

  useEffect(() => {
    const getConversationDetails = async () => {
      const data = await getConversation({
        senderId: account.sub,
        receiverId: user.sub,
      });
      setMessage({ text: data?.message, timestamp: data?.updatedAt });
    };
    getConversationDetails();
  }, [newMessageFlag]);

  const getUser = async () => {
    setPerson(user);
    await setConversation({ senderId: account.sub, receiverId: user.sub });
  };

  return (
    <Compoment onClick={() => getUser()}>
      <Box>
        <Image src={user.picture} alt="avatar" />
      </Box>
      <Box style={{ width: "100%" }}>
        <Container>
          <Typography>{user.name}</Typography>
          {message?.text && (
            <Timestamp>{formatDate(message?.timestamp)}</Timestamp>
          )}
        </Container>
        <Box>
          <Text>
            {message?.text?.includes("localhost") ? "media" : message.text}
          </Text>
        </Box>
      </Box>
    </Compoment>
  );
};

export default Conversation;
