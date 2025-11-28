// src/components/auth/LoginForm.jsx
import React, { useState } from "react";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Đăng nhập với:", { email, password });
  };

  return (
    <div className="w-full max-w-xs sm:max-w-sm mx-auto">
      <h3 className="text-base sm:text-lg font-medium text-gray-700 mb-5 text-center lg:text-left">
        Sign in
      </h3>

      <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
        {/* Email / SĐT */}
        <input
          type="text"
          placeholder="Số điện thoại hoặc email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          required
        />

        {/* Mật khẩu */}
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Mật khẩu"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 pr-10 sm:pr-12 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
          >
            {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
          </button>
        </div>

        {/* Nhớ mật khẩu & Quên */}
        <div className="flex flex-row sm:flex-row sm:items-center justify-between text-xs sm:text-sm gap-2 sm:gap-0">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600 rounded"
            />
            <span className="text-gray-700">Nhớ mật khẩu</span>
          </label>
          <a href="#" className="text-blue-600 hover:underline font-medium">
            Quên mật khẩu?
          </a>
        </div>

        {/* Nút Đăng nhập */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2.5 sm:py-3 rounded-lg font-medium text-sm sm:text-base hover:bg-blue-700 transition shadow-md"
        >
          Đăng nhập
        </button>
      </form>

      <div className="my-4 sm:my-6 text-center text-xs sm:text-sm text-gray-500">
        Hoặc
      </div>

      {/* Social Login */}
      <div className="space-y-2 sm:space-y-3">
        <button className="w-full flex items-center justify-center gap-2 sm:gap-3 px-3 sm:px-4 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition text-xs sm:text-base">
          <FaGoogle className="text-red-500 text-base sm:text-lg" />
          <span className="text-gray-700">Google</span>
        </button>
        <button className="w-full flex items-center justify-center gap-2 sm:gap-3 px-3 sm:px-4 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition text-xs sm:text-base">
          <FaFacebookF className="text-blue-600 text-base sm:text-lg" />
          <span className="text-gray-700">Facebook</span>
        </button>
      </div>

      {/* Tạo tài khoản */}
      <div className="mt-6 sm:mt-8 text-center">
        <button
          type="button"
          onClick={() => navigate("/signup")}
          className="w-full bg-teal-500 text-white py-2.5 sm:py-3 rounded-lg font-medium text-sm sm:text-base hover:bg-teal-600 transition shadow-md"
        >
          Tạo tài khoản mới
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
