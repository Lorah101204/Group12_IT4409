import React, { useState } from "react";
import { userData1 } from "../assets/fake-data/data";
import { LuPencil } from "react-icons/lu";

const ProfileModal = ({ setShowEdit }) => {
  const user = userData1;
  const [editForm, setEditForm] = useState({
    name: user.name,
    username: user.username,
    bio: user.bio,
    avatar: user.avatar,
    cover: user.cover,
  });

  const handleSaveProfile = async (e) => {
    e.preventDefault();
    // Here you would typically send the updated profile data to your server
    setShowEdit(false);
  };
  return (
    <div className="fixed top-0  left-0 right-0 z-110 h-full max-sm:px-4 overflow-y-scroll bg-black/50">
      <div className="max-w-2xl sm:py-6 mx-auto">
        <div className="bg-white rounded-lg shadow p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">
            Edit Profile
          </h1>

          <form className="space-y-4" onSubmit={handleSaveProfile}>
            <div className="flex flex-col items-start gap-3">
              <label
                htmlFor="avatar"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Profile Picture
                <input
                  hidden
                  type="file"
                  name="avatar"
                  id="avatar"
                  accept="image/*"
                  className="w-full p-3 border border-gray-200 rounded-lg "
                  onChange={(e) =>
                    setEditForm({ ...editForm, avatar: e.target.files[0] })
                  }
                />
                <div className="group/profile relative">
                  <img
                    src={
                      editForm.avatar instanceof File
                        ? URL.createObjectURL(editForm.avatar)
                        : editForm.avatar || user.avatar
                    }
                    alt="Avatar Preview"
                    className="w-24 h-24 rounded-full object-cover mt-2"
                  />
                  <div className="absolute hidden group-hover/profile:flex top-0 left-0 right-0 bottom-0 bg-black/20 rounded-full items-center justify-center cursor-pointer">
                    <LuPencil className="w-5 h-5 text-white" />
                  </div>
                </div>
              </label>
            </div>

            <div className="flex flex-col items-start gap-3">
              <label
                htmlFor="cover"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Cover Photo
                <input
                  hidden
                  type="file"
                  name="cover"
                  id="cover"
                  accept="image/*"
                  className="w-full p-3 border border-gray-200 rounded-lg"
                  onChange={(e) =>
                    setEditForm({ ...editForm, cover: e.target.files[0] })
                  }
                />
                <div className="group/cover relative">
                  <img
                    src={
                      editForm.cover instanceof File
                        ? URL.createObjectURL(editForm.cover)
                        : editForm.cover || user.cover
                    }
                    alt="Cover Preview"
                    className="w-80 h-40 rounded-lg bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 object-cover mt-2"
                  />
                  <div className="absolute hidden group-hover/cover:flex top-0 left-0 right-0 bottom-0 bg-black/20 rounded-lg items-center justify-center cursor-pointer">
                    <LuPencil className="w-5 h-5 text-white" />
                  </div>
                </div>
              </label>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="w-full p-3 border border-gray-200 rounded-lg"
                placeholder="Please enter your full name"
                required
                onChange={(e) =>
                  setEditForm({ ...editForm, name: e.target.value })
                }
                value={editForm.name}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                UserName
              </label>
              <input
                type="text"
                name="username"
                id="username"
                className="w-full p-3 border border-gray-200 rounded-lg"
                placeholder="Please enter your full username"
                onChange={(e) =>
                  setEditForm({ ...editForm, username: e.target.value })
                }
                value={editForm.username}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Bio
              </label>
              <textarea
                rows={3}
                className="w-full p-3 border border-gray-200 rounded-lg"
                placeholder="Tell us about yourself"
                onChange={(e) =>
                  setEditForm({ ...editForm, bio: e.target.value })
                }
                value={editForm.bio}
              />
            </div>

            <div className="flex justify-end space-x-3 pt-6">
              <button
                onClick={() => setShowEdit(false)}
                type="button"
                className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg hover:from-indigo-600 hover:to-purple-700 transition cursor-pointer"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
