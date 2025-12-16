import React, { useState,useEffect } from "react";
import Layout from "../components/layout/Layout";
import { userData1 } from "../assets/fake-data/data";
import { LuUser, LuUserCheck, LuUserPlus, LuUserPen } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import Avatar from "../components/common/Avatar";
import Loading from "../components/Loading";

const Connections = () => {
  const connections = userData1.connections;
  const pendings = userData1.pendings;
  const followers = userData1.followers;
  const followings = userData1.followings;

  //fake fetch data
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    // Simulate API call delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const navigate = useNavigate();
  const [currentTab, setCurrentTab] = useState("Followers");
  const dataArray = [
    { label: "Followers", value: followers, icon: LuUserCheck },
    { label: "Followings", value: followings, icon: LuUserPen },
    { label: "Connections", value: connections, icon: LuUser },
    { label: "Pendings", value: pendings, icon: LuUserPlus },
  ];
  return (
    <Layout>
      {!loading ? (
        <div className="max-w-5xl mx-auto px-4 py-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-slate-800 mb-2">
              Connections
            </h1>
            <p className="text-slate-600">
              Manage your network and discover new connections.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 mb-8">
            {dataArray.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center gap-1 border h-20 w-40 border-gray-200 shadow bg-white rounded-md"
              >
                <b>{item.value.length}</b>
                <p className="text-slate-600">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="inline-flex flex-wrap items-center border border-gray-200 rounded-md p-1 bg-white shadow-sms">
            {dataArray.map((tab) => (
              <button
                key={tab.label}
                className={`flex items-center px-3 py-1 text-sm rounded-md cursor-pointer transition-colors ${
                  currentTab === tab.label
                    ? "bg-white font-medium text-black"
                    : "text-gray-500 hover:text-black hover:bg-gray-100"
                }`}
              >
                <div
                  onClick={() => setCurrentTab(tab.label)}
                  className="flex items-center"
                >
                  <tab.icon className="w-4 h-4" />
                  <span className="ml-2">{tab.label}</span>
                </div>

                {tab.count !== undefined && (
                  <span className="ml-2 bg-gray-200 text-gray-700 text-xs font-medium px-2 py-0.5 rounded-full">
                    {tab.count}
                  </span>
                )}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap gap-6 mt-6">
            {(
              dataArray.find((item) => item.label === currentTab)?.value || []
            ).map((user) => (
              <div
                key={user.id}
                className="w-full max-w-88 flex gap-5 p-6 bg-white shadow rounded-md"
              >
                <Avatar size="md" src={user.avatar} />
                <div className="flex-1">
                  <p className="font-medium text-slate-700">{user.name}</p>
                  <p className=" text-slate-500">@{user.username}</p>
                  <p className="text-slate-500">{user.bio.slice(0, 30)}...</p>
                  <div className="flex max-sm:flex-col gap-2 mt-4">
                    {
                      <button
                        onClick={() => navigate(`/profile/${user.id}`)}
                        className="w-full p-2 text-sm rounded bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 active:scale-95 text-white cursor-pointer transition"
                      >
                        View Profile
                      </button>
                    }
                    {currentTab === "Followings" && (
                      <button className="w-full p-2 text-sm rounded bg-slate-100 hover:bg-slate-200 text-black active:scale-95 transition cursor-pointer">
                        Unfollow
                      </button>
                    )}
                    {currentTab === "Pendings" && (
                      <button className="w-full p-2 text-sm rounded bg-slate-100 hover:bg-slate-200 text-black active:scale-95 transition cursor-pointer">
                        Accept
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </Layout>
  );
};

export default Connections;
