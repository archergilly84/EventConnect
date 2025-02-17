import React from "react";
import { Card, CardContent } from "../components/ui/Card"
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Search } from "lucide-react";

const LandingPage: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-gray-100">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">EventConnect</h1>
        <div>
          <Button variant="ghost">Login</Button>
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

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4 mt-10">
        <p>© 2025 EventConnect. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;