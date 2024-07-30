import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import InputWithSlider from "./InputWithSlider";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

const MortgageCalculator = (props) => {
  const { t } = useTranslation();
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

  const data = {
    labels: ["Property Price", "Downpayment"],
    datasets: [
      {
        label: "Mortgage",
        data: [propPrice, (downpayment / 100) * propPrice],
        backgroundColor: ["#7c65b4", "#ee7040", "#7fddec", "#e49a15"],
        borderColor: ["#7c65b4", "#ee7040", "#7fddec", "#e49a15"],
        textColor: ['#ffffff', '#ffffff'],
        borderWidth: 0,
      },
    ],
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
        {/* <h1>No of Months: {loanPeriod * 12}</h1>
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
        </h1> */}
        <div className="bg-indigo-950 p-10 rounded-xl">
          <div className="bg-indigo-950 p-10 rounded-xl">

            <div
              className="px-36"
              style={{
                width: "auto",
                height: "auto",
                float: "none",
                position: "relative",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "80px",
                  position: "absolute",
                  top: "50%",
                  left: "0",
                  marginTop: "-25px",
                  lineHeight: "0px",
                  textAlign: "center",
                  zIndex: 10,
                }}
              >
                <p className="block h-10 text-2xl text-white">
                  {Math.round((Math.pow(interestRate / 100 / 12 + 1, loanPeriod * 12) *
                    (propPrice - (downpayment / 100) * propPrice) *
                    (interestRate / 100 / 12)) /
                    (Math.pow(interestRate / 100 / 12 + 1, loanPeriod * 12) - 1))} AED
                </p>
                <p className="block text-white">per month</p>
              </div>
              <Doughnut
                data={data}
                options={{
                  responsive: true,
                  maintainAspectRatio: true,
                  doughnutCoefficient: 0.6,

                  legend: {
                    labels: {
                      fontColor: "blue",
                      fontSize: 18
                    }
                  },
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MortgageCalculator;
