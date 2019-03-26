import React, { Component } from 'react';
import { ReactComponent as SearchIcon } from '../../images/search-icon.svg';

class Search extends Component {
  handleChange = e => {
    this.props.onChange(e.target.value);
  }

  handleSubmit = () => {
    console.log(this.props.text);
    this.props.onSearch(this.props.text);
  }

  render() {
    return (
      <div className="searchBox">
        <input
          className="searchBox-input"
          type="text"
          placeholder="Search location"
          value={this.props.text}
          onChange={this.handleChange}
        />
        <button onClick={this.props.onSearch}>
          <SearchIcon />
        </button>
      </div>
    );
  }
}

export default Search;
