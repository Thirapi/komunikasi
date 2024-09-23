import Link from 'next/link'

export default function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950">
      <div className="bg-gray-800 p-6 rounded-lg w-full max-w-md border-solid border-slate-400 border">
        <h1 className="text-2xl text-white font-bold">Register</h1>
        {/* <span className="text-red-300">error</span> */}
        <hr className="mb-4 border-slate-400" />
        <form>
          <div className="mb-4">
            <label className="block text-white">Username</label>
            <input
              type="text"
              className="w-full p-2 bg-transparent text-white border border-gray-300 rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block  text-white">Password</label>
            <input
              type="password"
              className="w-full p-2 border bg-transparent text-white border-gray-300 rounded-lg"
            />
          </div>
          <div className="mb-6">
            <label className="block  text-white">Confirm Password</label>
            <input
              type="password"
              className="w-full p-2 border bg-transparent text-white border-gray-300 rounded-lg"
            />
          </div>
          <button className="w-full text-indigo-400 font-semibold py-2 px-4 rounded-lg bg-indigo-600 bg-opacity-30 hover:bg-opacity-50 bg-blur-md border-indigo-600 border transition duration-300">
            Register
          </button>
          <div class="mt-2 text-white text-start">
            <p class="text-sm">Already have an account?  
              <Link href="./" class="text-blue-500 hover:text-blue-700"> Sign in here.</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
