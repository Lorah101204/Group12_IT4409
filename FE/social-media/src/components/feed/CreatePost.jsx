// src/components/feed/CreatePost.jsx
import Avatar from "../common/Avatar";

export default function CreatePost() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
      <div className="flex gap-3">
        <Avatar size="md" />
        <input
          type="text"
          placeholder="Bạn đang nghĩ gì?"
          className="flex-1 bg-gray-100 rounded-full px-6 py-3 outline-none focus:bg-gray-50 transition"
        />
        <button className="bg-blue-500 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-600 transition">
          Đăng
        </button>
      </div>
    </div>
  );
}
