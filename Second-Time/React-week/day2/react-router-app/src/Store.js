import React, {Component} from 'react';
//axios allow you to handle http requests similar to $http in angular.
import axios from 'axios';
import { Route } from 'react-router-dom';
class Store extends Component {
    constructor(props){
        super(props)

        this.state = {
            products: []
        }
    }
    //this is a special method in react that allows something 
    componentDidMount(){
        console.log('Component has mounted. Fetching data.')
        axios.get('https://practiceapi.devmountain.com/products')
        .then(response =>{
            console.log('Data received. Rendering...')
            this.setState({
                products: response.data
            })
        })
    }


    componentWillMount(){
        console.log('WillMount...')

    }
    
    componentWillUpdate(){
        console.log('WillUpdate...')

    }
    componentDidUpdate(){
        console.log('DidMount...')

    }

    render(){
        console.log('Rendering~!')
        console.log('products length is', this.state.products.length)


        var products = this.state.products.map((product, index) => {
            return (
                <div key={index}>
                    <img src={product.image} alt={product.title}/>
                    <h1>{product.title}</h1>
                </div>
            )
        })
        return (
            <div>
                <h1>This is the store page</h1>
                {products}

                {/*//this is a nested route!*/}
                <Route path='/store/home' render={()=>{
                    return <h1>Welcome to the Store Page</h1>}}/>
                <Route path='/store/about'/>
            </div>
        )
    }
}

export default Store