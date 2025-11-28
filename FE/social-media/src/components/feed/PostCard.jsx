// src/components/feed/PostCard.jsx
import { FiHeart, FiMessageCircle, FiShare2 } from "react-icons/fi";
import Avatar from "../common/Avatar";

const PostCard = ({ post }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="p-4">
        <div className="flex items-center gap-3">
          <Avatar size="md" />
          <div>
            <h3 className="font-semibold">{post.name}</h3>
            <p className="text-sm text-gray-500">{post.time}</p>
          </div>
        </div>
        <p className="mt-3 text-gray-800 leading-relaxed text-justify">
          {post.content}
        </p>
      </div>

      {post.image && (
        <img src={post.image} alt="post" className="w-full object-cover" />
      )}

      <div className="p-4 border-t border-gray-300">
        <div className="flex items-center justify-around text-gray-600">
          <button className="flex items-center gap-2 hover:text-red-500 transition">
            <FiHeart size={20} /> <span>0</span>
          </button>
          <button className="flex items-center gap-2 hover:text-blue-500 transition">
            <FiMessageCircle size={20} /> <span>0</span>
          </button>
          <button className="flex items-center gap-2 hover:text-green-500 transition">
            <FiShare2 size={20} /> <span>Chia sẻ</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
