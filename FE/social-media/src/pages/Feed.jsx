// src/pages/FeedPage.jsx
import Layout from "../components/layout/Layout";
import FeedList from "../components/feed/FeedList";
import CreatePost from "../components/feed/CreatePost";
import RecentMessages from "../components/chat/RecentMessages";

export default function FeedPage() {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-6 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Center Feed */}
          <div className="lg:col-span-8 space-y-6">
            {/* <CreatePost /> */}
            <FeedList />
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
