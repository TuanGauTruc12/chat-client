import { Box, styled } from "@mui/material";
import Footer from "./Footer";
import { useContext, useState, useEffect } from "react";
import { AccountContext } from "../../../context/AccountProvider";
import { getMessages, newMessage } from "../../../service/api";
import Message from "./Message";

const Compoment = styled(Box)`
  margin-bottom: 2px;
  overflow-y: scroll;
  background-image: url(${"https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png"});
  background-size: 100%;
  height: 100%;

  & > :last-child {
    margin-bottom: 70px;
  }

  & > :first-of-type {
    margin-top: 70px;
  }
`;

const Messages = ({ person, conversation }) => {
  const [value, setValue] = useState("");
  const { account } = useContext(AccountContext);
  const [messages, setMessages] = useState([]);
  const [file, setFile] = useState();
  const [newMessageFlag, setNewMessageFlag] = useState(false);

  useEffect(() => {
    const getMessagesDetail = async () => {
      let data = await getMessages(conversation._id);
      setMessages(data);
    };
    conversation && getMessagesDetail();
  }, [person._id, conversation, newMessageFlag]);

  const sendText = async (e) => {
    const code = e.keyCode || e.which;
    if (code === 13) {
      let message = {
        senderId: account.sub,
        receiverId: person.sub,
        conversationId: conversation._id,
        type: "text",
        text: value,
      };

      await newMessage(message);

      setValue("");
      setNewMessageFlag((prev) => !prev);
    }
  };

  return (
    <>
      <Compoment>
        {messages &&
          messages.map((message) => (
            <Message key={message._id} message={message} />
          ))}
      </Compoment>

      <Footer
        sendText={sendText}
        setValue={setValue}
        value={value}
        file={file}
        setFile={setFile}
      />
    </>
  );
};

export default Messages;
