import React, {Component} from 'react';
import Person from './Person/Person';

class Persons extends Component {
    constructor(props) {
        super(props);
        console.log('Persons.js - Inside constructor', props);
        this.lastPersonRef = React.createRef();
    }

    componentWillMount() {
        console.log('Persons.js - Inside componentWillMount()');
    }

    componentDidMount(){
        console.log('Persons.js - Inside componentDidMount()');
        this.lastPersonRef.current.focus();
    }

    componentWillReceiveProps(nextProps) {
        console.log('Update Persons.js - Inside componentWillReceiveProps()', nextProps);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('Update Persons.js - Inside shouldComponentUpdate()', nextProps, nextState);
        return nextProps.persons !== this.props.persons;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('Update Persons.js - Inside componentWillUpdate()', nextProps, nextState);
    }

    componentDidUpdate() {
        console.log('Update Persons.js - Inside componentDidUpdate()', this.props, this.state);
    }

    render() {
        console.log('Persons.js - Inside render()');

        return this.props.persons.map((person, index) => {
            return (<Person name={person.name}
                age={person.age}
                key={person.id}
                possition={index}
                ref = {this.lastPersonRef}
                changed={(event) => this.props.changed(event, person.id)}
                click={() => this.props.click(index)} />);
            });
    }
}
export default Persons;