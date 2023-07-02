import { Box, styled } from "@mui/material"
import Footer from "./Footer";

const Wrapper = styled (Box)`
    background-image: url(${'https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png'});
    background-size: 75%;
    position: relative;
`;

const Compoment = styled(Box)`
  height: calc(100%-55px);
  margin-bottom: 2px;
  overflow-y: scroll;
`;


const Messages = ({person}) => {
  
  return (
    <Wrapper>
      <Compoment>

      </Compoment>
      <Footer />
    </Wrapper>
  )
}

export default Messages