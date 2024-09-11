import React, { useState } from "react";
import lulipic  from "./assets/images/lulipic.jpg";

const Signup: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    console.log("Form Submitted", { email, password });
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-300">
     <div className="text-center ">
     <h2 className="text-2xl font-bold mb-6 text-center" style={{color:"purple"}}>Luli Fiber Pre-Order</h2>
     </div>
      
      <div className="bg-white p-8 rounded-lg flex shadow-lg max-w-6xl w-full">
        <h2 className="text-2xl font-bold mb-6 text-center" style={{color:"purple"}}>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Sign Up
          </button>
        </form>

        <div className="h-screen w-1/2 ">
      <div className="h-full w-full border rounded-md" style={{backgroundImage:`url(${lulipic})`,backgroundSize:"auto", backgroundPosition: "center"}}>
      </div>
      </div>
      </div>
    </div>
  );
};

export default Signup;


