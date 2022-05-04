import './App.css';
import { useState, React } from 'react';
import GoblinForm from './GoblinForm';
import GoblinList from './GoblinList';
import Goblin from './Goblin';

function App() {
  const [allGoblins, setAllGoblins] = useState([]);
  const [filteredGoblins, setFilteredGoblins] = useState([]);
  const [goblinFormName, setGoblinFormName] = useState('');
  const [goblinFormHP, setGoblinFormHP] = useState('');
  const [goblinFormColor, setGoblinFormColor] = useState('');
  /* 
    track: 
      allGoblins, an array of all goblins
      filteredGoblins, a second array of goblins: this one is the filtered version of the above allGoblins array
      goblinFormName, which is how we track the user input for the current name of the goblin in the form
      goblinFormHP, which is how we track the user input for the current HP of the goblin in the form
      goblinFormColor, which is how we track the user input for the current color of the goblin in the form
*/
  
  function submitGoblin(e) {
    e.preventDefault();
    
    // on submit, make a new goblin object with a name that comes from the form state, an hp that comes from the form state, and a color that comes from the form state
    let newGoblin = <Goblin name={goblinFormName} hp={goblinFormHP} color={goblinFormColor} />;
    // update the allGoblins array. Add the new goblin to the allGoblins array immutably.
    setAllGoblins([...allGoblins, newGoblin]);
    // clear out the goblin form state items by setting them to empty strings. This will cause the form to reset in the UI.
    setGoblinFormColor('');
    setGoblinFormHP('');
    setGoblinFormName('');
  }

  function handleDeleteGoblin(name) {
    // find the index of the goblin in allGoblins with this name
    const index = allGoblins.findIndex(goblin => goblin.name === name);
    // use splice to delete the goblin object at this index
    allGoblins.splice(index, 1);
    // update the allGoblins array immutably to this new, smaller array
    setAllGoblins([...allGoblins]);
  }

  function handleFilterGoblins(search) {
    // use the filter method to get an array of goblins whose name includes this search argument
    const filtered = allGoblins
      .filter(goblin => goblin.name.toLowerCase().includes(search.toLowerCase()));
    // if there is a search argument, set the filtered goblins to the filtered goblins
    if (search) {
      setAllGoblins(filtered);
    // if the search argument is undefined, set the filtered goblins in state to just be the array of all goblins
    } else {
      setAllGoblins(allGoblins);
    }
  }


  return (
    <div className="App">
      <div className='current-goblin quarter'>
        <Goblin name={goblinFormName} color={goblinFormColor} hp={goblinFormHP}/>
      </div>
      <div className='goblin-filter quarter'>
        Filter Goblins
        {/* note that handleFilterGoblins is defined upstairs. This is where the allGoblins array gets filtered */}
        <input onChange={(e) => handleFilterGoblins(e.target.value)} />
      </div>
      <GoblinForm
        submitGoblin={submitGoblin}
        goblinFormName={goblinFormName}
        setGoblinFormName={setGoblinFormName}
        goblinFormColor={goblinFormColor}
        setGoblinFormColor={setGoblinFormColor}
        goblinFormHP={goblinFormHP}
        setGoblinFormHP={setGoblinFormHP}
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
        goblins={(filteredGoblins.length !== 0) ? filteredGoblins : allGoblins} // this takes in an array of goblins. If the filteredGoblins has a length, use that array. Otherwise, use the allGoblins array 
        handleDeleteGoblin={handleDeleteGoblin} // note that the goblin list has access to the ability to delete
      />
    </div>
  );
}

export default App;
