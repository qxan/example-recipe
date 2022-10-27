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
