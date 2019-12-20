import React from 'react';
import './App.css';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
   increment=()=> {
    this.setState({
      count: this.state.count + 1
    });
  };
  
  decrement=()=> {
    this.setState({
      count: this.state.count - 1
    });
  };
  render() {
    return (
   <div>
      <h1>Count: {this.state.count}</h1>
   <button className='inc' onClick={(e) => this.increment(e)}>Increment</button><br/>
    <button className='dec' onClick={(e) => this.decrement(e)}>Decrement</button>
  </div>
    );
  }
};
export default App;
