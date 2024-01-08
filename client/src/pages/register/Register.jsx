import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { authContext } from "../../provider/AuthProvider";
import { MdOutlineWifiPassword } from "react-icons/md";
import { MdAttachEmail } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { toast } from "react-toastify";

const Register = () => {
  // auth context
  const { createUser, nameAndPhoto, setUser } = useContext(authContext);
  // get location
  const location = useLocation();
  const path = location.state?.from || "/";
  const navigation = useNavigate();

  // email, password ,name,photoUrl
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
    photoUrl: "",
  });

  //get user email, password ,name,photoUrl
  const handelUser = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };
  // sign up function
  const signUp = (e) => {
    e.preventDefault();
    //if password is less than 6
    if (newUser.password.length < 6) {
      toast.error("password must be greater than 6 character", {
        icon: <MdOutlineWifiPassword />,
      });
      return;
    }
    //sign up function from firebase
    createUser(newUser.email, newUser.password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        //update name and photoUrl function from firebase
        nameAndPhoto(newUser.name, newUser.photoUrl)
          .then(() => {
            // Profile updated!
            setUser({
              ...user,
              displayName: newUser.name,
              photoURL: newUser.photoUrl,
            });
            console.log();
            toast.success(" new user created", { icon: <FaUserAlt /> });
            navigation(path);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        toast.error("email already exits", { icon: <MdAttachEmail /> });
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <div className="bg-base-200">
      <div className="container">
        <div className="min-h-screen pt-11 pb-5 md:pt-24 md:pb-14">
          <div className="flex flex-col gap-5 items-center text-yellow-700">
            <div className="text-center pt-10 pb-5">
              <h1 className="text-4xl md:text-5xl font-bold">register!</h1>
            </div>
            <div className="card w-full max-w-xl shadow-lg bg-base-100 text-yellow-700">
              <form className="card-body" onSubmit={signUp}>
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
                    name="name"
                    onChange={handelUser}
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
                    name="email"
                    required
                    onChange={handelUser}
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
                    required
                    onChange={handelUser}
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
                    name="photoUrl"
                    required
                    onChange={handelUser}
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn-common">sign up</button>
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
