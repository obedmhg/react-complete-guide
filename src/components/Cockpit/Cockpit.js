import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {

    const innerClasses = [];
    if (props.persons.length <= 2) {
        innerClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
        innerClasses.push(classes.bold);
    }
    let btnClass = '';

    if(props.showPersons) {
        btnClass = classes.Red;
    }

    return (
        <div className={classes.Cockpit}>
            <h1>This is the React Complete Guide Application!</h1>
            <p className={innerClasses.join(' ')}>There are {props.persons.length} persons</p>
            <button className={btnClass} onClick={props.toogle}>Toggle Persons</button>
        </div>

    );
}

export default cockpit;