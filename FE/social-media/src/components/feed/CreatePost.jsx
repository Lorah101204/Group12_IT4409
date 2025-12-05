// src/components/feed/CreatePost.jsx
import { useState } from "react";
import Avatar from "../common/Avatar";
import { userData1 } from "../../assets/fake-data/data.js";

export default function CreatePost({ onCreate }) {
  const [text, setText] = useState("");

  function handleSubmit() {
    if (!text.trim()) return;
    const newPost = {
      id: Date.now(),
      user: userData1,
      content: text,
      img: null,
      post_type: "text",
      likes: [],
      comments: [],
      shares: [],
      created_at: new Date().toISOString(),
    };
    if (typeof onCreate === "function") onCreate(newPost);
    setText("");
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
      <div className="flex gap-3">
        <Avatar size="md" />
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Bạn đang nghĩ gì?"
          className="flex-1 bg-gray-100 rounded-full px-6 py-3 outline-none focus:bg-gray-50 transition"
        />
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-600 transition"
        >
          Đăng
        </button>
      </div>
    </div>
  );
}
