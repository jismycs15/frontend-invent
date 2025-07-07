"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import login from "@/services/Login";

export default function Home() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const payload = {
    email: formData.email,
    username: formData.username,
  };

  try {
    const response = await login.postlogincredentials(payload); // Call backend API

    console.log("Login response:", response);

    // Assuming your API returns something like: { message: "Login successful", token: "...", user: {...} }
    if (response.message === "Login successful") {

      localStorage.setItem("user", JSON.stringify(response.user));
      alert("Login successful!");
      router.push("/superadmin/userlis");
    } else {
      alert("Login failed: " + response.message);
    }
  } catch (error) {
    console.error("Login failed", error);
    alert("Failed to login. Please check your credentials or server status.");
  }
};

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
        >
          Login
        </button>
      </form>
    </div>
  );
}
