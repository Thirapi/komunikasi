import React from "react";
import messages from "./dummy";
import { FiCornerUpLeft, FiSend, FiCornerDownRight } from "react-icons/fi";
import SideBar from "../_components/SideBar";
import Header from "../_components/Header";

export default function App() {

    return (
        <div className="min-h-screen overflow-hidden sm:flex items-center justify-center bg-black">
            <SideBar />
            <div className="text-white w-full mx-auto max-w-4xl h-screen pt-0 pr-8 pb-4 pl-8 rounded-b-xl border-solid border-slate-400 border-b border-l border-r bg-gray-950 flex flex-col">
                <div className="flex flex-1 flex-col overflow-hidden">
                <Header />
                    <div className="overflow-hidden flex-1 mb-4">
                    {messages.map((msg) => (
                        <div key={msg.id} className="mb-1 p-2 border-slate-400 border-b hover:bg-gray-900 transition duration-200">
                            <div className="flex items-center mb-1">
                                <strong>{msg.username}</strong>
                                <span className="text-gray-300 text-sm ml-2">{msg.created_at}</span>
                                <button className="text-sm text-white flex items-center">
                                <FiCornerUpLeft className="ml-4" />    
                                balas
                                </button>
                            </div>
                            {msg.reply_to_message && (
                                <div className="py-1 rounded mb-2 text-sm flex items-center bg-gray-900">
                                    <FiCornerDownRight className="mr-2" />
                                    <strong className="mr-1">{msg.reply_to_username}</strong>
                                    <span>{msg.reply_to_message}</span>
                                </div>
                            )}
                            <div>{msg.message}</div>
                        </div>
                    ))}
                    </div>
                </div>
                <form className="w-full mx-auto max-w-4xl flex items-center p-2">
                    <div className="relative flex-grow">                      
                        <input className="w-full px-4 py-2 pr-12 text-white bg-transparent rounded-full border-solid border-slate-400 border" />
                        <button className="bg-blue-500 bg-opacity-30 hover:bg-opacity-50 bg-blur-md border-solid border-slate-400 border absolute right-1 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full"><FiSend /></button>
                    </div>
                </form>
            </div>
        </div>
    )
}
