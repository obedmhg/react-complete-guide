import React from 'react';
import classes from  './Person.css';

const person = (props) => {

return (
  <div className={classes.person}>
  <h1 >I am {props.name}</h1>
  <p>I am {props.age}</p>
  <p>{props.children}</p>
  <input type="text" onChange={props.changed} value={props.name}/>
      <button className='remove-button' onClick={props.click}> Delete </button>

    </div>
  );
}

export default person;