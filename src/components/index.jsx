import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div>
        <span>{this.props.count}</span><br />
        <button onClick={() => this.props.incrementClick()}>＊増加＊</button>
      </div>
    );
  }
}

export default App;

