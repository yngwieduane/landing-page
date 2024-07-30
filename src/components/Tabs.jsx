import React, { useState } from "react";

import Navbar from './Navbar'; 
import NavbarContent from './NavbarContent'; 

const Tabs = (props) => {
    
  const data = props.items ;

  const [visibleTab, setVisibleTab] = useState(0);
  

  return (
    <>
      <Navbar
        data={data}
        visibleTab={visibleTab}
        setVisibleTab={setVisibleTab}
      />
      <NavbarContent data={data} visibleTab={visibleTab} />
    </>
  );
};

export default Tabs;
