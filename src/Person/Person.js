import React from 'react';
import classes from  './Person.css';

const person = (props) => {
  const rnd = Math.random();
  if(rnd > 0.98) {
    throw new Error('Opps I did it again..');
  }
  return (
    <div className={classes.Person}>
    <h1 >I am {props.name}</h1>
    <p>I am {props.age}</p>
    <p>{props.children}</p>
    <input type="text" onChange={props.changed} value={props.name}/>
        <button className='remove-button' onClick={props.click}> Delete </button>

      </div>
    );
}

export default person;