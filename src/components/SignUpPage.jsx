import React from "react";

function SignUpPage({ togglePage }) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-96">
      <div className="text-center">
        <img
          src="https://via.placeholder.com/100x50?text=SewaSathi"
          alt="SewaSathi Logo"
          className="mx-auto mb-6"
        />
        <h2 className="text-2xl font-bold text-red-500 mb-4">Sign Up</h2>
        <p className="text-gray-600">
          Already have an account?{" "}
          <span
            className="text-red-500 cursor-pointer hover:underline"
            onClick={togglePage}
          >
            Sign In
          </span>
        </p>
      </div>
      <form className="mt-6 flex flex-col gap-4">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
        />
        <button
          type="submit"
          className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUpPage;
