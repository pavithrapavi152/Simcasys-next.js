"use client";

import { useEffect, useState } from "react";

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>

      {user ? (
        <div>
          <h2>Welcome, {user.name}</h2>

          <p>Email: {user.email}</p>

          <p>Role: {user.role}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
