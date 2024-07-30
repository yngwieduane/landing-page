import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import InputWithSlider from "./InputWithSlider";

const RefinancingCalculator = prop => {
    
  const [mortgage, setMortgage] = useState(0);
  const [propPrice, setPropertyPrice] = useState(500000);
  const [loanPeriod, setLoanPeriod] = useState(25);
  const [downpayment, setDownpayment] = useState(25);
  const [interestRate, setInterestRate] = useState(4.5);

  const savePropPriceHandler = (inputData) => {
    setPropertyPrice(inputData);
  };

  const saveLoanPeriodHandler = (inputData) => {
    setLoanPeriod(inputData);
  };

  const saveDownpaymentHandler = (inputData) => {
    setDownpayment(inputData);
  };

  const saveInterestRateHandler = (inputData) => {
    setInterestRate(inputData);
  };
  
  return (
    <div className="grid grid-cols-2 gap-4">
      <div>
        <InputWithSlider
          posttxt="AED"
          min="100000"
          max="90000000"
          step="50000"
          value={propPrice}
          name="property-price"
          label="Property Price"
          onSaveData={savePropPriceHandler}
        />
        <InputWithSlider
          posttxt="Years"
          min="5"
          max="30"
          step="1"
          value={downpayment}
          name="loan-period"
          label="Loan Period"
          onSaveData={saveLoanPeriodHandler}
        />
        <InputWithSlider
          posttxt="%"
          min="0"
          max="100"
          step="1"
          value={loanPeriod}
          name="downpayment"
          label="Downpayment"
          onSaveData={saveDownpaymentHandler}
        />
        <InputWithSlider
          posttxt="%"
          min="1"
          max="20"
          step="0.05"
          value={interestRate}
          name="interest-rate"
          label="Interest Rate"
          onSaveData={saveInterestRateHandler}
        />
      </div>
      <div>
        <h1>No of Months: {loanPeriod * 12}</h1>
        <h1>Downpayment: {(downpayment / 100) * propPrice}</h1>
        <h1>Left Amount: {propPrice - (downpayment / 100) * propPrice}</h1>
        <h1>Interest Rate: {interestRate / 100 / 12 + 1}</h1>
        <h1>
          Get half:{" "}
          {Math.pow(interestRate / 100 / 12 + 1, loanPeriod * 12) *
            (propPrice - (downpayment / 100) * propPrice) *
            (interestRate / 100 / 12)}
        </h1>
        <h1>
          Get Mortgage:{" "}
          {(Math.pow(interestRate / 100 / 12 + 1, loanPeriod * 12) *
            (propPrice - (downpayment / 100) * propPrice) *
            (interestRate / 100 / 12)) /
            (Math.pow(interestRate / 100 / 12 + 1, loanPeriod * 12) - 1)}
        </h1>
      </div>
    </div>
  );
}

export default RefinancingCalculator;