// src/components/auth/SignUpForm.jsx
import React, { useState } from "react";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link } from "react-router-dom";

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    birthDate: "",
    gender: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Mật khẩu không khớp!");
      return;
    }
    if (!formData.birthDate) {
      alert("Vui lòng chọn ngày sinh!");
      return;
    }
    if (!formData.gender) {
      alert("Vui lòng chọn giới tính!");
      return;
    }
    console.log("Đăng ký thành công:", formData);
    // Gửi dữ liệu đến backend
  };

  return (
    <div className="w-full max-w-xs sm:max-w-sm mx-auto">
      <h3 className="text-base sm:text-lg font-medium text-gray-700 mb-5 text-center lg:text-left">
        Create Account
      </h3>

      <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
        {/* Họ và tên */}
        <input
          type="text"
          name="fullName"
          placeholder="Họ và tên"
          value={formData.fullName}
          onChange={handleChange}
          className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          required
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          required
        />

        {/* Ngày sinh */}
        <div>
          <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
            Ngày sinh
          </label>
          <input
            type="date"
            name="birthDate"
            value={formData.birthDate}
            onChange={handleChange}
            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            required
          />
        </div>

        {/* Mật khẩu */}
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Mật khẩu"
            value={formData.password}
            onChange={handleChange}
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

        {/* Xác nhận mật khẩu */}
        <div className="relative">
          <input
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            placeholder="Xác nhận mật khẩu"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 pr-10 sm:pr-12 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            required
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
          >
            {showConfirmPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
          </button>
        </div>

        {/* Giới tính */}
        <div>
          <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
            Giới tính
          </label>
          <div className="flex gap-4 sm:gap-6 text-sm ">
            {["Nam", "Nữ", "Khác"].map((option) => (
              <div
                key={option}
                className=" flex items-center h-10 w-full pl-2 border border-gray-300 rounded-lg"
              >
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="gender"
                    value={option}
                    checked={formData.gender === option}
                    onChange={handleChange}
                    className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600 focus:ring-blue-500 "
                    required
                  />
                  <span className="text-gray-700">{option}</span>
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Đồng ý điều khoản */}
        <label className="flex items-start space-x-2 text-xs sm:text-sm text-gray-600">
          <input
            type="checkbox"
            className="mt-0.5 w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600 rounded"
            required
          />
          <span>
            Tôi đồng ý với{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Điều khoản dịch vụ
            </a>{" "}
            và{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Chính sách bảo mật
            </a>
          </span>
        </label>

        {/* Nút Đăng ký */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2.5 sm:py-3 rounded-lg font-medium text-sm sm:text-base hover:bg-blue-700 transition shadow-md"
        >
          Tạo tài khoản
        </button>
      </form>

      <div className="my-4 sm:my-6 text-center text-xs sm:text-sm text-gray-500">
        Hoặc
      </div>

      {/* Social Signup */}
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

      {/* Đã có tài khoản */}
      <div className="mt-6 sm:mt-8 text-center text-xs sm:text-sm">
        <span className="text-gray-600">Đã có tài khoản? </span>
        <Link
          to="/signin"
          className="text-blue-600 font-medium hover:underline"
        >
          Đăng nhập ngay
        </Link>
      </div>
    </div>
  );
};

export default SignUpForm;
