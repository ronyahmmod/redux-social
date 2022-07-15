import React from "react";
import {
  Avatar,
  Box,
  TextField,
  Button,
  Typography,
  Stack,
  Link,
} from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";

const Login = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        mt: 5,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 3,
          boxShadow: 1,
          minHeight: 300,
          minWidth: 300,
          p: 4,
        }}
      >
        <Avatar
          alt="Lock"
          sx={{ height: 48, width: 48, bgcolor: "primary.main" }}
        >
          <LockIcon />
        </Avatar>
        <Typography variant="h5">Sign In</Typography>
        <TextField
          required
          type="email"
          name="email"
          id="email"
          label="email"
          fullWidth
        />
        <TextField
          required
          type="password"
          name="password"
          id="password"
          label="password"
          fullWidth
        />
        <Button variant="contained" fullWidth>
          Sign In
        </Button>
        <Stack direction="row" sx={{ gap: 4 }}>
          <Link sx={{ cursor: "pointer" }}>Forgot password?</Link>
          <Link sx={{ cursor: "pointer" }}>Don't have an account? Sign up</Link>
        </Stack>
        <Typography>
          Copyright &copy; ENG MD RONY AHMMOD {new Date().getFullYear()}
        </Typography>
      </Box>
    </Box>
  );
};

export default Login;
