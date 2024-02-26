import Wallet from "./Wallet";
import Transfer from "./Transfer";
import DisplayWallets from "./DisplayWallets";
import "./App.scss";
import { useState } from "react";

function App() {
  const [balance, setBalance] = useState(0);
  const [address, setAddress] = useState("");
  // const [allBalances, setAllBalances] = useState([])

  return (
    <div className="app">
      <DisplayWallets />
      <Wallet
        balance={balance}
        setBalance={setBalance}
        address={address}
        setAddress={setAddress}
      />
      <Transfer setBalance={setBalance} address={address} />
    </div>
  );
}

export default App;
