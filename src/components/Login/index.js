// Write your code here

import "./index.css"

class Login = props => {

    const {changeStatus} = props

    return (
        <button type="button" className = "login-button" onClick = {changeStatus} > Logout </button>
    )

}

export default Login
