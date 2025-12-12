// src/pages/FeedPage.jsx
import { use, useState } from "react";
import Layout from "../components/layout/Layout";
import PostCard from "../components/feed/PostCard";
import RecentMessages from "../components/chat/RecentMessages";
import { postsData } from "../assets/fake-data/data";
import Loading from "../components/Loading";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  //giả lập fetch posts
  const fetchPosts = async () => {
    setLoading(true);
    setTimeout(() => {
      setPosts(postsData);
      setLoading(false);
    }, 1000);
  };

  useState(() => {
    fetchPosts();
  }, []);

  return (
    <Layout>
      {!loading ? (
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* List Post */}
            <div className="lg:col-span-8 space-y-6">
              {posts.length === 0 ? (
                <div className="bg-white rounded-xl p-6 border border-gray-200 text-gray-500">
                  Chưa có bài viết nào.
                </div>
              ) : (
                posts.map((post, i) => <PostCard key={i} post={post} />)
              )}
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
      ) : (
        <Loading />
      )}
    </Layout>
  );
};

export default Feed;
