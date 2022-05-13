import React from 'react';

export default class Goblin extends React.Component{
  render() {
    return (
      // be sure you take a look at this component i'm handing you and figure out what props it will need to work correctly.
      <div 
        className='goblin' 
        onClick={() => this.props.handleDeleteGoblin && this.props.handleDeleteGoblin(this.props.goblin.name)}>
        <h3>{this.props.goblin.name}</h3>  
        <img src="goblin.png" style={{ backgroundColor: this.props.goblin.color }} />
        <p>{this.props.goblin.hp} HP</p>
      </div>
    );
  }
  
}