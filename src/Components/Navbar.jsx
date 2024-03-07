import React from "react";

function Navbar() {
  return (
    <>
      <nav className="w-full py-7">
        <div className="max-w-[1100px] mx-auto">
          <div className="flex justify-between">
            <h1 className="text-5xl font-bold text-gray-900">
              De<span className="text-green-700">Fi</span>
            </h1>
            <ul className="flex gap-7 py-4 font-semibold">
              <li>Home</li>
              <li>Trade</li>
              <li>View</li>
              <li>Support</li>
            </ul>
            <button className="bg-green-700 rounded-tl-full rounded-br-full text-white text-md text-center self-center px-6 py-4 m-2">
              Connect Wallet
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
