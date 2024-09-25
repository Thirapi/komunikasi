import Link from "next/link";
import { LuClover } from "react-icons/lu";
import { HiOutlineLogout } from "react-icons/hi";

export default function SideBar () {
    return (
      <aside className="hidden sm:flex bg-gray-950 bg-opacity-50 backdrop-blur-md border-r border-solid border-slate-400 w-12 h-screen p-2 flex-col">
        <div className="flex items-center">
          <Link href="/app">
          <LuClover className="text-green-400 text-3xl" />
          </Link>
        </div>
        <div className="flex flex-grow items-center justify-center">
          <h1 className="transform rotate-90 text-white font-semibold text-2xl tracking-widest">~komunikasi</h1>
        </div>
        <div className="flex items-center">
          <Link href="/logout" className="bg-red-500 bg-opacity-30 border hover:bg-opacity-50 border-solid border-red-800 backdrop-blur-md rounded-lg">
              <HiOutlineLogout className="text-red-500 text-3xl" />
          </Link>
        </div>
      </aside>
    )
}