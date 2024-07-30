import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Calculators from "./tools/Calculators";

const MainNavbarContent = (props) => {
  const { t } = useTranslation();
  const [setModal, setSetModal] = useState(false);

  const modalHandler = (event) => {
    console.log("clicked = " + setModal);
    setSetModal(true);
  };

  const modalUpdate = (event) => {
    console.log(event);
    setSetModal(event);
  };

  return (
    <div className="container mx-auto my-8 px-5">
        {props.data[props.visibleTab].title}
        <Calculators data={props.data[props.visibleTab].title}/>
    </div>
  );
};

export default MainNavbarContent;
