import Header from "./Header";
import Sidebar from "./Sidebar";
import { userData1 } from "../../assets/fake-data/data";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50 ">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 mx-auto md:ml-64 lg:ml-70 top-15 relative">
          {children}
        </main>
      </div>
    </div>
  );
}
