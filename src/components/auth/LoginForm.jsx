import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PasswordInput from "../inputs/PasswordInput";
import GoogleIcon from "../icons/GoogleIcon";
import GithubIcon from "../icons/GithubIcon";

export default function LoginForm({ onSwitch }) {
  const [email, setEmail] = useState("");

  const [rememberMe, setRememberMe] = useState(false);

  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) return toast.error("Please fill in both fields");
    toast.success("Login complete 🚀");
    console.log("Login:", { email, password });
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
      <h2 className="text-2xl font-bold text-center text-blue-600 mb-2">
        Welcome Back
      </h2>
      <p className="text-center text-gray-600 mb-6">
        Please enter your credentials to continue.
      </p>

      <label className="block  text-blue-600 text-sm font-medium mb-1">
        Email
      </label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full mb-4 border border-gray-300 px-3 py-2 rounded-lg transition-transform duration-200 focus:border-indigo-500 focus:bg-white focus:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-200"
        placeholder="Enter email address"
      />

      <label className="block text-sm font-medium  text-blue-600 mb-1">
        Password
      </label>
      <PasswordInput
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password"
      />
      <div className="flex items-center justify-between text-sm mt-6 mb-4">
        <label className="flex items-center text-gray-600">
          <input
            type="checkbox"
            className="mr-2"
            checked={rememberMe}
            onChange={() => setRememberMe(!rememberMe)}
          />
          Remember me
        </label>
        <a href="#" className="text-blue-600 hover:underline">
          Forgot password?
        </a>
      </div>

      <button
        type="submit"
        onClick={handleSubmit}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 mb-4"
      >
        Login
      </button>

      <div className="flex items-center my-6">
        <div className="flex-1 h-px bg-gray-200"></div>
        <span className="px-4 text-sm text-gray-500">Or continue with</span>
        <div className="flex-1 h-px bg-gray-200"></div>
      </div>

      <div className="flex justify-between gap-4 mb-6">
        <button
          type="button"
          className="w-1/2 flex items-center justify-center gap-2 bg-red-500 text-white py-2 rounded hover:bg-red-600 transition-colors"
          onClick={() => toast.success("Login Via Google!")}
        >
          <GoogleIcon /> Google
        </button>
        <button
          type="button"
          className="w-1/2 flex items-center justify-center gap-2 bg-gray-800 text-white py-2 rounded hover:bg-gray-900 transition-colors"
          onClick={() => toast.success("Login Via GitHub!")}
        >
          <GithubIcon /> GitHub
        </button>
      </div>

      <div className="text-center text-sm text-gray-600">
        Don't have an account?{" "}
        <button
          onClick={onSwitch}
          className="text-blue-600 hover:underline font-medium"
        >
          Sign up
        </button>
      </div>
    </div>
  );
}
