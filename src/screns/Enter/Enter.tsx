import React from "react";
import { Link } from "react-router-dom";

export const Enter: React.FC = () => {
  return (
    <>
      <input type="text" placeholder="enter your name" />
      <input type="password" placeholder="enter your pass" />
      <Link to="/reg">Are you registered?</Link>
    </>
  );
};
