import ava1 from "../img/ava.jpg";
import cover1 from "../img/cover.jpg";
import img1 from "../img/meow.png";
import img2 from "../img/nhuocnam.png";
import img3 from "../img/lytuan.png";

import { FiHome, FiUser, FiMessageCircle, FiUsers } from "react-icons/fi";

export const menuItemDatas = [
  {
    to: "/feed",
    icon: FiHome,
    label: "Feed",
  },
  {
    to: "/profile",
    icon: FiUser,
    label: "Profile",
  },
  {
    to: "/chat",
    icon: FiMessageCircle,
    label: "Message",
  },
  {
    to: "/connections",
    icon: FiUsers,
    label: "Connections",
  },
];
export const userData2 = {
  id: 2,
  name: "Quân Nguyễn",
  username: "@quannguyen22",
  avatar: ava1,
  cover: cover1,
  posts: [],
  followers: [],
  followings: [],
  bio: "Hi there! Let add friend with me",
};
export const userData3 = {
  id: 3,
  name: "Khải Flo",
  username: "@khaiflo33",
  avatar: ava1,
  cover: cover1,
  posts: [],
  followers: [],
  followings: [],
  bio: "Hi there! Let add friend with me",
};

export const userData1 = {
  id: 1,
  name: "Hùng Phan",
  username: "@hungfan16",
  avatar: ava1,
  cover: cover1,
  posts: [],
  followers: [userData2, userData3],
  followings: [],
  bio: "Hi there! Let add friend with me",
};

export const postsData = [
  {
    id: 1,
    user: userData1,
    time: "10 minutes ago",
    content: "This is my first post!",
    img: img1,
    post_type: "text_with_image",
    likes: [],
    comments: [],
    shares: [],
    created_at: "2024-06-01T10:00:00Z",
  },
  {
    id: 2,
    user: userData2,
    time: "20 minutes ago",
    content: "This is my first post!",
    img: img2,
    post_type: "text_with_image",
    likes: [],
    comments: [],
    shares: [],
    created_at: "2024-06-01T10:00:00Z",
  },
  {
    id: 3,
    user: userData3,
    time: "30 minutes ago",
    content: "This is my first post!",
    img: null,
    post_type: "text",
    likes: [],
    comments: [],
    shares: [],
    created_at: "2024-06-01T10:00:00Z",
  },
  {
    id: 4,
    user: userData3,
    time: "40 minutes ago",
    content: "This is my first post!",
    img: img3,
    post_type: "text_with_image",
    likes: [],
    comments: [],
    shares: [],
    created_at: "2024-06-01T10:00:00Z",
  },
];
