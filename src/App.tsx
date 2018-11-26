import * as React from 'react';
import './App.css';

interface IAppState {
  count:number
}

class App extends React.Component<{},IAppState> {

  constractor(props:{}){
    super(props);
    this.state={
      count:0
    };
  }
  increment = () => this.setState({
    count:this.state.count + 1
  });


  decrement = () => this.setState({
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
     </div>
    );
  }
}

export default App;
