"use client";

import { LogOutIcon, MessageCircle, SkipBack } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { FaTachometerAlt, FaProjectDiagram, FaTools, FaCog } from "react-icons/fa";
import { MdLogout } from "react-icons/md";

export default function AdminSidebar() {
  const router = useRouter();
  const handleLogout = () => {
    
    document.cookie = "admin=false; path=/";
    router.push("/");
  }

  const pathname = usePathname();

  const menu = [
    {
      name: "Dashboard",
      path: "/admin/dashboard",
      icon: <FaTachometerAlt />,
    },
    {
      name: "Skill",
      path: "/admin/skill",
      icon: <FaTools />,
    },
    {
      name: "Project",
      path: "/admin/project",
      icon: <FaProjectDiagram />,
    },
    {
      name: "Message",
      path: "/admin/message",
      icon: <MessageCircle />,
    },
    {
      name: "Setting",
      path: "/admin/setting",
      icon: <FaCog />,
    },
  ];



  return (
    <div className="w-64 h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white fixed left-0 top-0 shadow-xl">

      {/* Logo */}
      <div className="p-6 text-2xl font-bold border-b border-gray-700">
        Admin Panel
      </div>

      {/* Menu */}
      <ul className="mt-6 space-y-2">
        {menu.map((item, index) => (
          <li key={index}>
            <Link
              href={item.path}
              className={`flex items-center gap-3 px-6 py-3 mx-3 rounded-lg transition duration-200
              ${pathname === item.path
                  ? "bg-blue-600 shadow-lg"
                  : "hover:bg-gray-700"
                }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span className="text-md">{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>

      {/* Bottom */}
      <div className="absolute bottom-5 right-6 text-sm text-gray-400">
        {/* ©️ 2026 Admin */}
        <button className="font-bold text-red-700 text-3xl p-4 font-bold cursor-pointer" onClick={handleLogout}><MdLogout /></button>
      </div>
    </div>
  );
}