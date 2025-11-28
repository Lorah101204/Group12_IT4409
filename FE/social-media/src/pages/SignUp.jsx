// src/pages/SignUp.jsx
import React from "react";
import SignUpForm from "../components/auth/SignUpForm";

const SignUp = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#E7F2FE] to-[#B6D8FB] flex items-center justify-center p-4 md:p-6 lg:p-8">
      <div className="flex flex-col lg:flex-row w-full max-w-6xl bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Phần trái - Chào mừng */}
        <div className="w-full lg:w-1/2 p-8 sm:p-10 lg:p-16 text-center lg:text-left bg-gradient-to-b from-blue-50 to-white order-1 lg:order-1">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-600 mb-3 sm:mb-4">
            Social Media
          </h1>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-800 mb-2 sm:mb-3">
            Chào mừng bạn mới
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Tạo tài khoản để kết nối với bạn bè, chia sẻ khoảnh khắc và khám phá
            cộng đồng.
          </p>
        </div>

        {/* Phần phải - Form đăng ký */}
        <div className="w-full lg:w-1/2 p-6 sm:p-8 lg:p-12 bg-white flex items-center justify-center order-2 lg:order-2">
          <SignUpForm />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
