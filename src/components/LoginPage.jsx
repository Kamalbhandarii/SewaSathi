import React from "react";

function LoginPage({ togglePage }) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-96">
      <div className="text-center">
        <img
          src="https://via.placeholder.com/100x50?text=SewaSathi"
          alt="SewaSathi Logo"
          className="mx-auto mb-6"
        />
        <h2 className="text-2xl font-bold text-red-500 mb-4">Sign In</h2>
        <p className="text-gray-600">
          Don't have an account?{" "}
          <span
            className="text-red-500 cursor-pointer hover:underline"
            onClick={togglePage}
          >
            Sign Up
          </span>
        </p>
      </div>
      <form className="mt-6 flex flex-col gap-4">
        <input
          type="email"
          placeholder="Email or phone number"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
        />
        <a href="#forgot-password" className="text-sm text-red-500 hover:underline self-end">
          Forgot your password?
        </a>
        <button
          type="submit"
          className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
        >
          Sign In
        </button>
      </form>
      <p className="text-xs text-gray-500 mt-4 text-center">
        By clicking Sign In, you agree to the{" "}
        <a href="#terms" className="text-red-500 hover:underline">
          Terms of Service
        </a>{" "}
        and{" "}
        <a href="#privacy" className="text-red-500 hover:underline">
          Privacy Notice
        </a>.
      </p>

    </div>
  );
}

export default LoginPage;
