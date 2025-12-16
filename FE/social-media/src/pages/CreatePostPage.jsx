import React, { useState, useEffect } from "react";
import { userData1 } from "../assets/fake-data/data";
import Layout from "../components/layout/Layout";
import Loading from "../components/Loading";
import Avatar from "../components/common/Avatar";
import { FiImage } from "react-icons/fi";
import toast from "react-hot-toast";

const CreatePostPage = () => {
  const [content, setContent] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const user = userData1;

  const fetchData = async () => {
    setLoading(true);
    // Simulate API call delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  };
  const handleSumit = async () => {};
  useEffect(() => {
    fetchData();
  }, []);
  const handleContentChange = (e) => {
    setContent(e.target.value);
  };
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

          <div className="max-w-xl bg-white bg-white p-4 sm:p-8 sm:pb-3 rounded-xl shadow-md space-y-4">
            <div className="flex items-center gap-3">
              <Avatar size="md" user={user.avatar} />
              <div>
                <h2 className="font-semibold">{user.name}</h2>
                <p className="text-sm text-gray-500">@{user.username}</p>
              </div>
            </div>
            <div className="">
              <textarea
                name="content"
                id=""
                className="w-full resize-none max-h-20 mt-4 text-sm outline-none placeholder-gray-400"
                placeholder="What's on your mind?"
                onChange={handleContentChange}
                value={content}
              ></textarea>
            </div>
            {images.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {images.map((img, idx) => (
                  <div key={idx} className="relative group">
                    <img
                      src={URL.createObjectURL(img)}
                      className=" h-20 object-cover rounded-md"
                      alt=""
                    />
                    <div
                      onClick={() =>
                        setImages(images.filter((_, index) => index !== idx))
                      }
                      className="absolute hidden group-hover:flex justify-center items-center top-0 right-0 bottom-0 left-0 bg-black/40 rounded-md cursor-pointer"
                    >
                      <span className="text-white text-lg font-bold w-6 h-6">
                        X
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="flex items-center justify-between pt-3 border-t border-gray-300">
              <label
                htmlFor="images"
                className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 transition cursor-pointer"
              >
                <FiImage size={22} />
                Add Images
              </label>
              <input
                type="file"
                id="images"
                hidden
                multiple
                accept="image/*"
                onChange={(e) =>
                  setImages([...images, ...Array.from(e.target.files)])
                }
              />
              <button
                disabled={loading}
                onClick={() =>
                  toast.promise(
                    handleSumit(), {
                    loading: "Uploading post...",
                    success: <p>Post published successfully!</p>,
                    error: <p>Failed to publish post.</p>,
                  })
                }
                className="text-sm bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 active:scale-95 transition text-white font-medium px-8 py-2 rounded-md cursor-pointer"
              >
                Publish Post
              </button>
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </Layout>
  );
};

export default CreatePostPage;
