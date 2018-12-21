import React, {Component} from 'react';
import classes from  './Person.css';
import withClassHoc from '../../../hoc/withClassHoc';
import Aux from '../../../hoc/Aux';

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
        <Aux>
            <h1 >I am {this.props.name}</h1>
            <p>I am {this.props.age}</p>
            <p>{this.props.children}</p>
            <input type="text" onChange={this.props.changed} value={this.props.name}/>
            <button className='remove-button' onClick={this.props.click}> Delete </button>
        </Aux>
      );
  }
}

export default withClassHoc(Person, classes.Person);