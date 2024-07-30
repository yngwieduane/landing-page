import React, { useState } from "react";

const Navbar = (props) => {
  const [visibleTab, setVisibleTab] = useState(0);

  return (
    <>
      <nav className="flex space-x-4 justify-center border-b">
        <div className="text-center text-xl mx-2 mb-5">
          {props.data.map((tab, index) => (
            <button
              key={index}
              className={` px-5 py-2 text-lg font-medium ${props.visibleTab === index
                                            ? "bg-violet-950 text-white"
                                            : "text-gray-500 hover:text-gray-700"
                                        }`}
              onClick={() => props.setVisibleTab(index)}
            >
              {tab.title}
            </button>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
