import styles from '../styles/Home.module.css'
import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Button, Form } from 'semantic-ui-react';

class Home extends Component {

  constructor(props) {
    super(props);
  }

  handleClick = () => {
    console.log('hi');
    // console.log(process.env.REACT_APP_API_KEY);
  }

  render() {
    return (
        <div>
          Hye yo home page
        </div>
    );
  }
}

export default Home;