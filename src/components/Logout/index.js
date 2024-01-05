// Write your code here

import './index.css'

const Logout = props => {
  const {onClickButton} = props

  return (
    <button type="button" className="logout-button" onClick={onClickButton}>
      Login
    </button>
  )
}

export default Logout
