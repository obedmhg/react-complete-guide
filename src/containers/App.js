import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons  from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit';
import withClassHoc from '../hoc/withClassHoc';
import Aux from '../hoc/Aux';

class App extends PureComponent {

    constructor(props) {
        super(props);
        console.log('App.js - Inside constructor', props);
    }

    componentWillMount() {
        console.log('App.js - Inside componentWillMount()');
    }

    componentDidMount(){
        console.log('App.js - Inside componentDidMount()');
    }

    componentWillReceiveProps(nextProps) {
        console.log('Update App.js - Inside componentWillReceiveProps()', nextProps);
    }


    componentWillUpdate(nextProps, nextState) {
        console.log('Update App.js - Inside componentWillUpdate()', nextProps, nextState);
    }

    componentDidUpdate() {
        console.log('Update App.js - Inside componentDidUpdate()', this.props, this.state);
    }


    state = {
        persons: [
            {id: '1', name: 'Obed', age: 35},
            {id: '2', name: 'Haide', age:35},
            {id: '3', name: 'Mateo', age: 6},
            {id: '4', name: 'Loretta', age: 4}
        ],
        showPersons: false
    };

    switchNameHandler = (newName) => {
        this.setState({persons: [
                                   {name: newName, age: 35},
                                   {name: 'Haide', age:35},
                                   {name: 'Mateo', age: 6},
                                   {name: 'Loretta', age: 4}
                               ]})
    };

    tooglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons : !doesShow});
    };

    deletePersonHandler = (personIndex) => {
        const persons = this.state.persons.slice();
        persons.splice(personIndex, 1);
        this.setState({persons : persons});
    };

    nameChangedHandler = (event, id) => {
           const personIndex = this.state.persons.findIndex(p => {
                return p.id === id;
            });
            console.log(personIndex);
            const person =  {...this.state.persons[personIndex]};
            person.name = event.target.value;
            const persons = [...this.state.persons];
            persons[personIndex] = person;
            console.log(persons);
            this.setState({persons: persons});
    };

  render() {
    console.log('App.js - Inside render()');
    let persons = null;
    if(this.state.showPersons) {
        persons = (<div>
                        <Persons 
                            persons={this.state.persons} 
                            changed={this.nameChangedHandler} 
                            click={this.deletePersonHandler} />
                    </div>);
    }

    return (
        <Aux>
            <button onClick={() => {this.setState({showPersons:true})}}>Show Persons</button>
            <Cockpit showPersons={this.state.showPersons} persons={this.state.persons} toogle={this.tooglePersonsHandler} appTitle={this.props.title}/>
            {persons}
        </Aux>
    );
/*
    return React.createElement('div' , {className:'App'}, React.createElement('h1', null, 'Using React.createElement()'));
*/
  }
}

export default withClassHoc(App, classes.App);
