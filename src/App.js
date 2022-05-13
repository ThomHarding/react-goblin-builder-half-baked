import './App.css';
import React from 'react';
import GoblinForm from './GoblinForm';
import GoblinList from './GoblinList';
import Goblin from './Goblin';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      allGoblins: [],
      filteredGoblins: [],
      goblinFormName: '',
      goblinFormHP: 1,
      goblinFormColor: 'green'

    };
  }
    /* 
    track: 
      allGoblins, an array of all goblins
      filteredGoblins, a second array of goblins: this one is the filtered version of the above allGoblins array
      goblinFormName, which is how we track the user input for the current name of the goblin in the form
      goblinFormHP, which is how we track the user input for the current HP of the goblin in the form
      goblinFormColor, which is how we track the user input for the current color of the goblin in the form
*/
  
  submitGoblin(e) {
    e.preventDefault();
    
    // on submit, make a new goblin object with a name that comes from the form state, an hp that comes from the form state, and a color that comes from the form state
    let newGoblin = { name: this.state.goblinFormName, color: this.state.goblinFormColor, hp: this.state.goblinFormHP };
    // update the allGoblins array. Add the new goblin to the allGoblins array immutably.
    this.setState({ allGoblins: [this.state.allGoblins, newGoblin] });
    // clear out the goblin form state items by setting them to empty strings. This will cause the form to reset in the UI.
    this.setState({ goblinFormColor: 'green' });
    this.setState({ goblinFormHP: 10 });
    this.setState({ goblinFormName: 'Goblin' });
  }

  handleDeleteGoblin(name) {
    // find the index of the goblin in allGoblins with this name
    const index = this.state.allGoblins.findIndex(goblin => goblin.name === name);
    // use splice to delete the goblin object at this index
    this.state.allGoblins.splice(index, 1);
    // update the allGoblins array immutably to this new, smaller array
    this.setState({ allGoblins: [...this.state.allGoblins] });
  }

  handleFilterGoblins(search) {
    // use the filter method to get an array of goblins whose name includes this search argument
    const filtered = this.state.allGoblins
      .filter(goblin => goblin.name.toLowerCase().includes(search.toLowerCase()));
    // if there is a search argument, set the filtered goblins to the filtered goblins
    if (search) {
      this.setState({ filteredGoblins: filtered });
    // if the search argument is undefined, set the filtered goblins in state to just be the array of all goblins
    } else {
      this.setState({ filteredGoblins: this.state.allGoblins });
    }
  }

  render() {

    return (

      <div className="App">
        <div className='current-goblin quarter'>
          <Goblin goblin={{ name: this.state.goblinFormName, color: this.state.goblinFormColor, hp: this.state.goblinFormHP }} />
        </div>
        <div className='goblin-filter quarter'>
          Filter Goblins
          {/* note that handleFilterGoblins is defined upstairs. This is where the allGoblins array gets filtered */}
          <input onChange={(e) => this.handleFilterGoblins(e.target.value)} />
        </div>
        <GoblinForm
          submitGoblin={this.submitGoblin}
          goblinFormName={this.state.goblinFormName}
          setGoblinFormName={goblinFormName => this.setState({ goblinFormName })}
          goblinFormColor={this.state.goblinFormColor}
          setGoblinFormColor={goblinFormColor => this.setState({ goblinFormColor })}
          goblinFormHP={this.state.goblinFormHP}
          setGoblinFormHP={goblinFormHP => this.setState({ goblinFormHP })}
          /*
          This component takes in a ton of props! 
          Here is the list of props to pass:
            submitGoblin,
            goblinFormName, 
            setGoblinFormName,
            goblinFormColor, 
            setGoblinFormColor,
            goblinFormHP, 
            setGoblinFormHP,
          */
        />
        <GoblinList 
          goblins={(this.state.filteredGoblins.length !== 0) ? this.state.filteredGoblins : this.state.allGoblins} // this takes in an array of goblins. If the filteredGoblins has a length, use that array. Otherwise, use the allGoblins array 
          handleDeleteGoblin={this.handleDeleteGoblin} // note that the goblin list has access to the ability to delete
        />
      </div>
    );
  }
}
