"use client";
import { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`https://msg-api-eight.vercel.app/api/users/login`, { username, password });
      // const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/users/login`, { username, password });

      const { token } = response.data;
      localStorage.setItem('token', token); // Simpan token di localStorage
      router.push('/app');
    } catch (error) {
      console.error('Error:', error.response?.data);
      setError(error.response?.data?.message || 'Error logging in');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950">
      <div className="bg-gray-800 p-6 rounded-lg w-full max-w-md border-solid border-slate-400 border">
        <h1 className="text-2xl text-white font-bold">Login</h1>
        {error && <span className="text-red-300">{error}</span> }
        <hr className="mb-4 border-slate-400" />
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-white">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-2 bg-transparent text-white border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block  text-white">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border bg-transparent text-white border-gray-300 rounded-lg"
              required
            />
          </div>
          <button type="submit" className="w-full text-indigo-400 font-semibold py-2 px-4 rounded-lg bg-indigo-600 bg-opacity-30 hover:bg-opacity-50 bg-blur-md border-indigo-600 border transition duration-300">
            Login
          </button>
          <div className="mt-2 text-white text-start">
            <p className="text-sm">Don&apos;t have an account? 
              <Link href="/signup" className="text-blue-500 hover:text-blue-700"> Sign up now.</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
