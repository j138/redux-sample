import React from 'react';
// linterを黙らせるには下記の書き方をしてください
// class App extends React.pureComponent {
class App extends React.Component {
  render() {
    return (
      <div>
        <span>{this.props.count}</span><br />
        <button onClick={() => this.props.incrementClick()}>＊増加＊</button>
        <button onClick={() => this.props.decrementClick()}>＊減少＊</button>
        <button onClick={() => this.props.squareClick()}>＊2乗＊</button>
      </div>
    );
  }
}

export default App;
