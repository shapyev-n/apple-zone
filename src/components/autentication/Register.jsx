import React, { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Alert,
  Box,
  Button,
  Card,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import PermPhoneMsgIcon from "@mui/icons-material/PermPhoneMsg";
import AppleIcon from "@mui/icons-material/Apple";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { register, signInGoogle } = useAuth();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [surname, setSurName] = useState("");
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  async function signUp() {
    try {
      await register(surname, name, email, password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <div id="register">
      {error && <Alert severity="error">{error}</Alert>}
      <Card
        className="register"
        sx={{
          p: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <Typography
          sx={{ textAlign: "center", paddingBottom: "15px" }}
          variant="h5"
        >
          Register
        </Typography>
        <TextField
          onChange={(e) => setName(e.target.value)}
          label="Name"
          variant="standard"
          inputProps={{
            style: { textTransform: "capitalize" },
          }}
        />
        <TextField
          onChange={(e) => setSurName(e.target.value)}
          label="Surname"
          variant="standard"
          autoFocus
          inputProps={{
            style: { textTransform: "capitalize" },
          }}
        />
        <TextField
          onChange={(e) => setEmail(e.target.value)}
          label="Email"
          id="standard-start-adornment"
          sx={{ width: "100%" }}
          variant="standard"
        />
        <FormControl sx={{ width: "100%" }} variant="standard">
          <InputLabel htmlFor="standard-adornment-password">
            Password
          </InputLabel>
          <Input
            onChange={(e) => setPassword(e.target.value)}
            id="standard-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <Button
          onClick={signUp}
          variant="contained"
          sx={{
            background: "#000",
            color: "#fff",
            transition: "background-color 0.3s ease",
            "&:hover": {
              background: "#000000b5",
            },
          }}
        >
          sign up
        </Button>
        <p style={{ textAlign: "center" }}>Login via</p>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          <IconButton
            onClick={() => signInGoogle()}
            sx={{
              background: "#000",
              color: "#fff",
              transition: "background-color 0.3s ease",
              "&:hover": {
                background: "#000000b5",
              },
            }}
          >
            <GoogleIcon />
          </IconButton>
          <IconButton
            //  onClick={() => signInGoogle()}
            sx={{
              background: "#000",
              color: "#fff",
              transition: "background-color 0.3s ease",
              "&:hover": {
                background: "#000000b5",
              },
            }}
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            //  onClick={() => signInGoogle()}
            sx={{
              background: "#000",
              color: "#fff",
              transition: "background-color 0.3s ease",
              "&:hover": {
                background: "#000000b5",
              },
            }}
          >
            <AppleIcon />
          </IconButton>
          <IconButton
            //  onClick={() => signInGoogle()}
            sx={{
              background: "#000",
              color: "#fff",
              transition: "background-color 0.3s ease",
              "&:hover": {
                background: "#000000b5",
              },
            }}
          >
            <PermPhoneMsgIcon />
          </IconButton>
        </Box>
      </Card>
    </div>
  );
};

export default Register;
