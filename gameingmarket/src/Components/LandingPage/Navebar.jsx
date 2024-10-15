import React, { useState } from "react";
import Hamburger from "hamburger-react";

const Navebar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="NavBar fixed top-0 left-0 w-full flex items-center justify-between border-transparent bg-transparent px-4 py-2">
      <div className="leftSection flex items-center">
        <Hamburger toggled={isOpen} toggle={setOpen} />
        <button className="ml-4">Contact</button>
      </div>
      <div className="rightSection flex items-center">
        <h1 className="log">SharmaGame</h1>
      </div>
    </div>
  );
};

export default Navebar;
