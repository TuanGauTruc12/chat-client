import { Box, styled } from "@mui/material";
import React, { useContext } from "react";
import { AccountContext } from "../../../context/AccountProvider";
import { Chat as MessengerIcon } from "@mui/icons-material";
import HeaderMenu from "./HeaderMenu";

const Compoment = styled(Box)`
  height: 44px;
  background: #ededed;
  padding: 8px 16px;
  display: flex;
  align-items: center;
`;

const Wrapper = styled(Box)`
  margin-left: auto;
  & > * {
    margin-left: 4px;
    padding: 8px;
    color: #000;
  };
  &:first-child{
    font-size: 22px;
    margin-right: 8px;
    margin-top: 2px;
  }
`

const Image = styled("img")({
  height: 40,
  width: 40,
  borderRadius: "50%",
});

const Header = () => {
  const { account } = useContext(AccountContext);
  return (
    <Compoment>
      <Image src={account.picture} alt="avatar" />
      <Wrapper>
        <MessengerIcon />
        <HeaderMenu />
      </Wrapper>
    </Compoment>
  );
};

export default Header;
