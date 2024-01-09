import React, { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { authContext } from "../../provider/AuthProvider";
import { toast } from "react-toastify";
import { MdOutlineWifiPassword } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { MdError } from "react-icons/md";
import { MdAttachEmail } from "react-icons/md";

const Login = () => {
  // auth context
  const { signInUser, googleSignIn, githubSignIn, resetPassword } =
    useContext(authContext);
  // get location
  const location = useLocation();
  const path = location.state?.from || "/";
  const navigation = useNavigate();

  // email and password
  const [exitsUser, setExitsUser] = useState({
    email: "",
    password: "",
  });

  // get user email and password
  const handelUser = (e) => {
    setExitsUser({ ...exitsUser, [e.target.name]: e.target.value });
  };

  // sign in function
  const signIn = (e) => {
    e.preventDefault();
    //if password is less than 6
    if (exitsUser.password.length < 6) {
      toast.error("password must be greater than 6 character", {
        icon: <MdOutlineWifiPassword />,
      });
      return;
    }
    //sign in function from firebase
    signInUser(exitsUser.email, exitsUser.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        toast.success("successfully login", { icon: <FaUserAlt /> });
        navigation(path);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error("email or password is wrong", { icon: <MdError /> });
        console.log(errorMessage);
      });
  };

  // sign in with google
  const google = () => {
    googleSignIn()
      .then((result) => {
        // The signed-in user info.
        const user = result.user;
        toast.success("successfully login", { icon: <FaUserAlt /> });
        navigation(path);
      })
      .catch((error) => {
        // Handle Errors here.
        console.log(error);
      });
  };

  // sign in with github
  const github = () => {
    githubSignIn()
      .then((result) => {
        // The signed-in user info.
        const user = result.user;
        toast.success("successfully login", { icon: <FaUserAlt /> });
        navigation(path);
      })
      .catch((error) => {
        // Handle Errors here.
        console.log(error);
      });
  };

  // forgot password
  const forgotPassword = () => {
    if (exitsUser.email) {
      resetPassword(exitsUser.email)
        .then(() => {
          // Password reset email sent!
          toast.success("password reset ,check your gmail", {
            icon: <MdOutlineWifiPassword />,
          });
        })
        .catch((error) => {
          const errorMessage = error.message;
          console.log(errorMessage);
        });
    } else {
      toast.error("enter your email", { icon: <MdAttachEmail /> });
    }
  };

  return (
    <div className="bg-base-200">
      <div className="container">
        <div className="min-h-screen pt-11 pb-5 md:pt-24 md:pb-14">
          <div className="flex flex-col gap-5 items-center text-yellow-700">
            <div className="text-center pt-10 pb-5">
              <h1 className="text-4xl md:text-5xl font-bold">login!</h1>
            </div>
            <div className="card w-full max-w-xl shadow-lg bg-base-100 text-yellow-700">
              <form className="card-body" onSubmit={signIn}>
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
                    name="email"
                    onChange={handelUser}
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
                    name="password"
                    onChange={handelUser}
                    required
                  />
                  <label className="label">
                    <a
                      href="#"
                      className="label-text-alt link link-hover text-base"
                      onClick={() =>
                        document.getElementById("my_modal_5").showModal()
                      }
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
                  <Link
                    to="/register"
                    className="underline"
                    state={{ from: path }}
                  >
                    sign up
                  </Link>
                </div>
              </form>
            </div>
            <div className="form-control font-bold text-center text-xl">or</div>
            <div className="form-control flex-row gap-3 justify-center bg-white py-5 w-[300px] md:w-1/2 shadow-xl mx-auto rounded-lg">
              <FcGoogle className="w-10 h-10 cursor-pointer" onClick={google} />
              <FaGithub
                className="text-black w-10 h-10 cursor-pointer"
                onClick={github}
              />
            </div>
          </div>
        </div>
        {/* dialog  ============================ */}
        <dialog id="my_modal_5" className="modal modal-middle">
          <div className="modal-box">
            <p className="py-4">do you want to reset your password ?</p>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button
                  className="btn btn-warning btn-outline font-bold"
                  onClick={forgotPassword}
                >
                  ok
                </button>
                <button className="btn ms-2 btn-error btn-outline font-bold">
                  Close
                </button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default Login;
