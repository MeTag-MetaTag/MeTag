import styles from '../styles/Home.module.css'
import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Button, Form } from 'semantic-ui-react';
import { Magic } from 'magic-sdk';
import { Router } from 'next/router';

class Login extends Component {

    state = {
        email: ''
    }

  constructor(props) {
    super(props);
  }

  handleClick = () => {
    console.log('hi');
    // console.log(process.env.REACT_APP_API_KEY);
  }

  handleChange = (event) => {
      this.setState({
          email: event.target.value
      }, () => {console.log(this.state.email)})
  }

  handleSubmit = async () => {
      console.log('this.state.email', this.state.email);
      const did = await new Magic('pk_live_72B536E564E8019B').auth.loginWithMagicLink({ email: this.state.email });
      console.log('did', did);
      const authRequest = await fetch('/api/login', {
           method: 'POST',
           headers: { Authorization: `Bearer ${did}` },
       });
       if (authRequest.ok) {
           Router.push('/');
       }
       else {
           console.log('error');
       }
  }



  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Field>
          <label>Email address</label>
          <input placeholder='Email Address' value={this.state.email} onChange={this.handleChange} />
        </Form.Field>
        <Button>Submit Me!</Button>
      </Form>
    );
  }
}

export default Login;