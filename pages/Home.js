import React, { useState } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Button, Form, Container } from 'semantic-ui-react';
import { Magic } from 'magic-sdk';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';

function Home(props) {

  const [email, setEmail] = useState('');
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState('');
  const router = useRouter();

  const handleClick = async () => {
    console.log('top of handleClick', isLoggedIn);
    if (isLoggedIn) {
      const magic = new Magic(process.env.NEXT_PUBLIC_MAGIC_LINK_API_KEY);
      console.log('so true?')
      await magic.user.logout();
      const isLoggedIn = await magic.user.isLoggedIn();
      setLoggedIn(isLoggedIn);
      setUserData('');
    }
    else {
      const magic = new Magic(process.env.NEXT_PUBLIC_MAGIC_LINK_API_KEY);
      let redirectAddress = 'localhost:3000'
      await magic.auth.loginWithMagicLink({ email, redirectAddress })
      const isLoggedIn = await magic.user.isLoggedIn();
      setLoggedIn(isLoggedIn);
      const userMetadata = await magic.user.getMetadata();
      console.log('userMetadata', userMetadata);
      setUserData(userMetadata.email);
      router.push('/User');
    }
  }

  return (
      <div>
          <Form className={styles.login}>
            <Form.Field>
              <label className={styles.signUp}>Sign up</label>
              <label className={styles.bodyText}>Can you enter your email address and we will send magic link to complete registation</label>
              <input
                placeholder='Email Address:'
                value={email} 
                onChange={e => setEmail(e.target.value)}
                className={styles.input}
              />
            </Form.Field>
            { isLoggedIn ? 
            <button onClick={handleClick}>Logout</button>
            :
            <button className={styles.btn} onClick={handleClick}>Continue</button>
            }
        </Form>
      </div>
  );
}


export default Home;