import { Box, Typography, styled } from "@mui/material";
import { useContext } from "react";
import { AccountContext } from "../../../context/AccountProvider";

const ImageContainer = styled(Box)`
  display: flex;
  justify-content: center;
`;

const Image = styled("img")({
  borderRadius: "50%",
  padding: "25px 0",
});

const BoxWrapper = styled(Box)`
  background: #fff;
  padding: 12px 30px 2px;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.08);
  & > :first-of-type {
    font-size: 13px;
    color: #009688;
    font-weight: 200;
  }

  & > :last-child {
    margin: 14px 0;
    color: #4a4a4a;
  }
`;

const DecriptionContainer = styled(Box)`
    padding: 30px;
    & > p{
        font-size: 13px;
        color: #8696a0;
        text-align: center;
    }
`;

const Profile = () => {
  const { account } = useContext(AccountContext);

  return (
    <>
      <ImageContainer>
        <Image src={account.picture} alt="avatar" />
      </ImageContainer>
      <BoxWrapper>
        <Typography>Your name</Typography>
        <Typography>{account.name}</Typography>
      </BoxWrapper>
      <DecriptionContainer>
        <Typography>
          This is not your username or pin. This name will be visible to your
          WhatsApp contacts.
        </Typography>
      </DecriptionContainer>
      <BoxWrapper>
        <Typography>About</Typography>
        <Typography>Eat! Sleep! Code! Repeat!</Typography>
      </BoxWrapper>
    </>
  );
};

export default Profile;
