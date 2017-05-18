import React, {Component} from 'react';

class Product extends Component {
    constructor(props){
        super(props)

        this.state={
            product: {}
        }
    }

    componentDidMount(){
        axios.get('https://practice.devmountain.com/products/' + this.props.match.params.id)
        .then(response=>{
            this.setState({
                products: response.data
            })
        })
    }
    render(){
        var {product} = this.state;
        return(
            <div>
                <img src={product.img} alt={product.title}/>
                <h1>{product.title}</h1>
                <h3>{product.price}</h3>
                <h3>{product.desc}</h3>
                <h1>My Product</h1>
            </div>
        )
    }
}

export default Product