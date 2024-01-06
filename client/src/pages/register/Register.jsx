import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../../provider/AuthProvider";

const Register = () => {
  const { createUser } = useContext(authContext);
  

 
  return (
    <div className="bg-base-200">
      <div className="container">
        <div className="min-h-screen pt-11 pb-5 md:pt-24 md:pb-14">
          <div className="flex flex-col gap-5 items-center text-yellow-700">
            <div className="text-center pt-10 pb-5">
              <h1 className="text-4xl md:text-5xl font-bold">register!</h1>
            </div>
            <div className="card w-full max-w-xl shadow-lg bg-base-100 text-yellow-700">
              <form className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-yellow-700 text-base">
                      Name
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="your name"
                    className="input input-bordered"
                    required
                  />
                </div>
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
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-yellow-700 text-base">
                      Photo URL
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="photo URL"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn-common" >
                    sign up
                  </button>
                </div>
                <div className="form-control mt-4 flex-row">
                  <span className="text-black">already have an account ? </span>
                  <Link to="/login" className="underline">
                    sign in
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
