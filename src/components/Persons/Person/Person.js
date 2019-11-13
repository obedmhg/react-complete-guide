import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classes from  './Person.css';
import withClassHoc from '../../../hoc/withClassHoc';
import Aux from '../../../hoc/Auxiliary';
import {AuthContext} from '../../../containers/App';

class Person extends Component {
  constructor(props) {
    super(props);
    console.log('Person.js - Inside constructor', props);
    this.inputElement = React.createRef();
}

componentWillMount() {
    console.log('Person.js - Inside componentWillMount()');
}

componentDidMount(){
    console.log('Person.js - Inside componentDidMount()');
} 

focus() {
    this.inputElement.current.focus();
}

  render() {
    console.log('Person.js - Inside render()');

    return (
        <Aux>
            <AuthContext.Consumer>
                {auth => auth ? <p>I am logged in!</p> :  null}
            </AuthContext.Consumer>
            <h1 >I am {this.props.name}</h1>
            <p>I am {this.props.age}</p>
            <p>{this.props.children}</p>
            <input 
                type="text" 
                ref={this.inputElement}
                onChange={this.props.changed} 
                value={this.props.name}/>
            <button className='remove-button' onClick={this.props.click}> Delete </button>
        </Aux>
      );
  }
}

Person.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    click: PropTypes.func,
    changed: PropTypes.func
};

export default withClassHoc(Person, classes.Person);