import {useEffect} from 'react';
import './App.css';
import TronWeb from 'tronweb';

const mainOptions = {
  fullNode: "https://api.shasta.trongrid.io",
  solidityNode: "https://api.shasta.trongrid.io",
  eventServer: "https://api.shasta.trongrid.io"
}

const tronWeb = new TronWeb(mainOptions);

function App() {

  const fetchBalance = async () => {

    // tronWeb.setHeader({ "TRON-PRO-API-KEY": "" }); Mainnet
    const balance = await tronWeb.trx.getBalance("");

    console.log(balance / 1000000);
  }

  useEffect(() => {
    
    (async () => {
      await fetchBalance();
    })();

  }, []);

  return (
    <div>

    </div>
  );
}

export default App;
