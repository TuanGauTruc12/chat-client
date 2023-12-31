import { useEffect, useState, useContext, Fragment } from "react";
import { getUsers } from "../../../service/api";
import { Box, styled, Divider } from "@mui/material";
import Conversation from "./Conversation";
import { AccountContext } from "../../../context/AccountProvider";

const Compoment = styled(Box)`
  overflow: overlay;
`;

const StyleDivider = styled(Divider)`
  background-color: #e9edef;
  opacity: 0.6;
  margin: 0 12px;
`;

const Conversations = ({ search }) => {
  const [users, setUsers] = useState([]);
  const { account, socket, setActiveUsers } = useContext(AccountContext);

  useEffect(() => {
    const fetchData = async () => {
      const reponse = await getUsers();
      const filteredData = reponse.filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase())
      );
      setUsers(filteredData);
    };

    fetchData();
  }, [search]);

  useEffect(() => {
    socket.current.emit("addUser", account);
    socket.current.on("getUsers", (users) => {
      setActiveUsers(users);
    });
  }, [account]);

  return (
    <Compoment>
      {users
        .filter((user) => {
          return user.sub !== +account.sub;
        })
        .map((user, index) => (
          <Fragment key={index}>
            <StyleDivider />
            <Conversation user={user} />
            <StyleDivider />
          </Fragment>
        ))}
    </Compoment>
  );
};

export default Conversations;
