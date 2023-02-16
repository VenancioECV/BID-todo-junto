import React, { Component} from 'react';

class PersonCard extends Component{
    render(){
        return(
            <div className='PersonCard'>
                <h1>{this.props.lastName}, {this.props.firstName}</h1>
                <p>age: {this.props.age}</p>
                <p>Hair Color: {this.props.hairColor}</p>
            </div>
        )
    }
}

export default PersonCard;