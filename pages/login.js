import styled from "styled-components";
import Head from "next/head";
import { Avatar, Button } from "@material-ui/core";
import { auth, provider } from "../firebase";

function Login() {
  const signIn = () => {
    auth.signInWithPopup(provider).catch(alert);
  };
  return (
    <Container>
      <Head>
        <title>Login</title>
      </Head>
      <LoginContainer>
        <Logo src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/598px-WhatsApp.svg.png" />
        <Button
          variant="contained"
          color="primary"
          startIcon={
            <Avatar
              src={
                "https://i2.wp.com/codemyui.com/wp-content/uploads/2019/10/Google-SVG-Logo-Using-GreenSock-Animation.gif?fit=880%2C440&ssl=1"
              }
            />
          }
          onClick={signIn}
        >
          Sign in with Google
        </Button>
      </LoginContainer>
    </Container>
  );
}

export default Login;
const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  background-color: whitesmoke;
`;
const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px;
  background-color: #fff;
  border-radius: 2%;
  box-shadow: 0px 4px 14px -3px rgba(0, 0, 0, 0.7);
`;
const Logo = styled.img`
  height: 200px;
  width: 200px;
  margin-bottom: 50px;
`;
