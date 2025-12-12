import ava1 from "../img/ava.jpg";
import cover1 from "../img/cover.jpg";
import img1 from "../img/meow.png";
import img2 from "../img/nhuocnam.png";
import img3 from "../img/lytuan.png";

import { FiHome, FiUser, FiUsers, FiSearch } from "react-icons/fi";

export const menuItemDatas = [
  {
    to: "/feed",
    Icon: FiHome,
    label: "Feed",
  },
  {
    to: "/profile",
    Icon: FiUser,
    label: "Profile",
  },
  {
    to: "/connections",
    Icon: FiUsers,
    label: "Connections",
  },
  {
    to: "/discover",
    Icon: FiSearch,
    label: "Discover",
  },
];
export const userData2 = {
  id: 2,
  name: "Quân Nguyễn",
  username: "quannguyen22",
  avatar: ava1,
  cover: cover1,
  posts: [],
  followers: [],
  followings: [],
  connections: [],
  pendings: [],
  bio: "Hi there! Let add friend with me",
};
export const userData3 = {
  id: 3,
  name: "Khải Flo",
  username: "khaiflo33",
  avatar: ava1,
  cover: cover1,
  posts: [],
  followers: [],
  followings: [],
  connections: [],
  pendings: [],
  bio: "Hi there! Let add friend with me",
};

export const userData1 = {
  id: 1,
  name: "Hùng Phan",
  username: "hungfan16",
  avatar: ava1,
  cover: cover1,
  posts: [],
  followers: [userData2, userData3],
  followings: [userData2, userData3],
  connections: [userData2, userData3],
  pendings: [userData2, userData3],
  bio: "Hi there! Let add friend with me",
};

export const postsData = [
  {
    id: 1,
    user: userData1,
    content:
      '"Mèo" (Meo) là loài động vật có vú ăn thịt nhỏ, được thuần hóa, sống gần gũi với con người hàng ngàn năm, vừa làm thú cưng vừa săn mồi, có nhiều giống loài đa dạng (lông, đuôi, màu sắc), cực kỳ linh hoạt, nhạy bén và mang nhiều ý nghĩa văn hóa, tâm linh, là linh vật Mão trong 12 con giáp Việt Nam. Chúng có giác quan nhạy bén, khả năng giữ thăng bằng, dự báo thiên tai và có nhiều hành vi đặc trưng như dậm chân hay chôn thức ăn. "',
    image: [img1, img2, img3],
    post_type: "text_with_image",
    likes: [],
    comments: [],
    shares: [],
    created_at: "2025-12-08T10:00:00Z",
    updated_at: "2025-12-08T10:00:00Z",
  },
  {
    id: 2,
    user: userData2,
    content: "This is my $$##first post!",
    image: [img2],
    post_type: "text_with_image",
    likes: [],
    comments: [],
    shares: [],
    created_at: "2025-12-08T10:00:00Z",
    updated_at: "2025-12-08T10:00:00Z",
  },
  {
    id: 3,
    user: userData3,
    content: "This is my first post!",
    image: null,
    post_type: "text",
    likes: [],
    comments: [],
    shares: [],
    created_at: "2025-12-08T10:00:00Z",
    updated_at: "2025-12-08T10:00:00Z",
  },
  {
    id: 4,
    user: userData3,
    content: "This is my first post!",
    image: [img3],
    post_type: "text_with_image",
    likes: [],
    comments: [],
    shares: [],
    created_at: "2025-12-08T10:00:00Z",
    updated_at: "2025-12-08T10:00:00Z",
  },
];

export const connectionsData = [userData2, userData3];
