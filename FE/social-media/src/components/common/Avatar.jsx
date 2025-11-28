// src/components/common/Avatar.jsx
import avatar from "../../assets/img/ava.jpg";
export default function Avatar({ src = avatar, size = "md", className = "" }) {
  const sizeClass = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
    xl: "w-30 h-30",
  }[size];

  return (
    <div
      className={`${sizeClass} rounded-full overflow-hidden border-2 border-gray-200 ${className}`}
    >
      <img src={src} alt="avatar" className="w-full h-full object-cover" />
    </div>
  );
}
