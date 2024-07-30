import React from "react";

const Amenities = (props) => {
  return (
    <div className="container mx-auto my-8 px-5">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 content-center bg-slate-50">
        <img src={props.mainimg} className="" />
        <div className="grid grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-10 content-center">
          {props.items.map((item) => (
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full">
                <img className="w-50" src={item.icons} />
              </div>
              <p className="font-normal text-lg leading-6 mt-4">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Amenities;
