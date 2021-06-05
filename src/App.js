import React, { useEffect } from "react";
import "./App.css";
import Quora from "./components/Quora";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import Login from "./components/auth/Login";
import { auth } from "./firbase";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            displayName: authUser.displayName,
            email: authUser.email,
          })
        );
        console.log(authUser);
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return <div className="App">{user ? <Quora /> : <Login />}</div>;
}

export default App;
