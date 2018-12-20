import React, {Component} from 'react';
import classes from  './Person.css';

class Person extends Component { 
  render() {
    return (
      <div className={classes.Person}>
      <h1 >I am {this.props.name}</h1>
      <p>I am {this.props.age}</p>
      <p>{this.props.children}</p>
      <input type="text" onChange={this.props.changed} value={this.props.name}/>
          <button className='remove-button' onClick={this.props.click}> Delete </button>

        </div>
      );
  }
}

export default Person;