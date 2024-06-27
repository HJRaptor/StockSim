"use client";

import yahooFinance from 'yahoo-finance2';
import { useState } from 'react';
//const yahooFinance = require('yahoo-finance2').default;












export default function Home() {
  const [myname, setname] = useState("AAPL")
  const [stockprice, setstockprice] = useState("000")

  async function api(){
    let results = await yahooFinance.quoteSummary(myname);
    var open = results.price.regularMarketOpen
    setstockprice(results.price.regularMarketOpen)
    console.log(stockprice)
    console.log(open)
    console.log(myname)
  
  }



  return (
    <div className="App">
      <h1>{stockprice}</h1>
      <h1>{myname}</h1>
      <textarea id='stocknamefield' onChange={e => setname(e.target.value)}></textarea>
      <button onClick={api}>Search Price</button>
    </div>
  );
}
