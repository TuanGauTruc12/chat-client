import { Box, Drawer, Typography, styled } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import Profile from "./Profile";

const drawerStyle = {
  left: "2%",
  top: 32,
  height: "auto !important",
  bottom: 32,
  width: "24%",
  boxShadow: "none",
  borderRadius: "8px",
};

const Header = styled(Box)`
  background: #008069;
  height: 77px;
  color: #fff;
  display: flex;
  gap: 8px;
  padding-bottom: 16px;
  padding-left: 16px;
  & > svg,
  & > p {
    margin-top: auto;
  }
`;

const Text = styled(Typography)`
    font-size: 18px;
`;

const Compoment = styled(Box)`
  background: #ededed;
  height: 85%;
`;

const InfoDrawer = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };


  return (
    <Drawer
      open={open}
      onClose={handleClose}
      PaperProps={{ sx: drawerStyle }}
      style={{ zIndex: 1500 }}
    >
      <Header>
        <ArrowBack onClick={() => setOpen(false)} />
        <Text>Profile</Text>
      </Header>
      <Compoment>
        <Profile />
      </Compoment>
    </Drawer>
  );
};

export default InfoDrawer;
