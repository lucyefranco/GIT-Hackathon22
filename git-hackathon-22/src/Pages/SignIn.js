import * as React from "react";
import { Button, Box, TextField, Container, Stack, Divider } from "@mui/material";
import { navigate, useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import { display } from "@mui/system";
import photo from "../assets/signinphoto.jpeg"

function SignIn() {
  let navigate = useNavigate();

  const photoStyling = {
    height: '160px'
  }

  return (
    <Container>
        <Box align="center" marginTop={'30px'}>
        <img src={photo} alt="" style={photoStyling} />

        </Box>
        

      <Box display={"flex"} flexDirection={"column"}>
        <Typography sx={{fontWeight:'bold', color: '072E3E'}} align="center">Sign In</Typography>
        <TextField padding={1} label="E-mail address" variant="outlined" />
        <TextField label="Password" variant="outlined" />
        <Typography>Forgot your password?</Typography>
        <Stack spacing={2} padding={2} marginTop={2}>
            <Button sx={{color:'009CDC', fontWeight:'bold'}} variant="contained">Log In</Button>
            <Typography align="center">OR</Typography>
            <Button variant="contained">Continue with Facebook</Button>
            <Button variant="contained">Continue with Google</Button>
        </Stack>
        <Divider />
        <Button onClick={navigate("/")}> Use as a guest </Button>
        <Box display="flex">
            <Typography> Not on our app?</Typography>
            <Button>Sign up here</Button>
        </Box>
        
      </Box>
    </Container>
  );
}

export default SignIn;
