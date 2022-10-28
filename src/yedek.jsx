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









import React, { useState } from "react";
import meal from "../assets/meal.svg";

const LoginForm = ({ Login, error }) => {
  const [details, setDetails] = useState({ name: "", email: "", password: "" });

  const submitHandler = (e) => {
    e.preventDefault();

    Login(details);
  };

  return (
    
      <form
        onSubmit={submitHandler}
        className=" w-[25rem] h-auto rounded-xl flex flex-col items-center"
      >
        <div className=" flex flex-col justify-center items-center">
          <img className="w-[15rem] mt-10" src={meal} alt="" />
          {error != "" ? <div className="error">{error}</div> : ""}
          <div className="flex flex-col mt-5">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="text"
              id="name"
              onChange={(e) => setDetails({ ...details, name: e.target.value })}
              value={details.name}
              className='border border-black rounded-lg h-[2rem] p-2'
            />
          </div>
          <div className="flex flex-col mt-5">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={(e) =>
                setDetails({ ...details, email: e.target.value })
              }
              value={details.email}
              className='border border-black rounded-lg h-[2rem] p-2'
            />
          </div>
          <div className="flex flex-col mt-5">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) =>
                setDetails({ ...details, password: e.target.value })
              }
              value={details.password}
              className='border border-black rounded-lg h-[2rem] p-2'
            />
          </div>
          <input className="bg-red-600 w-[7rem] h-[2rem] mt-5 mb-5 rounded-md" type="submit" value="LOGIN" />
        </div>
      </form>

  );
};

export default LoginForm;







import React from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-stone-300 flex justify-between h-[6rem]">
      <div className="ml-5 p-8 w-[50rem] flex justify-center items-center text-2xl text-cyan-700">
        <h1>Delicous</h1>
      </div>
      <div className="p-8 w-[60rem] flex justify-center items-center text-xl text-white">
        <Link to="/home" className="text-red-700">
          Home
        </Link>
        <div className="flex gap-12 ">
          <NavLink className="hover:text-red-700" to="/About" >About</NavLink>
          <a className="hover:text-red-700">Github</a>
          <NavLink className="hover:text-red-700" to="/" >Logout</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
