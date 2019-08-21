import * as React from 'react';

import { BackButton, SubmitButton } from './Shared'

import { Component } from 'react';
import styled from 'styled-components';

type Props = {
  signUpRequest: (accountId: string, password: string, cb: any) => void;
};



export default class SignUp extends Component<Props> {

  state = {
    accountId: '',
    password: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = () => {

    this.props.signUpRequest(this.state.accountId, this.state.password, (result, err) => {
      if(!err) {
        // go to 
      } else {
        //sign up fail alert
        alert(err)
        this.setState({ 
          accountId: '',
          password: ''
        })
      }
    })
  }

  render() {
    return (
      <Container>
        <BackButton />
        <HeaderContainer>
          <Title>Sign Up</Title>
        </HeaderContainer>
        <BodyContainer> 
          <InputRow>
            <InputBox name='accountId' type='text' placeholder='Account ID' value={this.state.accountId} onChange={this.handleChange}/>
          </InputRow>
          <InputRow>
            <InputBox name='password' type='password' placeholder='Password' value={this.state.password} onChange={this.handleChange}/>
          </InputRow>
          <InputRow>
            <SubmitButton onClick={() => this.handleSubmit()}>Sign Up</SubmitButton>
          </InputRow>
        </BodyContainer>
        
      </Container>
    )
  }
} 

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const HeaderContainer = styled.div`
  display: flex;
  height: 80;
  justify-content: center;
  align-items: center;
`
const BodyContainer = styled.div`
  display: flex;
  height: 500px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid red;
`

const Title = styled.h2`

`

const InputRow = styled.div`
  height: 50px;
  display: flex;
  width: 100%;
  margin-bottom: 10px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const InputBox = styled.input`
  border: 1px solid lightgray;
  width: 70%;
  line-height: 25px;
  padding-left: 5px;
`
