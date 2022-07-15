import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Overview from "./pages/Overview";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setLoggedInUser } from "./feature/user/userSlice";
function App() {
  const dispatch = useDispatch();
  const auth = getAuth();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // const userId = user.uid;
        dispatch(setLoggedInUser(user));
      } else {
        dispatch(setLoggedInUser(null));
      }
    });
    return () => {
      unsubscribe();
    };
  });
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="overview" element={<Overview />} />
      </Route>
    </Routes>
  );
}

export default App;
