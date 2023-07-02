import { Box, styled } from "@mui/material";
import Header from "./Header";
import Search from "./Search";
import Conversations from "./Conversations";
import { useState } from "react";

const Compoment = styled(Box)`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 8px;
  flex: none;
  & > :last-child {
    height: auto;
  }
`;

const Menu = () => {
  const [search, setSearch] = useState("");
  return (
    <Compoment>
      <Header />
      <Search setSearch={setSearch} />
      <Conversations search={search} />
    </Compoment>
  );
};

export default Menu;
