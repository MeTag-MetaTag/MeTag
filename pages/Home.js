import React, { useState } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Button, Form, Container } from 'semantic-ui-react';
import { Magic } from 'magic-sdk';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';
import { useWeb3React } from "@web3-react/core";
import { connectors } from "../utils/connectors";
import Navbar from '../components/Navbar';
// import Footer1 from "../components/Footer1";
import Gradient from "../components/landing/Gradient";
import Footer from "../components/Footer";
import Footer1 from "../components/Footer1";
import Starter from "../components/landing/Starter";
import Card from "../components/landing/Card";
import Card1 from "../components/landing/Card1";
import Card2 from "../components/landing/Card2";
import Card3 from "../components/landing/Card3.js";
import { newTheme } from "../styles/theme";


function Home(props) {

  const [email, setEmail] = useState('');
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState('');
  const router = useRouter();
  const { activate, deactivate, active } = useWeb3React();
  const [network, setNetwork] = useState("");
  const [isConnected, setConnected] = useState(false);

  const handleClick = async () => {
    console.log('top of handleClick', isLoggedIn);
    if (isLoggedIn) {
      const magic = new Magic(process.env.MAGIC_LINK_API_KEY);
      console.log('so true?')
      await magic.user.logout();
      const isLoggedIn = await magic.user.isLoggedIn();
      setLoggedIn(isLoggedIn);
      setUserData('');
    }
    else {
      const magic = new Magic(process.env.MAGIC_LINK_API_KEY);
      let redirectAddress = 'localhost:3000'
      await magic.auth.loginWithMagicLink({ email, redirectAddress })
      const isLoggedIn = await magic.user.isLoggedIn();
      console.log('isLoggedIn', isLoggedIn);
      setLoggedIn(isLoggedIn);
      const userMetadata = await magic.user.getMetadata();
      console.log('userMetadata', userMetadata);
      setUserData(userMetadata.email);
      router.push('/User');
    }
  }

  const handleNetwork = () => {
    const id = e.target.value
    setNetwork(id);
  }

  const handleConnect = () => {
      activate(connectors.coinbaseWallet);
      setConnected(true);
  }

  const handleDisconnect = () => {
    setConnected(false);
  }
  
  return (
    <div className=' bg-[#040D21]'>
        <Navbar />
        <Gradient />
        <Starter />
        <Card />
        <Card1 />
        {/* <Form className={styles.login}>
          <Form.Field>
            <label className={styles.signUp}>Sign up</label>
            <label className={styles.bodyText}>
              Can you enter your email address and we will send magic link to
              complete registation
            </label>
            <input
              placeholder="Email Address:"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
            />
          </Form.Field>
          {isLoggedIn ? (
            <button onClick={handleClick}>Logout</button>
          ) : (
            <button className={styles.btn} onClick={handleClick}>
              Continue
            </button>
          )}
        </Form> */}
        {!isConnected ? (
          <button onClick={handleConnect}>Connect Wallet</button>
        ) : (
          <button onClick={handleDisconnect}>Connect Wallet</button>
      )}
      <Footer1/>
      <Footer/>
    </div>
  );
}


export default Home;