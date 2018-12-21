import React, {Component} from 'react';
import classes from  './Person.css';
import WithClass from '../../../hoc/WithClass';

class Person extends Component {
  constructor(props) {
    super(props);
    console.log('Person.js - Inside constructor', props);
}

componentWillMount() {
    console.log('Person.js - Inside componentWillMount()');
}

componentDidMount(){
    console.log('Person.js - Inside componentDidMount()');
} 
  render() {
    console.log('Person.js - Inside render()');

    return (
        <WithClass classes={classes.Person}>
            <h1 >I am {this.props.name}</h1>
            <p>I am {this.props.age}</p>
            <p>{this.props.children}</p>
            <input type="text" onChange={this.props.changed} value={this.props.name}/>
            <button className='remove-button' onClick={this.props.click}> Delete </button>
        </WithClass>
      );
  }
}

export default Person;