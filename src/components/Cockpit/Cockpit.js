import React from 'react';
import classes from './Cockpit.css';
import Aux from '../../hoc/Aux';

const cockpit = (props) => {

    const innerClasses = [];
    if (props.persons.length <= 2) {
        innerClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
        innerClasses.push(classes.bold);
    }
    let btnClass = classes.Button;

    if(props.showPersons) {
        btnClass = [classes.Red, classes.Button].join(' ');
    }

    return (
        <Aux>
            <h1>{props.appTitle}</h1>
            <p className={innerClasses.join(' ')}>There are {props.persons.length} persons</p>
            <button className={btnClass} onClick={props.toogle}>Toggle Persons</button>
        </Aux>

    );
}

export default cockpit;