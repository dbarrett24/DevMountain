import React, {Component} from 'react';

class LoginForm extends Component {
    //constructor method is called when the Component is created for the first time. This makes it a perfect place to create state.
    //you only need to have a state on a Component if you need to keep track of changes.
    constructor(props){
        super(props)

        //props is a way for us to pass down data from one component to another.
        

        //this attaches state to THIS current component.
        this.state = {
            user: '',
            inputText: ''
        }
        //binds the context of the object to something; This goes in the constructor function. ^^
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        console.log(event)
        this.setState({
            inputText: event.target.value
        })
    }

    handleClick(){
        //to access state, you MUST use this.setState. Pass in an OBJECT and that object will be merged into your state. (See below)
        this.setState({
            user: this.state.inputText
        })
    }




    render(){
        var number = 0;
        function handleClick(){
            number++;
            console.log(number);
        }

        return (
            <div>
                <h1>Login here</h1>
                <h5>Currently logged in as: {this.state.user}</h5>
                {/*Any DOM event can be used on these elements. (See below)*/}
                <input onChange={this.handleChange} placeholder="Login Here"/>
                <button onClick={this.handleClick}>Login</button>
            </div>
        )
    }
}

export default LoginForm;