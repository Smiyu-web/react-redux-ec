import React from "react";
import { useDispatch } from "react-redux";
// import RouterFile from "../RouterFile";
import { push } from "connected-react-router";

const Login = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Login</h2>
      <button onClick={() => dispatch(push("/"))}>Login</button>
    </div>
  );
};

export default Login;
