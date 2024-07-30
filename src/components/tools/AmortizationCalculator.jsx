import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import InputWithSlider from "./InputWithSlider";

// amortization
// a - The monthly interest rate.
// n - The total number of payments (loan term in months).
// t - The loan amount (principal).

// M= P⋅r⋅(1+r)^n /(1+r)^n -1

// M is the monthly payment (amortization).

// P is the principal loan amount (t)
// r is the monthly interest rate (a/12)

// n is the total number of payments (12*n)

const AmortizationCalculator = (props) => {
  const [loanAmount, setLoanAmount] = useState(500000);
  const [loanInterestRate, setLoanInterestRate] = useState(4.5);
  const [loanTermYears, setLoanTermYears] = useState(25);

  const saveLoanAmountHandler = (inputData) => {
    setLoanAmount(inputData);
  };

  const saveLoanInterestRateHandler = (inputData) => {
    setLoanInterestRate(inputData);
  };

  const saveLoanTermYearsHandler = (inputData) => {
    setLoanTermYears(inputData);
  };

  return (
    <div className="grid grid-cols-2 gap-4">
      <div>
        <InputWithSlider
          posttxt="AED"
          min="100000"
          max="90000000"
          step="50000"
          value={loanAmount}
          name="loan-amount"
          label="Loan Amount"
          onSaveData={saveLoanAmountHandler}
        />
        <InputWithSlider
          posttxt="%"
          min="1"
          max="20"
          step="0.05"
          value={loanInterestRate}
          name="loan-interest-rate"
          label="Loan Interest Rate"
          onSaveData={saveLoanInterestRateHandler}
        />
        <InputWithSlider
          posttxt="Years"
          min="5"
          max="30"
          step="1"
          value={loanTermYears}
          name="loan-term-years"
          label="Loan Term Years"
          onSaveData={saveLoanTermYearsHandler}
        />
      </div>
      <div>
        <h1>Amortization</h1>

        <h1>Loan Amount: {loanAmount}</h1>
        <h1>
          Monthly Amortization:{" "}
          {(loanAmount *
            (loanInterestRate / 100 / 12) *
            Math.pow(loanInterestRate / 100 / 12 + 1, loanTermYears * 12)) /
            (Math.pow(loanInterestRate / 100 / 12 + 1, loanTermYears * 12) - 1)}
        </h1>
      </div>
    </div>
  );
};

export default AmortizationCalculator;
