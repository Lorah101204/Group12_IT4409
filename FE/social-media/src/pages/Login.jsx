// src/pages/Login.jsx
import { useState } from "react";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import { FiEye, FiEyeOff } from "react-icons/fi";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Đăng nhập với:", { email, password });
    // Xử lý đăng nhập ở đây
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center p-4">
      <div className="flex flex-col lg:flex-row w-full max-w-6xl bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Phần trái - Chào mừng */}
        <div className="lg:w-1/2 p-10 lg:p-16 text-center lg:text-left bg-gradient-to-b from-blue-50 to-white">
          <h1 className="text-4xl lg:text-5xl font-bold text-blue-600 mb-4">
            Social Media
          </h1>
          <h2 className="text-2xl lg:text-3xl font-semibold text-gray-800 mb-3">
            Chào mừng trở lại
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Đăng nhập để kết nối với bạn bè, chia sẻ khoảnh khắc và khám phá nội
            dung.
          </p>
        </div>

        {/* Phần phải - Form đăng nhập */}
        <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
          <div className="max-w-sm mx-auto w-full">
            <h3 className="text-lg font-medium text-gray-700 mb-6 text-center lg:text-left">
              Sign in
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Email/Số điện thoại */}
              <div>
                <input
                  type="text"
                  placeholder="Nhập số điện thoại di động hoặc email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  required
                />
              </div>

              {/* Mật khẩu */}
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Nhập mật khẩu"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                </button>
              </div>

              {/* Nhớ mật khẩu & Quên mật khẩu */}
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 rounded"
                  />
                  <span>Nhớ mật khẩu</span>
                </label>
                <a href="#" className="text-blue-600 hover:underline">
                  Quên mật khẩu?
                </a>
              </div>

              {/* Nút Đăng nhập */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition duration-200"
              >
                Đăng nhập
              </button>
            </form>

            <div className="my-6 text-center text-sm text-gray-500">Hoặc</div>

            {/* Đăng nhập bằng Google/Facebook */}
            <div className="space-y-3">
              <button className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                <FaGoogle className="text-red-500" />
                <span>Đăng nhập bằng Google</span>
              </button>
              <button className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                <FaFacebookF className="text-blue-600" />
                <span>Đăng nhập bằng Facebook</span>
              </button>
            </div>

            <div className="mt-8 text-center">
              <button className="w-full bg-teal-500 text-white py-3 rounded-lg font-medium hover:bg-teal-600 transition duration-200">
                Tạo tài khoản mới
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
