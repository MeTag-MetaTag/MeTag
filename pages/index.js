import styles from '../styles/Home.module.css'
import React, { useState } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Button } from 'semantic-ui-react';

export default function Home() {
  return (
    <div className={styles.container}>
      <Button primary>Click Me</Button>
    </div>
  )
}
