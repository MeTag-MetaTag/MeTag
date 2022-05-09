import React, { useState } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Button, Form, Container } from 'semantic-ui-react';
import { Magic } from 'magic-sdk';
import { useRouter } from 'next/router';
import styles from '../styles/Login.module.css'


function Login(props) {

  const [email, setEmail] = useState('');
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState('');
  const router = useRouter();

  const handleClick = async () => {
    console.log('top of handleClick', isLoggedIn);
    if (isLoggedIn) {
      const magic = new Magic('pk_live_72B536E564E8019B');
      console.log('so true?')
      await magic.user.logout();
      const isLoggedIn = await magic.user.isLoggedIn();
      setLoggedIn(isLoggedIn);
      console.log('isLoggedIn', isLoggedIn);
      setUserData('');
    }
    else {
      const magic = new Magic('pk_live_72B536E564E8019B');
      let redirectAddress = 'localhost:3000'
      await magic.auth.loginWithMagicLink({ email, redirectAddress })
      const isLoggedIn = await magic.user.isLoggedIn();
      console.log('isLoggedIn', isLoggedIn);
      setLoggedIn(isLoggedIn);
      const userMetadata = await magic.user.getMetadata();
      setUserData(userMetadata.email);
    }
  }
  return (
    <Container style={{ marginTop: 10 }}>
          <div className={styles.container}>
            <div className={ `${styles.cell1} ${styles.cell}` }>1.</div>
            <div className={ `${styles.cell2} ${styles.cell}` }>2.</div>
            <div className={ `${styles.cell3} ${styles.cell}` }>3.</div>
            <div className={ `${styles.cell4} ${styles.cell}` }>4.</div>
            <Form className={ `${styles.login} ${styles.cell}` }>
              <Form.Field>
                <label className={styles.signupheader} style={{ marginBottom: 10 }}>Sign up</label>
                <input
                  placeholder='Email Address:' 
                  value={email} 
                  onChange={e => setEmail(e.target.value)} 
                />
              </Form.Field>
          { isLoggedIn ? 
            <Button onClick={handleClick}>Logout</Button>
            :
            <Button onClick={handleClick}>Login</Button>
          }  
          <h3>Current User: {userData}</h3>
        </Form>
            <div className={ `${styles.cell5} ${styles.cell}` }></div>
            <div className={ `${styles.cell6} ${styles.cell}` }>6.</div>
            <div className={ `${styles.cell7} ${styles.cell}` }>7.</div>
            <div className={ `${styles.cell8} ${styles.cell}` }>8.</div>
            <div className={ `${styles.cell9} ${styles.cell}` }>9.</div> 
        </div>
      <div className={styles.metaglogo}>MeTag</div>
      {/* <div>
        <Form className={ `${styles.login} ${styles.cell}` }>
          <Form.Field>
            <label className={styles.signupheader} style={{ marginBottom: 10 }}>Sign up</label>
            <input
              placeholder='Email Address:' 
              value={email} 
              onChange={e => setEmail(e.target.value)} 
            />
          </Form.Field>
          { isLoggedIn ? 
            <Button onClick={handleClick}>Logout</Button>
            :
            <Button onClick={handleClick}>Login</Button>
          }  
          <h3>Current User: {userData}</h3>
        </Form>
      </div> */}
    </Container>
  );
}


export default Login;