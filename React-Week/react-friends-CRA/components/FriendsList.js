import React,{Component} from 'react';

class FriendsList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchText: "",
            orderBy: "name",
            order: "ascending"
        }
    }

    render(){
        <div>
	        <form className="form-inline searchForm" role="form">
                <div 
                    className="form-group">

                    <input 
                        className="form-control" 
                        placeholder="Search For Friends" 
                        value={this.state.searchText}/>

                    <select 
                        className="input-medium"
                        value={this.state.orderBy}>

                        <option value="name">Name</option>
                        <option value="friend_count">#Friends</option>
                    </select>

                    <select 
                        className="input-medium"
                        value={this.state.order}>

                        <option value="descending">Descending</option>
                        <option value="ascending">Ascending</option>
                    </select>

                </div>
	        </form>
        
	        <ul>
	        </ul>
        </div>
    }
}

export default FriendsList;

