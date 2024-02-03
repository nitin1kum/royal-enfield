import React from "react";
import { IoChevronForwardOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";

const Login = () => {
  const control = useAnimation();
  const control1 = useAnimation();
  const control2 = useAnimation();
  return (
    <div className="log-in ">
      <div className="lg:w-1/2 sm:w-3/4 h-screen overflow-y-scroll relative scroll m-auto text-white text-center pt-12 p-4">
        <h2 className="sm:text-2xl text-base font-bold my-2 sm:my-4">
          Log in to your Royal Enfiled account
        </h2>
        <form
          action=""
          className=" grid sm:grid-cols-2  sm:grid-rows-2 sm:gap-6 gap-3 sm:my-8 my-3 py-3"
        >
          <input
            className=" bg-transparent border border-white select-none sm:p-3 p-2 text-white text-base placeholder:text-white font-semibold "
            type="email"
            name="email"
            id="eamil"
            placeholder="Email/Mobile Number"
            required
          />
          <input
            className=" bg-transparent border border-white select-none sm:p-3 p-2 text-white text-base placeholder:text-white font-semibold"
            type="text"
            name="password"
            id="password"
            placeholder="Password"
          />
          <button
            className=" border bg-white select-none sm:p-3 p-2  text-black text-base  font-semibold"
            type="submit"
          >
            Login
          </button>
          <Link className=" bg-transparent text-left select-none p-2 text-white text-base  font-semibold hover:text-hover">
            Forget Password ?
          </Link>
        </form>

        <h2 className="sm:text-2xl text-xl font-bold sm:my-6 my-3 sm:pt-6 ">
          New to royalenfield.com?
        </h2>
        <div
          onMouseEnter={() => {
            control.start({
              x: [0, 5, 0, 2, 0],
              transition: { duration: 0.5 },
            });
          }}
          className=" bg-transparent border flex w-fit items-center gap-2 text-sm m-auto border-white select-none p-2 text-white  placeholder:text-white font-semibold hover:bg-white hover:text-black transition-all duration-700 ease-in-out"
        >
          Create an account
          <motion.i animate={control}>
            <IoChevronForwardOutline />
          </motion.i>
        </div>
        <h2 className="text-2xl font-bold sm:my-6 my-3 sm:pt-6">Or sign in via</h2>
        <div className="grid sm:grid-cols-2 gap-3 w-full text-center sm:w-fit m-auto">
          <div
            className=" bg-fb-background relative text-center flex w-full justify-center sm:w-fit items-center gap-2 text-sm m-auto  select-none p-1.5 px-2 text-white  placeholder:text-white font-semibold"
            onMouseEnter={() => {
              control1.start({
                x: [0, 5, 0, 2, 0],
                transition: { duration: 0.5 },
              });
            }}
          >
            Sign in with Facebook{" "}
            <motion.i className="absolute right-0  flex items-center pr-3 sm:pr-0 h-full sm:relative sm:block" animate={control1}>
              <IoChevronForwardOutline />
            </motion.i>
          </div>
          <div
            className=" bg-gg-background relative flex w-full justify-center sm:w-fit items-center gap-2 text-sm m-auto  select-none p-1.5 px-2 text-white  placeholder:text-white font-semibold"
            onMouseEnter={() => {
              control2.start({
                x: [0, 5, 0, 2, 0],
                transition: { duration: 0.5 },
              });
            }}
          >
            Sign in with Google{" "}
            <motion.i className="absolute right-0  flex items-center pr-3 sm:pr-0 h-full sm:relative sm:block" animate={control2}>
              <IoChevronForwardOutline />
            </motion.i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
