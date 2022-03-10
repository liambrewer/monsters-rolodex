import { Component } from "react";

import './search-box.css';

class SearchBox extends Component {
  
  render () {

    console.log('render from SearchBox')

    const { className, placeholder, onChange } = this.props;

    return (
      <input
        className={`search-box ${className}`}
        type='search'
        placeholder={placeholder}
        onChange={onChange}
      />
    );
  };

}

export default SearchBox;