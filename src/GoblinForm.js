import React from 'react';

export default class GoblinForm extends React.Component{
  render() {
    // submitGoblin,
    // goblinFormName, 
    // setGoblinFormName,
    // goblinFormColor, 
    // setGoblinFormColor,
    // goblinFormHP, 
    // setGoblinFormHP,
    return (
      <div className='goblin-form-container quarter'>
        {/* on submit, call the submitGoblin function, passed in as a prop.
        Note that you don't need to define an anonymous function--you can just name the submitGoblin prop here and it will work.
        Take a minute to try and puzzle out why that is: how is this function different from other functions, 
        where you do need to create an anonymous function in the `onClick` or `onSubmit` spot? */}
        <form onSubmit={this.props.submitGoblin} className='goblin-form'>
          <label>
              Name
            {/* onChange, use the prop setGoblinFormName to set the parent state */}
            <input onChange={e => this.props.setGoblinFormName(e.target.value)} required value={this.props.goblinFormName} />
            {/* note that we're controlling the input's value from parent state */}
          </label>
          <label>
              HP
            {/* onChange, use the prop setGoblinFormHP to set the parent state */}
            <input onChange={e => this.props.setGoblinFormHP(e.target.value)} required type="number" value={this.props.goblinFormHP} />
            {/* note that we're controlling the input's value from parent state */}
          </label>
          <label>
              Color
            {/* onChange, use the prop setGoblinFormColor to set the parent state */}
            <select onChange={e => this.props.setGoblinFormColor(e.target.value)} required value={this.props.goblinFormColor}>
              {/* note that we're controlling the input's value from parent state */}
              <option value="lightgreen">Green</option>
              <option value="lightblue">Blue</option>
              <option value="pink">Pink</option>
              <option value="purple">Purple</option>
              <option value="orange">Orange</option>
            </select>
          </label>
          <button>Add Goblin</button>
  
        </form>  
      </div>
    );
  }
}
