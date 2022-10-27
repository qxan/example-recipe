import React, { useState } from "react";
import LoginForm from "./LoginForm";
import About from './About'


const Login = () => {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123",
  };

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);

    if (
      details.email == adminUser.email &&
      details.password == adminUser.password
    ) {
      console.log("Logged in!");
      setUser({
        name: details.name,
        email: details.email,
      });
    } else {
      console.log("Details do not match");
      setError("Details do not match");
    }
  };

  const Logout = () => {
    setUser({ name: "", email: "" });
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="mb-10 text-center">
        <h1 className="text-4xl">Delicious</h1>
        <h1 className="text-4xl">Login to See All of the Delicious Recipes</h1>
      </div>
      {user.email != "" ? (
        <About />
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
};

export default Login;
