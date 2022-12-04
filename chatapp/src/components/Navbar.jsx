import React from "react";

export const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">My Chat</span>
      <div className="user">
        <img
          src="https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
        <span>Neha</span>
        <button>Logout</button>
      </div>
    </div>
  );
};
export default Navbar;
