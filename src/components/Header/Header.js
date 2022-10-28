import React from "react";
import { useContext } from "react";

const Header = () => {
  const { user } = useContext();
  return (
    <div>
      <h1>{user}</h1>
    </div>
  );
};

export default Header;
