import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import axios from "axios";
import { toast } from "react-hot-toast";
import { API } from "../API";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../Redux/userSlice";
import { useState } from "react";

export default function LoginComponent() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const handleSubmit = (event) => {
    toast.loading("Logging...");
    event.preventDefault();
    const data = {
      email: email,
      password: password,
    };

    axios
      .post(`${API}/login`, data)
      .then((res) => {
        console.log("🚀 ~ file: LoginComponent.jsx:34 ~ .then ~ res:", res?.data?.user)
        if (res?.data?.user?.isAdmin) {
          console.log(res?.data?.user);
          dispatch(setUser(res?.data?.user));
          localStorage.setItem("token", res?.data.token);
          localStorage.setItem("id", res?.data?.user?._id);
          toast.remove();
          toast.success("Login Success");
          navigate("/dashboard");
        } else {
          toast.remove();
          toast.error("Access Denied");
        }
      })
      .catch((e) => {
        console.log(e);
        toast.remove();
        toast.error(e?.response?.data?.message);
      });
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Typography>Academic Pathway Experts</Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            autoComplete="email"
            value={email}
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              {/* <Link href="#" variant="body2">
                Forgot password?
              </Link> */}
            </Grid>
            <Grid item>
              {/* <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link> */}
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
