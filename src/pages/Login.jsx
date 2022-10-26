import React from "react";
import meal from "../assets/meal.svg";

const Login = () => {
  return (
    <div className="flex flex-col  items-center text-center text-black h-screen ">
      <div className="mt-10 flex flex-col gap-10 font-bold text-4xl">
        <div className="baslik">
          <h2 className="">Delicious</h2>
        </div>
        <div className="altbaslık">
          <h1 className="text-cyan-600">
            Login to See All of the Delicious Recipes
          </h1>
        </div>
      </div>
      <div className="mt-10 w-[30rem] h-[30rem] flex justify-center items-center">
        <div className="w-[15rem]">
          <img src={meal} alt="login-img" />
          <form className="mt-5">
            <input
              type="text"
              placeholder="Your Name"
              className="placeholder-black"
            />
            <p className="w-[15rem] h-[0.2rem] bg-red-500 rounded"></p>
            <input
              type="text"
              placeholder="Your Password"
              className="placeholder-black mt-2 border-none"
            />
            <p className="w-[15rem] h-[0.2rem] bg-red-500 rounded"></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
