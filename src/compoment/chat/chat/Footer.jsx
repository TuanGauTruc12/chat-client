import { Box, InputBase, styled } from "@mui/material";
import { EmojiEmotionsOutlined, AttachFile, Mic } from "@mui/icons-material";

const Compoment = styled(Box)`
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    height: 55px;
    z-index: 1600;
    background: #ededed;
    display: flex;
    align-items: center;
    padding: 0 15px;
    & > * {
        margin: 5px;
        color: #919191;
    }
`;

const Search = styled(Box)`
    background-color: #fff;
    border-radius: 10px;
    width: calc(94% - 100px);
`;

const InputFeild = styled(InputBase)`
    width: 100%;
    padding: 20px;
    height: 20px;
    padding-left: 25px;
    font-size: 14px;
`;

const ClipIcon = styled(AttachFile)`
    transform: rotate(45deg);
`;

const Footer = () => {
  return (
    <Compoment>
      <EmojiEmotionsOutlined />
      <ClipIcon />
      <Search>
        <InputFeild placeholder="Type a message"/>
      </Search>
      <Mic />
    </Compoment>
  );
};

export default Footer;
