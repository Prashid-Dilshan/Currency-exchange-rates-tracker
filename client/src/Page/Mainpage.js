import React, { useEffect, useState } from "react";
import "../App.css";
import axios from 'axios';
import "./Mainpage.css";


function Mainpage() {
   // the states for the fields
   const [date, Setdate] = useState();
   const [sourceCurrency, setsourceCurrency] = useState("");
   const [targetCurrency, settargetCurrency] = useState("");
   const [amountInSourceCurrency, setamountInSourceCurrency] = useState(0);
   const [amountInTargetCurrency, setamountInTargetCurrency] = useState(0);
   const [sourceCurrencyName, setsourceCurrencyName] = useState("");
   const [targetCurrencyName, settargetCurrencyName] = useState("");
   const [currencyNames, setcurrencyNames] = useState([]);
   const [pressed, setPressed] = useState(false);
 
   //get all the currencies
   useEffect(() => {
     const getTheCurrencies = async () => {
       try {
         const responce = await axios.get(
           "http://localhost:5000/getAllCurrencies"
         );
         setcurrencyNames(responce.data);
       } catch (err) {
         console.error(err);
       }
     };
     getTheCurrencies();
   }, []);
 
   // onSubmit
   const getTheTargetAmount = async (event) => {
     event.preventDefault();
     setPressed(true);
     // send the data
     try {
       const responce = await axios.get("http://localhost:5000/convert", {
         params: {
           date,
           sourceCurrency,
           targetCurrency,
           amountInSourceCurrency,
         },
       });
 
       const { amountInTargetCurrency } = responce.data;
       //currencyNames
       const { sourceCurrencyName, targetCurrencyName } = responce.data;
       setsourceCurrencyName(sourceCurrencyName);
       settargetCurrencyName(targetCurrencyName);
       setamountInTargetCurrency(amountInTargetCurrency);
     } catch (err) {
       console.error(err);
     }
   };
 
   return (
     <div>
       <h1 style={{marginLeft: '32px'}} className="text-5xl font-black flex items-center justify-normal text-green-500">
         Convert Your Currencies Today
       </h1>
       <p style={{marginLeft: '32px'}} className="font-sm opacity-40 py-6">
         Welcome to " Convert Your Currencies Today ". This application allows you
         to easily convert currencies based on the latest exchange rates. Whether
         you're planning a trip, managing your finances, or simply curious about
         the value of your money in different currencies, this tool is here to
         help.
       </p>
       <div style={{marginTop: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
         <section style={{width: '100%', maxWidth: '50%'}}>
           <form onSubmit={getTheTargetAmount}>
             <div style={{marginBottom: '1rem'}}>
               <label
                 style={{marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '500', color: 'red'}}
                 htmlFor="date"
               >
                 Date
               </label>
               <input
                 required
                 style={{backgroundColor: '#F3F4F6', borderWidth: '1px', borderColor: '#E5E7EB', color: '#374151', fontSize: '0.875rem', borderRadius: '0.375rem', outline: 'none', padding: '0.625rem', width: '100%', transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out'}}
                 onChange={(e) => Setdate(e.target.value)}
                 type="date"
                 name="date"
                 id="date"
                 placeholder="date.."
               />
             </div>
 
             <div style={{marginBottom: '1rem'}}>
               <label
                 style={{marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '500', color: 'red'}}
                 htmlFor="sourceCurrency"
               >
                 Source Currency
               </label>
 
               <select
                 value={sourceCurrency} // Set the selected value
                 onChange={(e) => setsourceCurrency(e.target.value)}
                 style={{backgroundColor: '#F3F4F6', borderWidth: '1px', borderColor: '#E5E7EB', color: '#374151', fontSize: '0.875rem', borderRadius: '0.375rem', outline: 'none', padding: '0.625rem', width: '100%', transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out'}}
                 name="sourceCurrency"
                 id="sourceCurrency"
               >
                 <option value="">Select source currency</option>{" "}
                 {/* Default empty option */}
                 {Object.keys(currencyNames).map((currency) => (
                   <option style={{padding: '0.25rem'}} key={currency} value={currency}>
                     {currencyNames[currency]}
                   </option>
                 ))}
               </select>
             </div>
 
             <div style={{marginBottom: '1rem'}}>
               <label
                 style={{marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '500', color: 'red'}}
                 htmlFor="targetCurrency"
               >
                 Target Currency
               </label>
               <select
                 value={targetCurrency} // Set the selected value
                 onChange={(e) => settargetCurrency(e.target.value)}
                 style={{backgroundColor: '#F3F4F6', borderWidth: '1px', borderColor: '#E5E7EB', color: '#374151', fontSize: '0.875rem', borderRadius: '0.375rem', outline: 'none', padding: '0.625rem', width: '100%', transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out'}}
                 name="sourceCurrency"
                 id="sourceCurrency"
               >
                 <option value="">Select target currency</option>{" "}
                 {/* Default empty option */}
                 {Object.keys(currencyNames).map((currency) => (
                   <option style={{padding: '0.25rem'}} key={currency} value={currency}>
                     {currencyNames[currency]}
                   </option>
                 ))}
               </select>
             </div>
 
             <div style={{marginBottom: '1rem'}}>
               <label
                 style={{marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '500', color: 'red'}}
                 htmlFor="amountInSourceCurrency"
               >
                 Amount in source currency
               </label>
               <input
                 required
                 style={{backgroundColor: '#F3F4F6', borderWidth: '1px', borderColor: '#E5E7EB', color: '#374151', fontSize: '0.875rem', borderRadius: '0.375rem', outline: 'none', padding: '0.625rem', width: '100%', transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out'}}
                 onChange={(e) => setamountInSourceCurrency(e.target.value)}
                 type="number"
                 name="amountInSourceCurrency"
                 id="amountInSourceCurrency"
                 placeholder="Amount in source currency..."
               />
             </div>
 
             <button style={{backgroundColor: '#34D399', color: '#ffffff', fontWeight: 'bold', padding: '0.75rem 1rem', borderRadius: '0.375rem', cursor: 'pointer', transition: 'background-color 0.3s ease', border: 'none', outline: 'none', fontSize: '0.875rem'}} className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
               Get the target Currency
             </button>
           </form>
         </section>
         <h3 style={{paddingTop: '1.25rem', fontSize: '1rem'}} className="flex items-center justify-start py-5 text-lg">
           {pressed ? (
             <div>
               <span style={{fontSize: '1.25rem'}} className="text-xl"> {amountInSourceCurrency}</span>{" "}
               {sourceCurrencyName} is equal to
               <span style={{fontSize: '1.25rem', fontWeight: 'bold', color: '#34D399'}}>
                 {" "}{amountInTargetCurrency.toFixed(2)}
               </span>{" "}
               {targetCurrencyName}
             </div>
           ) : (
             ""
           )}
         </h3>
       </div>
     </div>
   );
}

export default Mainpage;
