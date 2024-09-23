import Link from "next/link"
import { LuClover } from "react-icons/lu";
import { HiOutlineLogout } from "react-icons/hi";

export default function Header () {
    return (
        <header className="sm:hidden bg-gray-950 rounded-b-xl border-solid border-slate-400 border-b border-l border-r">
            <nav className="container mx-auto p-4 flex justify-between items-center">
                <div>
                    <Link href="/app" className="flex items-center">
                        <LuClover className="text-green-400 text-3xl" />
                        <span className="text-white text-xl px-2">Komunikasi</span>
                    </Link>
                </div>
                <div>
                    <Link href="/logout" className="flex items-center bg-red-500 bg-opacity-30 border hover:bg-opacity-50 border-solid border-red-800 backdrop-blur-md rounded-lg">
                        <span className="text-red-500 px-2 text-md">Logout</span><HiOutlineLogout className="text-red-500 text-3xl" />
                    </Link>
                </div>
            </nav>
        </header>
    )
}