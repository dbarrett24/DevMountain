import React, {Component} from 'react'; //import is the es6 version of require.


//A class is a blueprint for an object. Here we lay out the blueprint for an object that will become a component.
class Child extends Component {
    //inside we can place "methods, or functions the component needs to run. note* EVERY component needs a render method."
    render() {
    var name = "Dave";
    var salutation = "Hello";

    //you can store JSX elements inside of an array and render it below.

    /*var chores = [
        <div>
            <p>Do Laundry</p>
            <p>Do Dishes</p>
            <p>Say Hi to Connor</p>
        </div>
    ]*/

    var chores = [
        'Do Laundry',
        'Do Dishes',
        'Say Hi to Connor'
    ]
    var formattedChores = chores.map(chore => {
        return <p>{chore}</p>
    })
        return(
            <div>
                <h3>I am a Child class</h3>
                <h5>{salutation}, {name}</h5>
                <div>{formattedChores}</div>
            </div>
        )
    }
}

export default Child;