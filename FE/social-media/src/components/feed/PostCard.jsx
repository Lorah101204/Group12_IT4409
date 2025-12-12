// src/components/feed/PostCard.jsx
import {
  FiHeart,
  FiMessageCircle,
  FiShare2,
  FiMoreHorizontal,
} from "react-icons/fi";
import Avatar from "../common/Avatar";
import moment from "moment";
import { useState } from "react";
import { userData1 } from "../../assets/fake-data/data";

const PostCard = ({ post }) => {
  const [likes, setLikes] = useState(post.likes.length ? post.likes.length : 0);
  const currentUser = userData1;
  const handleLike = async () => {
    setLikes((prev) => prev + 1);
    // Here you can add logic to update like status in backend or global state
  };
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Avatar size="md" user={post.user.avatar} />
          <div>
            <h3 className="font-semibold">{post.user.name}</h3>
            <div className="text-sm text-gray-500 font-medium">
              @{post.user.username} • {moment(post.created_at).fromNow()}
            </div>
          </div>
        </div>

        <button className=" flex items-center p-3 rounded-full hover:bg-gray-200  transition ">
          <FiMoreHorizontal size={22} />
        </button>
      </div>
      <div className="space-y-4 mt-2 ">
        {/* Post Content */}
        {post.content && (
          <div
            className="text-gray-800 leading-relaxed text-sm whitespace-pre-line text-justify mb-4"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        )}

        {/* Post Image */}
        <div className="grid grid-cols-2 gap-2">
          {post.image &&
            post.image.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`post-${index}`}
                className={`w-full h-80 object-cover rounded-lg ${
                  post.image.length === 1 && "col-span-2 h-auto max-h-200"
                }`}
              />
            ))}
        </div>
      </div>

      <div className="pt-4 mt-4 border-t border-gray-300">
        <div className="flex items-center justify-around text-gray-600">
          <button
            className="flex items-center gap-2 cursor-pointer hover:text-red-500 transition"
            onClick={handleLike}
          >
            <FiHeart size={20} />
            <span>{likes}</span>
          </button>
          <button className="flex items-center gap-2 cursor-pointer hover:text-blue-500 transition">
            <FiMessageCircle size={20} /> <span>{post.comments.length}</span>
          </button>
          <button className="flex items-center gap-2 cursor-pointer hover:text-green-500 transition">
            <FiShare2 size={20} /> <span>{post.shares.length}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
