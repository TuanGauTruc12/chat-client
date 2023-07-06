import { useContext } from "react";
import { Box, Typography, styled } from "@mui/material";
import { downloadMedia, formatDate } from "../../../utils/common-utils";
import { AccountContext } from "../../../context/AccountProvider";
import GetAppIcon from "@mui/icons-material/GetApp";
import { iconPDF } from "../../../constants/data";

const Own = styled(Box)`
  background: #dcf8c6;
  max-width: 60%;
  margin-left: auto;
  padding: 8px;
  width: fit-content;
  display: flex;
  border-radius: 10px;
  margin-top: 8px;
  margin-right: 12px;
  word-break: break-word;
`;

const Wrapper = styled(Box)`
  background: #fff;
  max-width: 60%;
  width: fit-content;
  display: flex;
  border-radius: 10px;
  padding: 8px;
  margin-top: 8px;
  margin-left: 12px;
  word-break: break-word;
`;

const Text = styled(Typography)`
  font-size: 14px;
  padding: 0 25px 0 5px;
`;

const Time = styled(Typography)`
  font-size: 10px;
  color: #919191;
  margin-top: 6px;
  word-break: keep-all;
`;

const FileStyle = styled(Box)`
  position: relative;
  max-height: 100px;
  padding-bottom: 12px;
  & img {
    width: 100px;
    height: 100px;
    object-fit: cover;
  }
  & > div {
    display: flex;
    p {
      flex: auto;
      max-width: 100%;
      height: 80px;
      margin: 0 auto;
      font-size: 16px;
      line-height: 1.2;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  & > :last-child {
    position: absolute;
    bottom: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2px;

    & > svg {
      cursor: pointer;
      font-weight: 500;
      color: black;
      &:hover{
        opacity: .6;
      }
    }
  }
`;

const Message = ({ message }) => {
  const { account } = useContext(AccountContext);
  return (
    <>
      {account.sub === message.senderId ? (
        <Own>
          {message.type === "file" ? (
            <ImageMessage message={message} />
          ) : (
            <TextMessage message={message} />
          )}
        </Own>
      ) : (
        <Wrapper>
          {message.type === "file" ? (
            <ImageMessage message={message} />
          ) : (
            <TextMessage message={message} />
          )}
        </Wrapper>
      )}
    </>
  );
};

const TextMessage = ({ message }) => {
  return (
    <>
      <Text>{message.text}</Text>
      <Time>{formatDate(message.createdAt)}</Time>
    </>
  );
};

const ImageMessage = ({ message }) => {
  return (
    <FileStyle>
      {message?.text?.includes(".pdf") ? (
        <Box>
          <img src={iconPDF} alt="pdf" />
          <Typography>{message.text.split("/").pop()}</Typography>
        </Box>
      ) : (
        <Box>
          <img src={message.text} alt={message.text} />
          <Typography>{message.text.split("/").pop()}</Typography>
        </Box>
      )}

      <Time>
        <GetAppIcon onClick={(e)=>downloadMedia(e, message.text)}/>
        <span>{formatDate(message.createdAt)}</span>
      </Time>
    </FileStyle>
  );
};
export default Message;
