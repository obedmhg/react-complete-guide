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

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('Update App.js -getDerivedStateFromProps');
        return prevState;
    }

    getSnapshotBeforeUpdate() {
        console.log('Update App.js -getSnapshotBeforeUpdate');
    }


    state = {
        persons: [
            {id: '1', name: 'Obed', age: 35},
            {id: '2', name: 'Haide', age:35},
            {id: '3', name: 'Mateo', age: 6},
            {id: '4', name: 'Loretta', age: 4}
        ],
        showPersons: false,
        toggleClikcCounter: 0,
        loggedIn: false
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
        this.setState((prevState, props) => {
            return {
                showPersons : !doesShow,
                toggleClikcCounter: this.state.toggleClikcCounter + 1
            }
        });
    };

    loginHandler = () => {
        this.setState({loggedIn : true});
    }

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
            <Cockpit 
                showPersons={this.state.showPersons} 
                persons={this.state.persons} 
                toogle={this.tooglePersonsHandler} 
                login={this.loginHandler}
                appTitle={this.props.title}/>
            <AuthContext.Provider value={this.state.loggedIn}>
                {persons}
            </AuthContext.Provider>
        </Aux>
    );
  }
}

export const AuthContext = React.createContext(false);

export default withClassHoc(App, classes.App);
