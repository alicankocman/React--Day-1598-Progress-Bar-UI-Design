import React from 'react';
import './container.css';

const MyContainer = () => {
  return (
    <div className="container" style={{ display: "flex" }}>
      <div className="group">
        <div className='c_one'>1</div>
        <p className='text' style={{fontFamily:'Inter',fontWeight:600,fontSize:18}}>Travelers</p>
      </div>
      <div className="group">
        <div className='c_two'>2</div>
        <p className='text' style={{fontFamily:'Inter',fontWeight:600,fontSize:18}}>Seat selection</p>
      </div>
      <div className="group">
        <div className='c_three'>3</div>
        <p className='text' style={{fontFamily:'Inter',fontWeight:400,fontSize:18}}>Food & Drink</p>
      </div>
      <div className="group">
        <div className='c_four'>4</div>
        <p className='text' style={{fontFamily:'Inter',fontWeight:400,fontSize:18}}>Additional products</p>
      </div>
      <div className="group">
        <div className='c_five'>5</div>
        <p className='text' style={{fontFamily:'Inter',fontWeight:400,fontSize:18}}>Payment</p>
      </div>
    </div>
  );
}

export default MyContainer;
