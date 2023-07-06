import { Box, styled, useForkRef } from "@mui/material";
import Footer from "./Footer";
import { useContext, useState, useEffect, useRef } from "react";
import { AccountContext } from "../../../context/AccountProvider";
import { getMessages, newMessage } from "../../../service/api";
import Message from "./Message";

const Compoment = styled(Box)`
  margin-bottom: 2px;
  overflow-y: scroll;
  background-image: url(${"https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png"});
  background-size: 100%;
  height: 100%;
  overflow-x: hidden;

  & > :last-child {
    margin-bottom: 70px;
  }

  & > :first-of-type {
    margin-top: 70px;
  }
`;

const Messages = ({ person, conversation }) => {
  const [value, setValue] = useState("");
  const { account, socket, newMessageFlag, setNewMessageFlag } = useContext(AccountContext);
  const [messages, setMessages] = useState([]);
  const [file, setFile] = useState();
  const [image, setImage] = useState("");
  const scrollRef = useRef();
  const [incomingMessage, setIncomingMessage] = useState(null);

  useEffect(() => {
    socket.current.on("getMessage", (data) => {
      setIncomingMessage({
        ...data,
        createdAt: Date.now(),
      });
    });
  }, []);

  useEffect(() => {
    const getMessagesDetail = async () => {
      let data = await getMessages(conversation._id);
      setMessages(data);
    };
    conversation && getMessagesDetail();
  }, [person._id, conversation, newMessageFlag]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ transition: "snooth" });
  }, [messages]);

  useEffect(() => {
    incomingMessage &&
      conversation?.members.includes(incomingMessage.senderId) &&
      setMessages((prev) => [...prev, incomingMessage]);
  }, [incomingMessage, conversation]);

  const sendText = async (e) => {
    const code = e.keyCode || e.which;
    if (code === 13) {
      let message = {};
      if (!file) {
        message = {
          senderId: account.sub,
          receiverId: person.sub,
          conversationId: conversation._id,
          type: "text",
          text: value,
        };
      } else {
        message = {
          senderId: account.sub,
          receiverId: person.sub,
          conversationId: conversation._id,
          type: "file",
          text: image,
        };
      }

      socket.current.emit("sendMessage", message);

      await newMessage(message);
      setFile("");
      setImage("");
      setValue("");
      setNewMessageFlag((prev) => !prev);
    }
  };

  return (
    <>
      <Compoment>
        {messages &&
          messages.map((message) => (
            <div key={message._id} ref={scrollRef}>
              <Message message={message} />
            </div>
          ))}
      </Compoment>

      <Footer
        sendText={sendText}
        setValue={setValue}
        value={value}
        file={file}
        setFile={setFile}
        setImage={setImage}
      />
    </>
  );
};

export default Messages;
