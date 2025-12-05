// src/pages/FeedPage.jsx
import { useState } from "react";
import Layout from "../components/layout/Layout";
import FeedList from "../components/feed/FeedList";
import CreatePost from "../components/feed/CreatePost";
import RecentMessages from "../components/chat/RecentMessages";
import img from "../assets/img/lytuan.png";
import img2 from "../assets/img/nhuocnam.png";
import img3 from "../assets/img/meow.png";
import { postsData } from "../assets/fake-data/data";

export default function FeedPage() {
  const [posts, setPosts] = useState(postsData);

  function handleCreate(newPost) {
    const postWithTime = { ...newPost, time: "vừa xong" };
    setPosts((prev) => [postWithTime, ...prev]);
  }

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-6 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Center Feed */}
          <div className="lg:col-span-8 space-y-6">
            <CreatePost onCreate={handleCreate} />
            <FeedList posts={posts} />
          </div>

          {/* Right Sidebar - placeholder + messages */}
          <div className="hidden lg:block lg:col-span-4 space-y-6 lg:sticky lg:top-20 ml-4">
            {/* Top placeholder card (matches empty panel in design) */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 h-40"></div>

            {/* Recent messages panel */}
            <RecentMessages />
          </div>
        </div>
      </div>
    </Layout>
  );
}
