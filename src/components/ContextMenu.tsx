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
  
  const showContext = props.show;

  const [axes, setState] = useState({
    x: 0,
    y: 0
  });


  const contextEl = useRef();

   useEffect((e) => {
    console.log('Updateeeee ');
    if (showContext) {
    console.log(e);
       contextEl.current.focus();
    }
  });

  if(showContext) {
    return (
      <div css={styles.root} ref={contextEl} className="context-menu">
        {props.children}
      </div>
    );
  }
  return null;
}
