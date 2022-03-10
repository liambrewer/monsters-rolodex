import { Component } from "react";

class SearchBox extends Component {
  
  render () {

    console.log('render from SearchBox')

    const { className, placeholder, onChange } = this.props;

    return (
      <input
        className={className}
        type='search'
        placeholder={placeholder}
        onChange={onChange}
      />
    );
  };

}

export default SearchBox;