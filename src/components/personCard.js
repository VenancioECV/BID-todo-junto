import React, { Component} from 'react';

class PersonCard extends Component{
    constructor(props){
        super(props);
        this.state = {
            age : this.props.age,
        }
    }
    IncreaseAge = () => {
        let actualAge = this.state.age;
        actualAge = Number(actualAge)
        let newAge = actualAge;
        newAge++;
        this.setState({age : newAge});
    }
    render(){
        return(
            <div className='PersonCard'>
                <h1>{this.props.lastName}, {this.props.firstName}</h1>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {this.props.hairColor}</p>
                <button onClick={this.IncreaseAge}>Birthday button for {this.props.firstName}</button>
            </div>
        )
    }
}

export default PersonCard;