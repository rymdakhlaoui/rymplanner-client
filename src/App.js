import React, { useEffect } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ErrorPage from "./pages/ErrorPage";
import Profile from "./pages/Profile";
import { useDispatch, useSelector } from "react-redux";
import { current } from "./JS/Actions/AuthActions";
import SuccessNotification from "./components/SuccessNotification";
import "react-toastify/dist/ReactToastify.css";
import Todo from "./pages/Todo";
import ErrorNotification from "./components/ErrorNotification";

const App = () => {
  const dispatch = useDispatch();

  const isAuth = useSelector((state) => state.AuthReducer.isAuth);

  const user = useSelector((state) => state.AuthReducer.user);

  const authErrors = useSelector((state) => state.AuthReducer.errors);

  const authSuccess = useSelector((state) => state.AuthReducer.success);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(current());
    }
  }, [dispatch]);

  console.log(authErrors);

  return (
    <div>
      {authErrors != null && authErrors.map((el) => <ErrorNotification error={el} />)}
      {authSuccess &&
        authSuccess.map((el) => <SuccessNotification success={el} />)}
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />

        {isAuth ? (
          <>
            <Route path="/tasks" element={<Todo />} />
            <Route path="/profile" element={<Profile />} />
          </>
        ) : (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </>
        )}

        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};

export default App;
