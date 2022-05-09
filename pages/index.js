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
  }

  render() {
    return (
        <div>
          Hye yo home page
          <Button onClick={this.handleClick}>Click Me</Button>
        </div>
    );
  }
}

export default Home;