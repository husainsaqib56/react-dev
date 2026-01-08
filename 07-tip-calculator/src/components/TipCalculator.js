import { useState } from "react";

import BillInput from "./BillInput";
import SetPercentage from "./SetPercentage";
import Output from "./Output";
import ResetBill from "./Reset";

export default function TipCalculator() {
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);
  const tip = bill * ((percentage1 + percentage2) / 2 / 100);

  function reset() {
    setBill("");
    setPercentage1(0);
    setPercentage2(0);
  }

  return (
    <>
      <BillInput bill={bill} onSetBill={setBill} />
      <SetPercentage percentage={percentage1} onSelect={setPercentage1}>
        How did you like to service?
      </SetPercentage>
      <SetPercentage percentage={percentage2} onSelect={setPercentage2}>
        How did your friend like to service?
      </SetPercentage>
      {bill > 0 && (
        <>
          <Output bill={bill} tip={tip} />
          <ResetBill onReset={reset} />
        </>
      )}
    </>
  );
}
