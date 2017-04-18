import React, { Component } from 'react'; //import React and pull off the property Component

class SearchBar extends Component { // a class. or JS object. Create a NEW class called SearchBar and give it all the functionality of a React.Component.
    constructor(props){
        super(props);
        this.state = { term: '' };
    }
    
    render() {
        return (
        <div className="search-bar">
        <input 
            value = {this.state.term}
            onChange={event => this.onInputChange(event.target.value)} />
        
        </div>
        )
    }//defining methods on a class

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar; //any file that exports SearchBar gets the searchbar component