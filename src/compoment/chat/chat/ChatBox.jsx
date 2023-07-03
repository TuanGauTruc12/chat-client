import { Box, styled } from "@mui/material";
import ChatHeader from "./ChatHeader";
import Messages from "./Messages";
import { useContext, useEffect, useState } from "react";
import { AccountContext } from "../../../context/AccountProvider";
import { getConversation } from "../../../service/api";

const Compoment = styled(Box)`
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;

  & > * {
    flex: auto;
  }

  & > :first-of-type {
    flex: none;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: 100;
  }
`;

const ChatBox = () => {
  const { person, account } = useContext(AccountContext);
  const [conversation, setConversation] = useState({});

  useEffect(() => {
    const getConversationDetails = async () => {
      let data = await getConversation({
        senderId: account.sub,
        receiverId: person.sub,
      });

      setConversation(data);
    };
    getConversationDetails();
  }, [person.sub, account.sub]);

  return (
    <Compoment>
      <ChatHeader person={person} />
      <Messages person={person} conversation={conversation} />
    </Compoment>
  );
};

export default ChatBox;
