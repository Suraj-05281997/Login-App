// Write your code here

import "./index.css"

class Logout = props => {

    const {changeStatus} = props

    return (
        <button type="button" className = "logout-button" onClick = {changeStatus} > Login </button>
    )
}

export default Logout