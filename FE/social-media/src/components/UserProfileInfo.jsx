// src/components/profile/ProfileHeader.jsx
import Avatar from "./common/Avatar";
import { FiEdit2 } from "react-icons/fi";

const UserProfileInfo = ({ user, setShowEdit, profileId }) => {
  return (
    <div className="relative bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden">
      <div className="flex flex-col justify-center gap-2">
        {/* Cover Photo */}
        <div className="h-64 md:h-70 lg:h-80">
          <img
            src={user.cover}
            alt="Cover"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="mx-auto relative -top-15 md:absolute md:top-54 md:left-8 lg:top-64  rounded-full border-2 border-white shadow-lg">
          <Avatar src={user.avatar} size="xl" />
        </div>

        <div className="px-32 pb-6 -mt-15 md:mt-0 md:relative md:left-12">
          {/* User Name and Edit Button */}
          <div className="flex flex-col md:flex-row items-center md:items-end gap-4">
            <div className="text-center md:text-left flex-1">
              <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-1">
                {user.name}
              </h1>
              {user.username && (
                <p className="text-gray-500 text-sm md:text-base">
                  @{user.username}
                </p>
              )}
            </div>

            {/* Edit Button */}
            {!profileId && (
              <button
                onClick={() => setShowEdit(true)}
                className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-200 transition text-sm cursor-pointer"
              >
                <FiEdit2 />
                <span>Edit</span>
              </button>
            )}
          </div>

          {/* Bio */}
          <p className=" mt-2 md:mt-4 text-lg text-gray-700 text-center md:text-left">
            {user.bio}
          </p>

          {/* Stats */}
          <div className="flex justify-center md:justify-start gap-8  mt-4 lg:mt-6 text-center border-t border-neutral-400 pt-4">
            <div>
              <span className="text-2xl font-bold text-gray-900">
                {user.posts ? user.posts.length : 0}
              </span>
              <p className="text-gray-500">Post</p>
            </div>
            <div>
              <span className="text-2xl font-bold text-gray-900">
                {user.followers ? user.followers.length : 0}
              </span>
              <p className="text-gray-500">Followers</p>
            </div>
            <div>
              <span className="text-2xl font-bold text-gray-900">
                {user.following ? user.following.length : 0}
              </span>
              <p className="text-gray-500">Following</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileInfo;
