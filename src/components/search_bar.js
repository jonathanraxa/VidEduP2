import React, { Component } from 'react';


// CLASS based component - needs to be aware of "state"
class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state = { term: ''};
  }

  render(){
    return (
      <div className="search-bar">
        <input
          placeholder="Type here to search"
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
      );
  }
  onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}
export default SearchBar;
