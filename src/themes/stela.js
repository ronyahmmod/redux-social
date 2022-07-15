import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#7D9D9C",
      dark: "#576F72",
      light: "#93B8B6",
      contrastText: "#fff",
    },
    secondary: {
      main: "#E4DCCF",
      light: "#F0EBE3",
      dark: "#B0ADA7",
      constrastText: "#fff",
    },
    borderColor: {
      wash: "#E4E6EB",
    },
  },
});

export default theme;
