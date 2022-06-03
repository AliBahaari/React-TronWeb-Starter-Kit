import {useEffect} from 'react';
import './App.css';
import TronWeb from 'tronweb';

// const testOptions = {
//   fullNode: "https://api.shasta.trongrid.io",
//   solidityNode: "https://api.shasta.trongrid.io",
//   eventServer: "https://api.shasta.trongrid.io"
// }

const mainOptions = {
  fullNode: "https://api.trongrid.io",
  solidityNode: "https://api.trongrid.io",
  eventServer: "https://api.trongrid.io"
}

const tronWeb = new TronWeb(mainOptions);
tronWeb.setHeader({ "TRON-PRO-API-KEY": "" }); // Mainnet
const walletAddress = "";

function App() {

  const fetchBalance = async () => {

    const balance = await tronWeb.trx.getBalance(walletAddress);
    console.log(balance / 1000000);

  }

  const fetchAccout = async () => {

    const account = await tronWeb.trx.getAccount(walletAddress);
    console.log(account);

  }

  const fetchToken = async () => {

    const trc20ContractAddress = "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t";

    tronWeb.setAddress(trc20ContractAddress);
    
    const contract = await tronWeb.contract().at(trc20ContractAddress);
    const contractBalance = await contract.balanceOf(walletAddress).call();
    
    console.log(contractBalance);

  }

  useEffect(() => {
    
    (async () => {
      await fetchBalance();
      await fetchAccout();
      await fetchToken();
    })();

  }, []);

  return (
    <div>

    </div>
  );
}

export default App;
