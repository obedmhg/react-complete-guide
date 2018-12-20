import React, { Component } from 'react';
import classes from './App.css';
import Person  from './Person/Person'

class App extends Component {
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

    let persons = null;
    let btnClass = '';

    if(this.state.showPersons) {
        btnClass = classes.Red;
        persons = (<div>
                    {this.state.persons.map((person, index) => {
                        return (<Person name={person.name}
                                        age={person.age}
                                        key={person.id}
                                        changed={(event) => this.nameChangedHandler(event, person.id)}
                                        click={() => this.deletePersonHandler(index)}/>);

                    })}
                           </div>);

    }

    const innerClasses = [];
    if (this.state.persons.length <= 2) {
        innerClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
        innerClasses.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <h1>This is the React Complete Guide Application!</h1>
        <p className={innerClasses.join(' ')}>There are {this.state.persons.length} persons</p>
        <button className={btnClass} onClick={this.tooglePersonsHandler}>Toggle Persons</button>
        {persons}

      </div>
    );
/*
    return React.createElement('div' , {className:'App'}, React.createElement('h1', null, 'Using React.createElement()'));
*/
  }
}

export default App;
