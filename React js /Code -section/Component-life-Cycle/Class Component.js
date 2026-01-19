import React,{Component} from 'react';
class Counter extends Component{
  constructor(){
    super();
    this.state={count:0};
  }
  componentDidMount(){
    console.log("Component Mounted");
  }
  componentDidUpdate(){
    console.log("component updating");
  }
  componentWillUnmount(){
    console.log("component Unmounted");
  }
  render()
  {
    return (
      <div>
        <h2>Count :{this.state.count}</h2>
        <button onClick={()=>
        this.setState({count :this.state.count+1})}>
          Increment
          </button>
          </div>
    )

  }
}
export default Counter;
