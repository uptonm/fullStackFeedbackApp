import React, { Component } from 'react';
import Chart from './Chart_View';
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      color: 'teal',
      strokeWidth: 0.5
    };
  }
  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(),1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  tick() {
    this.setState({
      data: this.state.data.concat(Math.random())
    });
  }
  
  setColor(color) {
    this.setState({
      color: color
    });
  }
  
  render() {
    return(
      <div className='container dash'>
        <div className='row' style={{marginTop:'20px'}}>
          <div className='col s2'>
            <div className='card collection with-header'>
              <li className='collection-header'>
                <h5 className='center-align'>Color</h5>
              </li>
              <a 
                onClick={() => this.setColor('red')} 
                className='collection-item'>
                Red
              </a>
              <a 
                onClick={() => this.setColor('blue')}
                className='collection-item'>
                Blue
              </a>
              <a 
                onClick={() => this.setColor('green')}
                className='collection-item'>
                Green
              </a>
              <a 
                onClick={() => this.setColor('purple')}
                className='collection-item'>
                Purple
              </a>
              <a 
                onClick={() => this.setColor('orange')}
                className='collection-item'>
                Orange
              </a>
            </div>
            <div className='card collection with-header' style={{marginTop: '10px'}}>
              <li className='collection-header'><h5 className='center-align'>Width</h5></li>
              <a onClick={() => this.setState({strokeWidth:0.25})} className='collection-item'>1</a>
              <a onClick={() => this.setState({strokeWidth:0.5})}className='collection-item'>2</a>
              <a onClick={() => this.setState({strokeWidth:0.75})}className='collection-item'>3</a>
              <a onClick={() => this.setState({strokeWidth:1})}className='collection-item'>4</a>
              <a onClick={() => this.setState({strokeWidth:2})}className='collection-item'>5</a>
            </div>
          </div>
          <div className='col s10'>
            <div className='card' style={{paddingBottom: '5px'}}>
              <Chart 
                data={this.state.data} 
                units={'Average Opinion'} 
                color={this.state.color}
                strokeWidth={this.state.strokeWidth}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Dashboard;