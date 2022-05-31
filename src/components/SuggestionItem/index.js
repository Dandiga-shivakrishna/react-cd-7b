import './index.css'

const SuggestionItem = props => {
  const {userDetails, updateText} = props
  const {suggestion} = userDetails
  const onSubmit = () => {
    updateText(suggestion)
  }

  return (
    <li className="user-card-container">
      <p>{suggestion}</p>
      <button type="button" onClick={onSubmit}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="img-style"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
