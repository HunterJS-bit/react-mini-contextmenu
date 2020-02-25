import { css } from '@emotion/core';
import React, { useRef, useEffect }  from 'react';


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

  const contextEl = useRef();

   useEffect(() => {
    console.log('Updateeeee ');
  });

  if(showContext) {
    return (
      <div css={styles.root} className="context-menu">
        {props.children}
      </div>
    );
  }
  return null;
}
