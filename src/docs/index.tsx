import React, { useState, useEffect } from 'react';
import * as ReactDOM from 'react-dom';

import ContextMenu from '../components/ContextMenu';

const wrapper = {
  position: "fixed",
  bottom: "255px",
};

function Home(props) {
	
    const [count, setCount] = useState(false);

      // Similar to componentDidMount and componentDidUpdate:
	  useEffect(() => {
	     // document.addEventListener('contextmenu',onClickfn);
	  });

    const onClickfn = (e) => {
    	e.preventDefault();
    	setCount(e);
    }

    const clicked = (e) => {
      e.preventDefault();
      // e.persist();
      console.log('Clickedddd ');
      console.log(e)
      setCount(e);
    }
  return (
    <div >
      <h1>Hello, world!</h1>
      	<button>Click me</button>
      	  <ContextMenu event={count}> 
          <li>test</li>
          <li>darkooo</li>
	  	asdasdasdasd
	  </ContextMenu>
    <button style={wrapper}  onContextMenu={clicked}>Click me Down</button>
    </div>
  );
}

ReactDOM.render(
	<div className="test">
	<Home>
   </Home>
  </div>,
  document.getElementById('root')
);
