import { Box, InputBase, styled } from "@mui/material";
import { EmojiEmotionsOutlined, AttachFile, Mic } from "@mui/icons-material";
import { useEffect } from "react";
import { uploadFile } from "../../../service/api";

const Compoment = styled(Box)`
  min-height: 60px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
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

const Footer = ({ sendText, setValue, value, file, setFile }) => {
  const handleFile = (e) => {
    setFile(e.target.files[0]);
    setValue(e.target.files[0].name);
  };

  useEffect(()=>{
    const upload = async()=>{
      if(file){
        const data = new FormData();
        data.append('file', file);
        data.append('name', file.name);
        //
        await uploadFile(data);        
      }
    }

    upload();
  }, [file]);

  return (
    <Compoment>
      <EmojiEmotionsOutlined />
      <label
        style={{ padding: "8px", cursor: "pointer" }}
        htmlFor="file-select"
      >
        <ClipIcon />
        <input
          onChange={(e) => handleFile(e)}
          type="file"
          id="file-select"
          style={{ display: "none" }}
        />
      </label>
      <Search>
        <InputFeild
          placeholder="Type a message"
          onChange={(e) => setValue(e.target.value)}
          onKeyPress={(e) => sendText(e)}
          value={value}
        />
      </Search>
      <Mic />
    </Compoment>
  );
};

export default Footer;
