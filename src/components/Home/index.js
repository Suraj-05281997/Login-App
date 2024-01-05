// Write your code here

import {Component} from 'react'

import Message from '../Message'

import Login from '../Login'

import Logout from '../Logout'

import './index.css'

class Home extends Component {
  state = {isLoggedIn: false}

  onClickButton = () => {
    this.setState(prevState => ({isLoggedIn: !prevState.isLoggedIn}))
  }

  render() {
    const {isLoggedIn} = this.state

    let messageElement
    let buttonElement

    if (isLoggedIn) {
      messageElement = <Message text="Welcome User" />
      buttonElement = <Login onClickButton={this.onClickButton} />
    } else {
      messageElement = <Message text="Please Login" />
      buttonElement = <Logout onClickButton={this.onClickButton} />
    }

    return (
      <div className="login-bg">
        <div className="login-card">
          {messageElement}
          {buttonElement}
        </div>
      </div>
    )
  }
}

export default Home
