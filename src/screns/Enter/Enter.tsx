import React from "react";
import { Link } from "react-router-dom";

export const Enter: React.FC = (): JSX.Element => {
  return (
    <>
      <input type="text" placeholder="enter your name" /><br/>
      <input type="password" placeholder="enter your pass" /><br/>
      <Link to="/reg">Are you registered?</Link>
    </>
  );
};
