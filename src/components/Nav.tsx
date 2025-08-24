import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <header className="bg-white/60 backdrop-blur sticky top-0 z-20 border-b">
      <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="font-semibold">
          HerName
        </Link>
        <nav className="space-x-4">
          <Link to="/about">About</Link>
          <Link to="/experiences">Experiences</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
