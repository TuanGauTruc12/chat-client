import { Box, styled } from "@mui/material";
import React, { useContext, useState } from "react";
import { AccountContext } from "../../../context/AccountProvider";
import { Chat as MessengerIcon } from "@mui/icons-material";
import HeaderMenu from "./HeaderMenu";
import InfoDrawer from "../drawer/InfoDrawer";

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
  }

  &:first-of-type {
    font-size: 22px;
    margin-right: 8px;
    margin-top: 2px;
  }
`;

const Image = styled("img")({
  height: 40,
  width: 40,
  borderRadius: "50%",
});

const Header = () => {
  const { account } = useContext(AccountContext);
  const [openDrawer, setOpenDrawer] = useState(false);
  const toggleDrawer = () => {
    setOpenDrawer(true);
  };

  return (
    <>
      <Compoment>
        <Image
          src={account.picture}
          onClick={() => toggleDrawer()}
          alt="avatar"
        />
        <Wrapper>
          <MessengerIcon />
          <HeaderMenu setOpenDrawer={setOpenDrawer} />
        </Wrapper>
      </Compoment>
      <InfoDrawer open={openDrawer} setOpen={setOpenDrawer} />
    </>
  );
};

export default Header;
