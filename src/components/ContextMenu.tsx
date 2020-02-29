import { css } from '@emotion/core';
import React, { useRef, useEffect, useState }  from 'react';


const styles = {
  root: css({
    position: "fixed",
    padding: "5px 10px",
    background: "white",
    zIndex: 999,
    outline: "none",
    boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
  }),
};


export default function ContextMenu(props) {
  
  let event = props.show;

  const [state, setState] = useState({
    left: 0,
    top: 0,
    context: event,
  });


  const contextEl = useRef();

   useEffect((e) => {
    if (event) { 
      // contextEl.current.focus();
        const left = event.pageX || event.clientX;
        const top = event.pageY || event.clientY;
      console.log(state);
      setState(...state, { top: top })
    }
  });


  const handleBlur = () => {
      event = null;
  }

  if(event) {
    return (
      <div tabIndex="0" css={styles.root}  ref={contextEl} className="context-menu" onBlur={handleBlur}>
        {props.children}
      </div>
    );
  }
  return null;
}
