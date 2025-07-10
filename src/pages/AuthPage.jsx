import { useState } from "react";
import LoginForm from "../components/auth/LoginForm";
import SignUpForm from "../components/auth/SignUpForm";

export default function AuthPage() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleSwitch = (newState) => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsSignUp(newState);
      setIsAnimating(false);
    }, 200);
  };

  return (
    <div className="min-h-screen font-poppins flex items-center justify-center bg-gradient-to-r from-indigo-600 via-red-500 to-gray-800  px-1 py-4">
      <div
        className={`transition-all duration-500 ease-in-out ${
          isAnimating
            ? "opacity-0 transform translate-y-8"
            : "opacity-100 transform translate-y-0"
        }`}
      >
        {isSignUp ? (
          <SignUpForm onSwitch={() => handleSwitch(false)} />
        ) : (
          <LoginForm onSwitch={() => handleSwitch(true)} />
        )}
      </div>
    </div>
  );
}
