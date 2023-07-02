import { Box, styled } from "@mui/material";
import ChatHeader from "./ChatHeader";
import Messages from "./Messages";
import { useContext } from "react";
import { AccountContext } from "../../../context/AccountProvider";

const Compoment = styled(Box)`
  height: 100%;
  display: flex;
  flex-direction: column;
  & > :first-child{
    flex: none;
  }
  & > :last-child{
    flex: auto;
  }
`

const ChatBox = () => {

  const {person} = useContext(AccountContext);

  return (
    <Compoment>
      <ChatHeader person={person} />
      <Messages person={person}/>
    </Compoment>
  );
};

export default ChatBox;
