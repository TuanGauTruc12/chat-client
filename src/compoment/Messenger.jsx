import LoginDialog from "./account/LoginDialog";
import { AppBar, Box, Toolbar, styled } from "@mui/material";
import { useContext } from "react";
import { AccountContext } from "../context/AccountProvider";
import ChatDialog from "./chat/ChatDialog";


const LoginHeader = styled(AppBar)`
  height: 220px;
  background-color: #00bfa5;
  box-shadow: none;
`;

const Header = styled(AppBar)`
  height: 125px;
  background-color: #00a884;
  box-shadow: none;
`;

const Compoment = styled(Box)`
  height: 100vh;
  background: #dcdcdc;
`;

const Messenger = () => {
  const { account } = useContext(AccountContext);
  return (
    <Compoment>
      {account ? (
        <>
          <Header>
            <Toolbar></Toolbar>
          </Header>
          <ChatDialog />
        </>
      ) : (
        <>
          <LoginHeader>
            <Toolbar></Toolbar>
          </LoginHeader>
          <LoginDialog />
        </>
      )}
    </Compoment>
  );
};

export default Messenger;
