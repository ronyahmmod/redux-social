import React, { useState } from "react";
import {
  Avatar,
  Box,
  TextField,
  Button,
  Typography,
  Stack,
  Link,
  Dialog,
  DialogTitle,
  Divider,
  IconButton,
  Snackbar,
  Alert,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import LockIcon from "@mui/icons-material/Lock";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const ErrorDialog = ({ errorObject, open, handleClose }) => {
  const { errorCode, errorMessage } = errorObject;

  return (
    <Dialog onClose={handleClose} open={open} draggable={true}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <DialogTitle sx={{ color: "error.main", cursor: "inherit" }}>
          Error occured 🎈. Please try again.
        </DialogTitle>
        <Box sx={{ pr: 2 }}>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Box>
      </Box>
      <Divider />
      <Box
        sx={{ px: 3, py: 2, display: "flex", flexDirection: "column", gap: 1 }}
      >
        <Typography variant="h5">{errorCode}</Typography>
        <Typography variant="body1">{errorMessage}</Typography>
      </Box>
    </Dialog>
  );
};

const Register = () => {
  const [error, setError] = useState({});
  const [open, setOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const handleClose = (e) => setOpen(false);
  const auth = getAuth();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmedPassword: "",
    },
    onSubmit: (values) => {
      try {
        if (values.password !== values.confirmedPassword)
          throw new Error("Password fields are not equal.");
        createUserWithEmailAndPassword(auth, values.email, values.password)
          .then((userCredential) => {
            const user = userCredential.user;
            if (user) {
              setLoggedIn(true);
              setTimeout(() => {
                navigate("/dashboard/overview");
              }, 6000);
            }
          })
          .catch((err) => {
            setError({
              error: true,
              errorMessage: err.message,
              errorCode: err.code,
            });
            setOpen(true);
          });
      } catch (err) {
        setError({
          error: true,
          errorMessage: err.message,
          errorCode: err.code || 401,
        });
        setOpen(true);
      }
    },
  });
  return (
    <Box
      sx={{
        display: "flex",
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        mt: 5,
      }}
      component="form"
      onSubmit={formik.handleSubmit}
    >
      <ErrorDialog errorObject={error} open={open} handleClose={handleClose} />
      <Snackbar open={loggedIn} autoHideDuration={5000}>
        <Alert severity="success" sx={{ width: "100%" }}>
          Logged in successfuly. Please wait...
        </Alert>
      </Snackbar>
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
        <Typography variant="h5">Sign Up</Typography>

        <Stack direction="row" spacing={2}>
          <TextField
            required
            name="firstName"
            id="firstName"
            label="First name"
            value={formik.values.firstName}
            onChange={formik.handleChange}
          />
          <TextField
            required
            name="lastName"
            id="lastName"
            label="Last name"
            value={formik.values.lastName}
            onChange={formik.handleChange}
          />
        </Stack>

        <TextField
          required
          type="email"
          name="email"
          id="email"
          label="Email"
          fullWidth
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        <TextField
          required
          type="password"
          name="password"
          id="password"
          label="Password"
          fullWidth
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        <TextField
          required
          type="password"
          name="confirmedPassword"
          id="confirmedPassword"
          label="Confirmed Password"
          fullWidth
          value={formik.values.confirmedPassword}
          onChange={formik.handleChange}
        />
        <Button variant="contained" fullWidth type="submit">
          Sign Up
        </Button>
        <Stack
          direction="row"
          sx={{ width: "100%", justifyContent: "flex-end" }}
        >
          <Link sx={{ cursor: "pointer" }}>
            Already have an account? Sign in
          </Link>
        </Stack>
        <Typography>
          Copyright &copy; ENG MD RONY AHMMOD {new Date().getFullYear()}
        </Typography>
      </Box>
    </Box>
  );
};

export default Register;
