import React, { useState } from "react";
import "semantic-ui-css/semantic.min.css";
import { Button, Form, Container } from "semantic-ui-react";
import { Magic } from "magic-sdk";
import { useRouter } from "next/router";
//import worldID from "@worldcoin/id";

//import styles from "../styles/Home.module.css";

function Home(props) {
  const [email, setEmail] = useState("");
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState("");
  const router = useRouter();
  /*worldID.init("world-id-container", {
    enableTelemetry: true,
    actionId: "0x330C8452C879506f313D1565702560435b0fee4C", // <- use the address of your smart contract
    signal: "0x330C8452C879506f313D1565702560435b0fee4C", // <- Fill in with the user's wallet address here
  });*/
  const handleClick = async () => {
    console.log("top of handleClick", isLoggedIn);
    if (isLoggedIn) {
      const magic = new Magic("pk_live_72B536E564E8019B");
      console.log("so true?");
      await magic.user.logout();
      const isLoggedIn = await magic.user.isLoggedIn();
      setLoggedIn(isLoggedIn);
      console.log("isLoggedIn", isLoggedIn);
      setUserData("");
    } else {
      if (email == null) return;
      const magic = new Magic("pk_live_72B536E564E8019B");
      let redirectAddress = "localhost:3000";
      await magic.auth.loginWithMagicLink({ email, redirectAddress });
      const isLoggedIn = await magic.user.isLoggedIn();
      console.log("isLoggedIn", isLoggedIn);
      setLoggedIn(isLoggedIn);
      const userMetadata = await magic.user.getMetadata();
      setUserData(userMetadata.email);
      router.push("/User");
    }
  };
  /* document.addEventListener("DOMContentLoaded", async function () {
    try {
      const result = await worldID.enable();
      console.log("World ID verified succesfully:", result); // <- Pass this result to your wallet transaction
    } catch (failure) {
      console.warn("World ID verification failed:", failure);
      // Re-activate here so your end user can try again
    }
  });
*/
  return (
    <div>
      <button className="headerbutton"> METAG</button>
      <div className="bg">
        <link
          href="http://fonts.googleapis.com/css?family=Open+Sans"
          rel="stylesheet"
          type="text/css"
        ></link>
        <Form className="">
          <div>
            <br />
            <h2>Sign Up</h2>
            <div className="txt">
              <span className="txtnorm">
                Can you enter your email address and we will send
              </span>
              <span className="magiclinkbold"> magic link </span>
              <span className="txtnorm">to complete registation</span>
            </div>
            <br />
            <input
              style={{ width: "260px", height: "45px" }}
              type="email"
              placeholder="Email Address:"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="txtinput"
            />
          </div>
          <br />

          {isLoggedIn ? (
            <button
              className=""
              style={{ width: "20px", height: "20px" }}
              onClick={handleClick}
            >
              Logout
            </button>
          ) : (
            <button className="btn" onClick={handleClick}>
              Continue
            </button>
          )}
        </Form>
      </div>
      <div id="world-id-container"> world coin stuff</div>
    </div>
  );
}

export default Home;
