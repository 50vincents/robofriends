import React from 'react';

// div first bracket signals javascript expression
// second returns obj w css styles
const Scroll = (props) => {
  return (
    <div style={{ overflowY: 'scroll', border: '1px solid black', height: '700px' }}> 
      {props.children}
    </div>
  );
}

export default Scroll;