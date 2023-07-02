import { Dialog, Box, styled } from "@mui/material";
import Menu from "./menu/Menu";
import ChatBox from "./chat/ChatBox";
import { useContext } from "react";
import { AccountContext } from "../../context/AccountProvider";
import EmptyChat from './chat/EmptyChat';

const dialogStyle = {
  height: "100%",
  minWidth: "95vw !important",
  maxHeight: "100%",
  margin: "0 !important",
  boxShadow: "none",
  overflow: "hidden",
  borderRadius: "8px",
};

const Compoment = styled(Box)`
  display: flex;
  gap: 12px;
  height: 100%;
`;

const LeftCompoment = styled(Box)`
  min-width: 25%;
  flex: none;
`;

const RightCompoment = styled(Box)`
  flex: auto;
`;

const ChatDialog = () => {
  const { person } = useContext(AccountContext);

  return (
    <Dialog
      open={true}
      PaperProps={{ sx: dialogStyle }}
      hideBackdrop={true}
      maxWidth="md"
    >
      <Compoment>
        <LeftCompoment>
          <Menu />
        </LeftCompoment>
        <RightCompoment>
          {Object.keys(person).length ? <ChatBox/> : <EmptyChat />}
        </RightCompoment>
      </Compoment>
    </Dialog>
  );
};

export default ChatDialog;
