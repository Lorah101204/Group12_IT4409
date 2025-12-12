// src/pages/ProfilePage.jsx
import Layout from "../components/layout/Layout";
import UserProfileInfo from "../components/UserProfileInfo";
import { userData1, userData2, userData3 } from "../assets/fake-data/data";
import { postsData } from "../assets/fake-data/data";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import PostCard from "../components/feed/PostCard";

export default function Profile() {
  const { profileId } = useParams();
  const [user, setUser] = useState(null);
  const [userPosts, setUserPosts] = useState([]);
  const [showEdit, setShowEdit] = useState(false);

  const fetchUser = async () => {
    setUser(userData1);
    setUserPosts(postsData.filter((post) => post.user.id === userData1.id));
  };
  // Simulate async data fetching with a delay
  const simulateFetch = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    await fetchUser();
  };
  useEffect(() => {
    simulateFetch();
  }, [profileId]);
  return (
    <Layout>
      {user ? (
        <div className="max-w-5xl mx-auto px-4 py-6">
          <UserProfileInfo
            user={user}
            profileId={profileId}
            setShowEdit={setShowEdit}
          />
          <div className="mt-6">
            {userPosts.length === 0 ? (
              <div className="bg-white rounded-xl p-6 border border-gray-200 text-gray-500">
                Người dùng chưa có bài viết nào.
              </div>
            ) : (
              userPosts.map((post, i) => <PostCard key={i} post={post} />)
            )}
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </Layout>
  );
}
