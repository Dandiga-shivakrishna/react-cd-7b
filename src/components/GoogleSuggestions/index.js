import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {
    searchInput: '',
    // usersDetailsLis:suggestionsList;
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  //   updateText = suggestion => {
  //     const {searchInput} = this.state

  //     this.setState({
  //       searchInput: {suggestion},
  //     })
  //   }

  render() {
    const {suggestionsList} = this.props
    const {id, suggestion} = suggestionsList
    const {searchInput} = this.state
    const searchResults = suggestionsList.filter(eachUser =>
      eachUser.suggestion.includes(searchInput),
    )
    return (
      <div className="app-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="image-style"
        />
        <div className="search-style">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
            alt="search icon"
            className="style-img"
          />
          <input
            type="search"
            onChange={this.onChangeSearchInput}
            value={searchInput}
          />
        </div>
        <ul className="list-container">
          {searchResults.map(eachUser => (
            <SuggestionItem
              userDetails={eachUser}
              key={eachUser.id}
              // updateText={this.updateText}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default GoogleSuggestions
