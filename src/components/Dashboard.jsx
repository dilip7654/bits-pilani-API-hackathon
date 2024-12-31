import React, { useContext } from "react";
import { AuthContext } from "./AuthContext";

export default function Dashboard() {
  const { userData } = useContext(AuthContext);

  if (!userData) {
    return <div>Loading...</div>; // Show loading state until data is fetched
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <div className="mt-4 bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold">User Information</h2>
        <p><strong>Name:</strong> {userData.name}</p>
        <p><strong>Phone:</strong> {userData.phone}</p>
        <p><strong>Date of Birth:</strong> {userData.birthDate}</p>
        <p><strong>Email:</strong> {userData.email}</p>
      </div>
    </div>
  );
}
