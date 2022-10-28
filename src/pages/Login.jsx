
import reactlogo from "../assets/reactt.png";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center">
      <div className="  ">
        <form
          className="flex flex-col items-center justify-center h-screen w-screen"
          onSubmit={() => navigate("/Home")}
        >
          <h1 className="text-4xl mb-10">Delicious</h1>
          <h1 className="text-4xl text-center mb-10">
            Login to See All of the Delicious Recipes
          </h1>
          <img
            src={reactlogo}
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
          <button className="bg-red-700 rounded-xl w-[7rem] h-[1.7rem] hover:bg-cyan-400 ">
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
