import styles from '../styles/Home.module.css'
import React, { useState } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Button, Form } from 'semantic-ui-react';
import { Magic } from 'magic-sdk';
import { useRouter } from 'next/router';


function Login(props) {

  const [email, setEmail] = useState('');
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState({});
  const router = useRouter();

  const handleSubmit = async () => {
    const magic = new Magic('pk_live_72B536E564E8019B');
    let redirectAddress = 'localhost:3000'
    await magic.auth.loginWithMagicLink({ email, redirectAddress })
    const userMetadata = await magic.user.getMetadata();
    setUserData(userMetadata);
    const isLoggedIn = await magic.user.isLoggedIn();
    setLoggedIn(isLoggedIn);
    
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Field>
        <label>Email address</label>
        <input
          placeholder='Email Address' 
          value={email} 
          onChange={e => setEmail(e.target.value)} 
         />
      </Form.Field>
      <Button>Authenticate Me!</Button>
      <h3>Current User: {userData.email}</h3>
    </Form>
  );

}

export default Login;