// src/components/chat/RecentMessages.jsx
import Avatar from "../common/Avatar";

const messages = [
  { name: "Hùng Phan", message: "Hi!", time: "3 mins ago" },
  { name: "Hùng Phan", message: "Hi!", time: "3 mins ago" },
  { name: "Hùng Phan", message: "Hi!", time: "3 mins ago" },
];

export default function RecentMessages() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
      <h3 className="font-semibold text-gray-800 mb-4">Recent Messages</h3>
      <div className="space-y-3">
        {messages.map((msg, i) => (
          <div
            key={i}
            className="flex items-center gap-3 hover:bg-gray-50 p-2 rounded-lg transition"
          >
            <Avatar size="sm" />
            <div className="flex-1">
              <p className="font-medium text-sm">{msg.name}</p>
              <p className="text-xs text-gray-500">{msg.message}</p>
            </div>
            <span className="text-xs text-gray-400">{msg.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
