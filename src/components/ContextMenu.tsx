import { css } from '@emotion/core';
import React, { useRef, useEffect, useState }  from 'react';
import classes from './style.css';


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


export default function ContextMenu(props: any) {
  
  let event = props.show;

  const [state, setState] = useState({
    a: null,
    styles: {
      top: 0,
      left: 0,
    }
  });

  const inputRef = useRef(null);

  useEffect(() => {
    console.log('Joks');
  
    setState(state => ({ ...state, a: props.show }));
  }, [props.show]);

  useEffect(() => {
    if (state.a) {
      const left = state.a.pageX || state.a.clientX;
      const top = state.a.pageY || state.a.clientY;
    
      setState(state => ({ ...state, styles: { left, top } }));
      inputRef.current.focus();
    }
  }, [state.a]);

  const handleBlur = () => {
    console.log('Hadnle blur')
    setState(state => ({ ...state, a: null }));
  }

  if(state.a) {
    return (
      <div tabIndex="0" style={state.styles}  ref={inputRef} className="context-menu" onBlur={handleBlur}>
        {props.children}
      </div>
    );
  }
  return null;
}
