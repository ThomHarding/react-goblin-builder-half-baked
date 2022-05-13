import React from 'react';
import Goblin from './Goblin';

export default class GoblinList extends React.Component {
  render() {
    return (
      <div className='goblin-list quarter'>
        {/* map over your goblins and render out a Goblin component for each goblin. You've seen this before. The only difference here is that you need to pass handleDeleteGoblin (a prop that is a function), as well */}
        {
          this.props.goblins.map(goblin => <Goblin key={`${goblin.name}`} goblin={goblin} handleDeleteGoblin={this.props.handleDeleteGoblin} />)
        }
      </div>
    );
  }
}
