// src/components/feed/FeedList.jsx
import PostCard from "./PostCard";

export default function FeedList({ posts = [] }) {
  return (
    <div className="space-y-6">
      {posts.length === 0 ? (
        <div className="bg-white rounded-xl p-6 border border-gray-200 text-gray-500">
          Chưa có bài viết nào.
        </div>
      ) : (
        posts.map((post, i) => <PostCard key={i} post={post} />)
      )}
    </div>
  );
}
