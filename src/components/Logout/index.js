// Write your code here

import './index.css'

class Logout = props => {

    const {onClickButton} = props

    return (
        <button type="button" className = "logout-button" onClick = {onClickButton} > Login </button>
    )
}

export default Logout