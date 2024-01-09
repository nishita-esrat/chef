import React, { useContext, useState } from "react";
import { authContext } from "../../../provider/AuthProvider";
import { toast } from "react-toastify";
import { FaUserAlt } from "react-icons/fa";

const Profile = () => {
  // auth context
  const { user, nameAndPhoto, setUser } = useContext(authContext);
  //   set user profile value
  const [update, setUpdate] = useState({
    name: user.displayName,
    photoUrl: user.photoURL,
  });

  // get user profile value
  const userProfile = (e) => {
    setUpdate({ ...update, [e.target.name]: e.target.value });
    console.log(update);
  };
  // update profile function
  const updateProfile = (e) => {
    e.preventDefault();
    nameAndPhoto(update.name, update.photoUrl)
      .then(() => {
        // Profile updated!
        setUser({
          ...user,
          displayName: update.name,
          photoURL: update.photoUrl,
        });
        toast.success("successfully updated profile", { icon: <FaUserAlt /> });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="bg-base-100">
      <div className="container min-h-screen flex justify-center items-center ">
        <div className="card card-side flex-col shadow-md mt-24 mb-10 md:mt-20 lg:mt-24 md:mb-5 bg-white md:w-1/2">
          <figure className="max-h-[450px]">
            <img src={user?.photoURL} alt="profile photo" />
          </figure>
          <div className="card-body italic">
            <h2 className="card-title text-lg">
              <span className="text-gray-500">name:</span>
              {user?.displayName ? user.displayName : "none"}
            </h2>
            <p className="font-semibold">
              <span className="text-gray-500 font-bold">email:</span>
              {user?.email ? user.email : "none"}
            </p>
            <div className="card-actions justify-start mt-4">
              <button
                className="btn-common"
                onClick={() =>
                  document.getElementById("my_modal_5").showModal()
                }
              >
                update profile
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* dialog for update profile info ===================== */}
      <dialog id="my_modal_5" className="modal modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-yellow-700 mb-3">
            update profile
          </h3>
          <form className="text-yellow-700" onSubmit={updateProfile}>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-yellow-700">name</span>
              </label>
              <input
                type="text"
                name="name"
                value={update.name}
                placeholder={update.name || "enter your name"}
                onChange={userProfile}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-yellow-700">photo URL</span>
              </label>
              <input
                type="text"
                name="photoUrl"
                value={update.photoUrl}
                placeholder="photo URL"
                onChange={userProfile}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn-common">update</button>
            </div>
          </form>
          <div className="modal-action">
            <form method="dialog" className="w-full">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-error btn-outline font-bold w-full">
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Profile;
