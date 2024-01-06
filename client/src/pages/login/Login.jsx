import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Login = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <div className="bg-base-200">
      <div className="container">
        <div className="min-h-screen pt-11 pb-5 md:pt-24 md:pb-14">
          <div className="flex flex-col gap-5 items-center text-yellow-700">
            <div className="text-center pt-10 pb-5">
              <h1 className="text-4xl md:text-5xl font-bold">login!</h1>
            </div>
            <div className="card w-full max-w-xl shadow-lg bg-base-100 text-yellow-700">
              <form className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-yellow-700 text-base">
                      Email
                    </span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-yellow-700 text-base">
                      Password
                    </span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <a
                      href="#"
                      className="label-text-alt link link-hover text-base"
                    >
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn-common">sign in</button>
                </div>
                <div className="form-control mt-4 flex-row">
                  <span className="text-black">don't have an account ? </span>
                  <Link to="/register" className="underline">
                    sign up
                  </Link>
                </div>
              </form>
            </div>
            <div className="form-control font-bold text-center text-xl">or</div>
            <div className="form-control flex-row gap-3 justify-center bg-white py-5 w-[300px] md:w-1/2 shadow-xl mx-auto rounded-lg">
              <FcGoogle className="w-10 h-10 cursor-pointer" />
              <FaGithub className="text-black w-10 h-10 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
