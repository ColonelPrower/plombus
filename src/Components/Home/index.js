import React, { Component } from 'react';

class Home extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <React.Fragment>
      <div className='columns'>
      <div className='column debugColumns'>This is one</div>
      <div className='column debugColumns'>This is two</div>
      </div>
      <div className='columns'>
      <div className='column debugColumns'>This is third</div>
      <div className='column debugColumns'>Another one</div>
      </div>
      </React.Fragment>
    );
  }
}
export default Home;
