import React from "react";

export default function Footer() {
  return (
    <footer className="bg-blue-500 text-white py-4">
      <div className="container mx-auto flex justify-center items-center">
        <p className="text-center">
          koya shop &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
