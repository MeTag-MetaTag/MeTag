import React, { useState } from "react";
import "semantic-ui-css/semantic.min.css";
import { Button, Form, Container } from "semantic-ui-react";
import { Magic } from "magic-sdk";
// import { useRouter } from 'next/router';
//import styles from "../styles/Home.module.css";
import { ethers } from "ethers";

const User = (props) => {
  const [accounts, setAccounts] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [defaultAccount, setDefaultAccount] = useState("");
  const [userBalance, setUserBalance] = useState("");
  const [connectButtonText, setConnButtonText] = useState("Connect Wallet");

  const connectWalletHandler = async () => {
    if (window.ethereum) {
      //   let result = await window.ethereum.request({method: "eth_requestAccounts"});
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      let accounts = await provider.send("eth_requestAccounts", []);
      console.log("accounts", accounts);

      accountChangedHandler(accounts[0]);
    } else {
      setErrorMessage("Install MetaMask");
    }
  };

  const accountChangedHandler = (newAccount) => {
    setDefaultAccount(newAccount);
    getUserBalance(newAccount.toString());
  };

  const getUserBalance = async (address) => {
    const balance = await window.ethereum.request({
      method: "eth_getBalance",
      params: [address, "latest"],
    });
    setUserBalance(ethers.utils.formatEther(balance));
  };

  const chainChangedHandler = () => {
    window.location.reload();
  };

  if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
    window.ethereum.on("accountsChanged", accountChangedHandler);
    window.ethereum.on("chainChanged", chainChangedHandler);
  }

  return (
    <div>
      <div>Welcome User</div>
      <Button onClick={connectWalletHandler}>Connect to MetaMask</Button>
      <div>
        <h3>Address: {defaultAccount}</h3>
      </div>
      <div>
        <h3>Balance: {userBalance}</h3>
      </div>
    </div>
  );
};

export default User;
