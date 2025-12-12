import React from "react";
import { userData1 } from "../assets/fake-data/data";
import Avatar from "./common/Avatar";

const UserCard = ({ user }) => {
  const currentUser = userData1;
  const handleFollow = async () => {
    // Logic to follow the user
  };
  const handleConnectRequest = async () => {
    // Logic to send connection request
  };
  return (
    <div
      key={user.id}
      className="p-4 pt-4 flex flex-col justify-between w-72 shadow border border-gray-200 rounded-md"
    >
      <div className="text-center flex flex-col items-center">
        <div className="">
          <Avatar size="lg" src={user.avatar} />
        </div>

        <p className="mt-4 font-semibold">{user.name}</p>
        {user.username && (
          <p className="font-light text-gray-500">@{user.username}</p>
        )}
        {user.bio && (
          <p className="mt-2 text-center text-sm px-4 text-gray-600">
            {user.bio}
          </p>
        )}
      </div>

      <div className="flex items-center justify-center gap-2 mt-4 text-xs text-gray-600">
        <div className="flex items-center gap-1 border border-gray-300 rounded-full px-3 py-1">
          <span>{user.followers.length ? user.followers.length : 0}</span>{" "}
          Followers
        </div>
        <div className="flex items-center gap-1 border border-gray-300 rounded-full px-3 py-1">
          <span>{user.followings.length ? user.followings.length : 0}</span>{" "}
          Following
        </div>
      </div>
    </div>
  );
};

export default UserCard;
