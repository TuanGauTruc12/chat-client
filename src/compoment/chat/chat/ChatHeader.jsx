import { Box, styled, Typography } from "@mui/material";
import { Search, MoreVert } from "@mui/icons-material";
import { useContext } from "react";
import { AccountContext } from "../../../context/AccountProvider";

const Header = styled(Box)`
  height: 44px;
  display: flex;
  background: #ededed;
  padding: 8px 16px;
  align-items: center;
`;

const Image = styled("img")({
  height: 40,
  width: 40,
  objectFit: "cover",
  borderRadius: "50%",
});

const Name = styled(Typography)`
  margin-left: 12px !important;
`;

const Status = styled(Typography)`
  margin-left: 12px !important;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.6);
`;

const RightContainer = styled(Box)`
  margin-left: auto;
  & > svg {
    padding: 8px;
    font-size: 24px;
    color: #000;
  }
`;

const ChatHeader = ({ person }) => {
  const { activeUsers } = useContext(AccountContext);

  return (
    <Header>
      <Image src={person.picture} alt="avatar" />
      <Box>
        <Name>{person.name}</Name>
        <Status>
          {activeUsers?.find((user) => user?.sub === person.sub)
            ? "Online"
            : "Offline"}
        </Status>
      </Box>
      <RightContainer>
        <Search />
        <MoreVert />
      </RightContainer>
    </Header>
  );
};

export default ChatHeader;
