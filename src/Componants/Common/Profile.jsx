import React, { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import useRoles from "../../Hooks/useRoles";

const Profile = () => {
  const { role } = useRoles();
  const { user, updateUserProfile } = useAuth(); // assume update method exists
  const [isOpen, setIsOpen] = useState(false);

  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      await updateUserProfile(name, photo); // Firebase or backend update
      setIsOpen(false);
    } catch (error) {
      console.error("Profile update failed", error);
    }
  };

  return (
    <>
      {/* ===== PROFILE CARD ===== */}
      <div className="flex justify-center items-center min-h-screen">
        <div className="bg-white shadow-lg rounded-2xl md:w-4/5 lg:w-3/5">
          <img
            alt="cover"
            src="https://tse1.mm.bing.net/th/id/OIP.uEyowloFuI8y8y13lp_WtQHaE7"
            className="w-full rounded-t-lg h-56 object-cover"
          />

          <div className="flex flex-col items-center p-4 -mt-16">
            <img
              src={user?.photoURL}
              alt="profile"
              className="h-24 w-24 rounded-full border-4 border-white object-cover"
            />

            <span className="mt-3 px-4 py-1 text-xs text-white bg-yellow-500 rounded-full">
              {role}
            </span>

            <h2 className="mt-2 text-xl font-semibold text-gray-800">
              {user?.displayName}
            </h2>

            <p className="text-sm text-gray-500">{user?.email}</p>

            {/* EDIT BUTTON */}
            <button
              onClick={() => setIsOpen(true)}
              className="mt-4 px-6 py-2 btn-primary text-white rounded-lg hover:bg-green-700 transition"
            >
              Edit Profile
            </button>
          </div>
        </div>
      </div>

      {/* ===== MODAL ===== */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white dark:bg-gray-800 rounded-xl w-full max-w-md p-6 relative">
            <h3 className="text-xl font-semibold mb-4">Edit Profile</h3>

            <form onSubmit={handleUpdate} className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-600">
                  Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-600">
                  Photo URL
                </label>
                <input
                  type="text"
                  value={photo}
                  onChange={(e) => setPhoto(e.target.value)}
                  className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              {/* ACTIONS */}
              <div className="flex justify-end gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 border rounded-lg text-gray-600 hover:bg-gray-100"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="px-4 py-2 btn-primary text-white rounded-lg hover:bg-green-700"
                >
                  Save Changes
                </button>
              </div>
            </form>

            {/* CLOSE ICON */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
