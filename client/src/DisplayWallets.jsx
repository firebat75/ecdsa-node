import server from "./server";
import { useState } from "react";

function DisplayWallets() {
    let wallets = {};
    const [balances, setBalances] = useState("");
    fetch("http://localhost:3042/balances")
        .then(response => response.json())
        .then(data => {
            wallets = data;
            // balances = JSON.stringify(wallets);
            // console.log(balances);
            setBalances(JSON.stringify(wallets));
        })


    // const [wallets, setWallets] = [];
    // const { data: { wallets } } = await server.get("wallets");
    // async function onChange(evt) {
    //     if (address) {
    //         const {
    //             data: { balance },
    //         } = await server.get(`balance/${address}`);
    //         setBalance(balance);
    //     } else {
    //         setBalance(0);
    //     }
    //     const address = evt.target.value;
    //     setAddress(address);
    // }

    return (
        <div className="container show-wallets">
            <h1>Wallets</h1>
            <div className="nothing">Wallets: {balances}</div>
        </div>
    );
}

export default DisplayWallets;