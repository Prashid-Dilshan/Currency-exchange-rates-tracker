import React, { useState } from "react";
import "../App.css";

function Mainpage() {
  //State for the form fill
  const [date, setDate] = useState(null);
  const [sourceCurrency, setSourceCurrency] = useState("");
  const [targetCurrency, setTargetCurrency] = useState("");
  const [amountInSourceCurrency, setAmountInSourceCurrency] = useState();
  const [amountInTargetCurrency, setAmountInTargetCurrency] = useState(0);


  //handle submit method
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      date,
      setSourceCurrency,
      setTargetCurrency,
      amountInSourceCurrency
    );
  };

  return (
    <div>
      <h1 className="bg-inherit"> Corrency rate checker</h1>
      <p>
        siufh aiuh iwuhiwuitwbitjh iwuhtoiugwreguht ewiuhgtwiuerhg tihfjbdsjkf
        ahj fk afiujhiwsjkhf iwuhrwjehbr kwejrwkjeriwkue griwjegriwuhgiru
        wiuerwiuehgrwikejhr wieuryiuweiurwert w w rtwertwert
      </p>

      <div>
        <section>
          <form onSubmit={handleSubmit}>

            <div>
              <label htmlFor={date}>Date : </label>
              <input onChange={(e) => setDate(e.target.value)} type="date" id={date} name={date}></input>
            </div>


            <div>
              <label  htmlFor={sourceCurrency}>Source currency : </label>
              <select
              onChange={(e) => setSourceCurrency(e.target.value)}
                name={sourceCurrency}
                id={sourceCurrency}
                value={sourceCurrency}
              >
                <option value=""> select the source currency </option>
              </select>
            </div>


            <div>
              <label htmlFor={targetCurrency}> select Target currency : </label>
              <select
              onChange={(e) => setTargetCurrency(e.target.value)}
                name={targetCurrency}
                id={targetCurrency}
                value={targetCurrency}
              >
                <option value=""> select Target currency </option>
              </select>
            </div>


            <div>
              <label htmlFor={amountInSourceCurrency}>
                Amount is source currency :{" "}
              </label>
              <input
              onChange={(e) => setAmountInSourceCurrency(e.target.value)}
                type="text"
                id={amountInSourceCurrency}
                name={amountInSourceCurrency}
                value={amountInSourceCurrency}
              ></input>
            </div>


            <button>Get Value</button>

            
          </form>
        </section>
      </div>
    </div>
  );
}

export default Mainpage;
