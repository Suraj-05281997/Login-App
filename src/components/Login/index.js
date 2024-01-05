// Write your code here

import './index.css'

class Login = props => {

    const {onClickButton} = props

    return (
        <button type="button" className = "login-button" onClick = {onClickButton} > Logout </button>
    )

}

export default Login
