import Image from "next/image";

import yahooFinance from 'yahoo-finance2';

//const yahooFinance = require('yahoo-finance2').default;


  async function api()  {
      let results = await yahooFinance.search('TSLA');
      const news =  results.news
      //console.log(results)
  
  }

let results = ""




export default function Home() {
  return (
    <div className="App">
            <header className="App-header">
                <h1>hi</h1>
                
            </header>
        </div>
  );
}
