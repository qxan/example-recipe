import React from "react";
import logo from "../assets/reactt.png";
import {useNavigate} from "react-router";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="logcontainer flex  items-center justify-center  ">
      <div className="  ">
        <form
          className="flex flex-col items-center justify-center w-screen h-screen"
          onSubmit={() => navigate("home")}
        >
          <h1 className="text-4xl mb-10">Delicious</h1>
          <h1 className="text-4xl text-center mb-10">Login to See All of the Delicious Recipes</h1>
          <img
            src={logo}
            alt="meal-logo"
            className="w-[15rem] h-[13rem] mb-5  "
          />
          <input
            type="text"
            name="nick"
            placeholder="Enter Your Name"
            className="text-black  w-[15rem] h-[2rem] text-center mb-2 rounded-xl"
          />
          <p className="bg-red-700 w-[15rem] h-[.3rem] rounded-lg mb-5"></p>
          <input
            type="password"
            name="pass"
            placeholder="Enter Your Passwords"
            className="text-black  w-[15rem] h-[2rem] text-center mb-2 rounded-xl"
          />
          <p className="bg-red-700 w-[15rem] h-[.3rem] rounded-lg mb-10"></p>
          <button className="bg-red-700 rounded-xl w-[7rem] h-[1.7rem] hover:bg-blue-500 hover:text-white">
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;