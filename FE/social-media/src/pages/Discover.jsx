import { useState } from "react";
import Layout from "../components/layout/Layout";
import Loading from "../components/Loading";
import { FiSearch } from "react-icons/fi";
import UserCard from "../components/UserCard";
import { userData1, userData2, userData3 } from "../assets/fake-data/data";

const Discover = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([userData2, userData3]);
  const [input, setInput] = useState("");

  const handleSearch = async (e) => {
    if (e.key === "Enter") {
      setUsers([]);
      setLoading(true);
      //fake fetch
      setTimeout(() => {
        setUsers([]);
        setLoading(false);
      }, 1000);
    }
  };

  return (
    <Layout>
      {!loading ? (
        <div className="max-w-5xl mx-auto px-4 py-6">
          {/*Title*/}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-slate-900 mb-2">
              Connections
            </h1>
            <p className="text-slate-600">
              Connect with amazing people and grow your network.
            </p>
          </div>

          {/*Search bar*/}
          <div className="mb-8 shadow-md rounded-lg border border-slate-200/60 bg-white">
            <div className="p-6">
              <div className="relative">
                <div className="absolute left-4 top-1/2 w-5 h-5 transform -translate-y-1/2 text-slate-400">
                  <FiSearch size={22} />
                </div>
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyUp={handleSearch}
                  placeholder="Search people by name, username, email,..."
                  className="pl-12 sm:pl-14 py-3 w-full border border-slate-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 max-sm:text-sm transition"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-6">
            {users.map((user) => (
              <UserCard key={user.id} user={user} />
            ))}
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </Layout>
  );
};

export default Discover;
