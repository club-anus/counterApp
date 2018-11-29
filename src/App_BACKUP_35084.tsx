import * as React from 'react';
import './App.css';

interface IAppState {
  count:number
}

class App extends React.Component<{},IAppState> {

  constructor(props:{}){
    super(props);
    this.state={
      count:0
    };
    // this.increment = this.increment.bind(this);
    // this.decrement = this.decrement.bind(this);
  }
  public increment = () => this.setState({
    count:this.state.count + 1
  });


  public decrement = () => this.setState({
    count:this.state.count -1
  });

  public render() {
    // const _handleIncrement = () => {this.increment()};
    // const _handleDecrement = () => {this.decrement()};
    return (
     <div>
       <h1>カウンター</h1>
       <h1>{this.state.count}</h1>
       <input type={"button"} value={"+"} onClick={this.increment}/>
       <input type={"button"} value={"-"} onClick={this.decrement}/>
       <h1>gitの練習</h1>
       <h1>gitの練習</h1>
<<<<<<< HEAD
       <h1>test1</h1>
=======
       <h1>test2</h1>
>>>>>>> test2
     </div>
    );
  }
}

export default App;
