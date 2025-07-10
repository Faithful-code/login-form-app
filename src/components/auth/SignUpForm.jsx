import { useState } from "react";
import PasswordInput from "../inputs/PasswordInput";
import GoogleIcon from "../icons/GoogleIcon";
import GithubIcon from "../icons/GithubIcon";

export default function SignUpForm({ onSwitch }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fullName || !email || !password || !confirmPassword) {
      return alert("Please fill all fields");
    }
    if (password !== confirmPassword) {
      return alert("Passwords do not match");
    }
    if (!agreed) {
      return alert("You must agree to the Terms and Conditions");
    }

    console.log("Sign Up:", { fullName, email, password });
  };

  return (
    <div className="bg-white p-8 shadow-md w-full max-w-sm rounded-lg">
      <h2 className="text-2xl font-bold text-center text-blue-600 mb-2">
        Create an Account
      </h2>
      <p className="text-center text-gray-600 mb-6">
        Fill in your details to sign up.
      </p>

      <label className="block  text-blue-600 text-sm font-medium mb-1">
        Full Name
      </label>
      <input
        type="text"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        className="w-full mb-4 border border-gray-300 px-3 py-2 rounded-lg transition-transform duration-200 focus:border-indigo-500 focus:bg-white focus:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-200"
        placeholder="Enter full name"
      />

      <label className="block  text-blue-600 text-sm font-medium mb-1">
        Email Address
      </label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full mb-4 border border-gray-300 px-3 py-2 rounded-lg transition-transform duration-200 focus:border-indigo-500 focus:bg-white focus:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-200"
        placeholder="Enter email address"
      />

      <label className="block  text-blue-600 text-sm font-medium mb-1">
        Password
      </label>
      <PasswordInput
        name="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <label className="block  text-blue-600 text-sm font-medium mt-4 mb-1">
        Confirm Password
      </label>
      <PasswordInput
        name="confirmPassword"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />

      <label className="flex items-center text-sm text-gray-600 mt-4 mb-6">
        <input
          type="checkbox"
          checked={agreed}
          onChange={() => setAgreed(!agreed)}
          className="mr-2"
        />
        I agree to the{" "}
        <button type="button" className="text-blue-600 hover:underline ml-1">
          Terms and Conditions
        </button>
      </label>

      <button
        type="submit"
        onClick={handleSubmit}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 mb-4"
      >
        Sign Up
      </button>

      <div className="flex items-center my-6">
        <div className="flex-1 h-px bg-gray-200"></div>
        <span className="px-4 text-sm text-gray-500">Or sign up with</span>
        <div className="flex-1 h-px bg-gray-200"></div>
      </div>

      <div className="flex justify-between gap-4 mb-6">
        <button
          type="button"
          className="w-1/2 flex items-center justify-center gap-2 bg-red-500 text-white py-2 rounded hover:bg-red-600 transition-colors"
          onClick={() => alert("Google Signup")}
        >
          <GoogleIcon /> Google
        </button>
        <button
          type="button"
          className="w-1/2 flex items-center justify-center gap-2 bg-gray-800 text-white py-2 rounded hover:bg-gray-900 transition-colors"
          onClick={() => alert("GitHub Signup")}
        >
          <GithubIcon /> GitHub
        </button>
      </div>

      <div className="text-center text-sm text-gray-600">
        Already have an account?{" "}
        <button
          onClick={onSwitch}
          className="text-blue-600 hover:underline font-medium"
        >
          Login
        </button>
      </div>
    </div>
  );
}
