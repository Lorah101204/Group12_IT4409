// src/pages/ProfilePage.jsx
import Layout from "../components/layout/Layout";
import ProfileHeader from "../components/profile/ProfileHeader";
import FeedList from "../components/feed/FeedList";
import ava from "../assets/img/ava.jpg";
import cover from "../assets/img/cover.jpg";

export default function Profile() {
  const user = {
    name: "Hùng Phan",
    username: "@hungfan16",
    bio: "Hi there! Let add friend with me",
    avatar: ava,
    cover: cover,
    posts: 2,
    followers: 3,
    following: 6,
  };

  return (
    <Layout>
      <div className="max-w-8xl mx-auto  px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">
          <div className="lg:col-span-8">
            <ProfileHeader user={user} />

            {/* User posts */}
            <div className="mt-6">
              <FeedList />
            </div>
          </div>

          {/* Right column left as empty space to match design proportions */}
          <div className="hidden lg:block lg:col-span-4"></div>
        </div>
      </div>
    </Layout>
  );
}
