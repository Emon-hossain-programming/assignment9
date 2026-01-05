import React, { useContext, useState } from 'react';
import { AuthContext } from '../AuthProvaider/AuthContext';
import { updateProfile } from 'firebase/auth';
import { toast } from 'react-toastify';

const MyProfile = () => {
  const { user, auth } = useContext(AuthContext);

  // Form states
  const [name, setName] = useState(user?.displayName || '');
  const [photo, setPhoto] = useState(user?.photoURL || '');
  const [editMode, setEditMode] = useState(false); 

  // Update Profile 
  const handleUpdate = (e) => {
    e.preventDefault();

    if (!name || !photo) {
      toast.error("Please fill all fields ");
      return;
    }
    //update name and profile 
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    })
      .then(() => {
        toast.success("Profile updated successfully");
        setEditMode(false);
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-500 via-indigo-500 to-purple-500 p-4">
      <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl w-full max-w-md p-8 text-center">

        {/* Profile Image */}
        <div className="flex justify-center mb-6">
          <img
            src={user?.photoURL || "/user.png"}
            alt="Profile"
            className="w-28 h-28 rounded-full border-4 border-primary shadow-lg"
          />
        </div>

        {/* Show either info or edit form */}
        {editMode ? (
          <form onSubmit={handleUpdate} className="space-y-4">
            <input
              type="text"
              value={name} //value of name
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              className="input input-bordered w-full rounded-lg"
              required
            />
            <input
              type="text"
              value={photo} //value of photo
              onChange={(e) => setPhoto(e.target.value)}
              placeholder="Photo URL"
              className="input input-bordered w-full rounded-lg"
              required
            />
            <button
              type="submit"
              className="btn btn-primary w-full rounded-full text-white text-lg"
            >
              Save Changes
            </button>
            <button
              type="button"
              onClick={() => setEditMode(false)}
              className="btn btn-ghost w-full rounded-full text-gray-700"
            >
              Cancel
            </button>
          </form>
        ) : (
          <>
            {/* User Info */}
            <h2 className="text-2xl font-bold text-gray-800">{user?.displayName || "No Name"}</h2>
            <p className="text-gray-600 mt-2">{user?.email || "No Email"}</p>

           
            <div className="h-px bg-gray-300 my-6"></div>

            {/* Update Button */}
            <button
              onClick={() => setEditMode(true)}
              className="btn btn-primary w-full rounded-full text-white text-lg shadow-lg hover:shadow-primary/40 transition"
            >
              Update Profile
            </button>
          </>
        )}

      </div>
    </div>
  );
};

export default MyProfile;
