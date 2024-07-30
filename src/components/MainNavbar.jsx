import React from "react";

const MainNavbar = (props) => {
  return (
    <>
      <nav className="flex space-x-4 ">
        <div className="text-xl mx-2 mb-5 border-b w-full">
          {props.data.map((tab, index) => (
            <button
              key={index}
              className={` px-5 py-2 text-lg ${props.visibleTab === index
                                            ? "text-violet-950 font-bold border-b-4 border-orange-600"
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

export default MainNavbar;
