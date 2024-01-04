// Write your code here

import {Component} from 'react'

import Message from './Message'

import Login from './Login'

import Logout from './Logout'

import './index.css'

class Home extends Component {
  state = {isLogin: false}

  changeStatus = () => {
    const {isLogin} = this.state
    this.setState({isLogin: !isLogin})
  }

  render() {
    const {isLogin} = this.state

    let messageElement
    let buttonElement

    if (isLogin) {
      messageElement = <Message text="Welcome User" />
      buttonElement = <Login changeStatus={this.changeStatus} />
    } else {
      messageElement = <Message text="Please Login" />
      buttonElement = <Login changeStatus={this.changeStatus} />
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
