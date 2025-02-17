import React, { useState } from "react";
import axios from "axios";
import { Card, CardContent } from "../components/ui/card"
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Search } from "lucide-react";

const LandingPage: React.FC = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [showLoginForm, setShowLoginForm] = useState(false);

    const handleLogin = async () => {
        try {
          const response = await axios.post("http://localhost:8080/api/auth/login", {
            username,
            password,
          });
          // Store the token or user info (usually in localStorage or a state management library)
          localStorage.setItem("authToken", response.data.token);
    
          // Redirect to the logged-in page
          window.location.href = "/logged-in"; // Replace with your actual logged-in route
        } catch (err) {
          setError("Invalid credentials");
        }
      };

  return (
    <div className="w-full min-h-screen bg-gray-100">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">EventConnect</h1>
        <div>
         <Button variant="ghost" onClick={() => setShowLoginForm(!showLoginForm)}>
                Login
            </Button>
          <Button>Sign Up</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-16 bg-blue-600 text-white">
        <h2 className="text-4xl font-bold">Discover & Connect with Events Near You</h2>
        <p className="mt-2">Find and RSVP to exciting events in your community</p>
        <Button className="mt-4 bg-white text-blue-600">Find Events</Button>
      </section>

      {/* Search Bar */}
      <div className="flex justify-center my-6">
        <Input placeholder="Search events..." className="w-1/2" />
        <Button variant="default" className="ml-2"><Search /></Button>
      </div>

      {/* Featured Events */}
      <section className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        {[1, 2, 3].map((event) => (
          <Card key={event} className="p-4">
            <CardContent>
              <h3 className="text-xl font-semibold">Exciting Event {event}</h3>
              <p className="text-gray-600">Date: 2025-03-15</p>
              <Button className="mt-2">View Details</Button>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Login Form */}
      {showLoginForm && (
        <div className="flex justify-center my-6">
          <div className="bg-white p-6 rounded shadow-md">
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="input mb-2"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input mb-2"
            />
            <Button onClick={handleLogin} className="w-full">Login</Button>
            {error && <p className="text-red-500 mt-2">{error}</p>}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4 mt-10">
        <p>© 2025 EventConnect. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;