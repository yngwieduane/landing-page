import React, { useState } from "react";

const InputWithSlider = (props) => {
  const [propertyPrice, setPropertyPrice] = useState(props.value);

  const priceChangeHandler = (event) => {
    console.log(event.target.id);
    setPropertyPrice(event.target.value);
    props.onSaveData(event.target.value);
  };

  return (
    <div className="grid grid-cols-2 gap-3 items-center">
      <div className="">
        <label
          htmlFor={props.name+'-label'}
          className="block text-sm font-medium leading-6 "
        >
          {props.label}
        </label>
        <div className="relative mt-2 rounded-md">
          <input
            type="text"
            name={props.name}
            id={props.name+'-label'}
            className="block w-full rounded-md border-0 py-1.5 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="000-00-0000"
            value={propertyPrice}
            onChange={priceChangeHandler}
          />
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            {props.posttxt}
          </div>
        </div>
      </div>
      <div>
        <label
          htmlFor={props.name}
          className="block text-sm font-medium leading-6"
        >
        </label>
        <input
          type="range"
          className="transparent h-1.5 w-full cursor-pointer appearance-none rounded-lg border-transparent bg-neutral-200"
          id={props.name}
          min={props.min}
          max={props.max}
          step={props.step}
          value={propertyPrice}
          onChange={priceChangeHandler}
        />
      </div>
    </div>
  );
};

export default InputWithSlider;
