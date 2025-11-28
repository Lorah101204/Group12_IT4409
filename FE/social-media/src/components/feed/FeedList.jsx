// src/components/feed/FeedList.jsx
import PostCard from "./PostCard";
import img from "../../assets/img/lytuan.png";
import img2 from "../../assets/img/nhuocnam.png";
import img3 from "../../assets/img/meow.png";

const dummyPosts = [
  {
    name: "Hùng Phan",
    username: "@hungfan16",
    time: "36 minutes ago",
    content:
      "Mèo là động vật có vú, nhỏ nhắn và chuyên ăn thịt, sống chung với loài người... Meo đã sống gần với loài người ít nhất 9.500 năm, và hiện nay chúng là con vật cưng phổ biến nhất trên thế giới.",
    image: img,
  },
  {
    name: "Hùng Phan",
    username: "@hungfan16",
    time: "36 minutes ago",
    content:
      "Mèo là động vật có vú, nhỏ nhắn và chuyên ăn thịt, sống chung với loài người... Meo đã sống gần với loài người ít nhất 9.500 năm, và hiện nay chúng là con vật cưng phổ biến nhất trên thế giới.",
    image: img2,
  },
  {
    name: "Hùng Phan",
    username: "@hungfan16",
    time: "36 minutes ago",
    content:
      "Mèo là động vật có vú, nhỏ nhắn và chuyên ăn thịt, sống chung với loài người... Meo đã sống gần với loài người ít nhất 9.500 năm, và hiện nay chúng là con vật cưng phổ biến nhất trên thế giới.",
    image: img3,
  },
  // Thêm bài khác...
];

export default function FeedList() {
  return (
    <div className="space-y-6">
      {dummyPosts.map((post, i) => (
        <PostCard key={i} post={post} />
      ))}
    </div>
  );
}
