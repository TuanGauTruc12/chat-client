import "./App.css";
import Messenger from './compoment/Messenger';
import { GoogleOAuthProvider } from "@react-oauth/google";
import AccountProvider from "./context/AccountProvider";

function App() {
   const clientId =
     "675030167092-e7dlnspiu14sekiv6fbv2jfnic2oitga.apps.googleusercontent.com";
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
        <Messenger />
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
