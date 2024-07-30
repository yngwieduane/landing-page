import React from "react";
import MortgageCalculator from "./MortgageCalculator";
import AmortizationCalculator from "./AmortizationCalculator";
import RefinancingCalculator from "./RefinancingCalculator";

const Calculators = (props) => {

    if (props.data === 'Mortgage') {
        return <MortgageCalculator />;
    }

    if (props.data === 'Amortization') {
        return <AmortizationCalculator />;
    }

    if (props.data === 'Refinancing') {
        return <RefinancingCalculator />;
    }

    return <h1>No Form</h1>;
};

export default Calculators;
