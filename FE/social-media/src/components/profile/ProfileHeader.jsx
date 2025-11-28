// src/components/profile/ProfileHeader.jsx
import Avatar from "../common/Avatar";
import { FiEdit2 } from "react-icons/fi";

export default function ProfileHeader({ user }) {
  return (
    <div className="relative bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden">
      <div className="flex flex-col justify-center gap-2">
        {/* Cover Photo */}
        <div className="h-64 lg:h-80">
          <img
            src={user.cover}
            alt="Cover"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="mx-auto relative -top-15 sm:absolute sm:top-48 sm:left-8 lg:top-65  rounded-full border-3 border-white shadow-lg">
          <Avatar src={user.avatar} size="xl" />
        </div>

        <div className="px-32 pb-6 -mt-15 sm:mt-0 sm:relative sm:left-10">
          {/* Avatar + Name + Username */}
          <div className="flex flex-col sm:flex-row items-center sm:items-end gap-4">
            <div className="text-center sm:text-left flex-1">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                {user.name}
              </h1>
              <p className="text-gray-500 text-sm sm:text-base">
                {user.username}
              </p>
            </div>

            {/* Edit Button */}
            <button className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-200 transition text-sm">
              <FiEdit2 />
              <span>Edit</span>
            </button>
          </div>

          {/* Bio */}
          <p className="mt-4 text-lg text-gray-700 text-center sm:text-left">
            {user.bio}
          </p>

          {/* Stats */}
          <div className="flex justify-center sm:justify-start gap-8 mt-6 text-center border-t border-neutral-400 pt-4">
            <div>
              <span className="text-2xl font-bold text-gray-900">
                {user.posts}
              </span>
              <p className="text-gray-500">Post</p>
            </div>
            <div>
              <span className="text-2xl font-bold text-gray-900">
                {user.followers}
              </span>
              <p className="text-gray-500">Followers</p>
            </div>
            <div>
              <span className="text-2xl font-bold text-gray-900">
                {user.following}
              </span>
              <p className="text-gray-500">Following</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
