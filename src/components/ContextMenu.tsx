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


export default function ContextMenu(props: any) {
  
  let event = props.show;

  const [state, setState] = useState({
    a: null,
  });

  const inputRef = useRef(null);

  useEffect(() => {
    setState(state => ({ ...state, a: props.show }));
  }, [props.show]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [state.a]);

  const handleBlur = () => {
    console.log('Hadnle blur')
    setState(state => ({ ...state, a: null }));
  }

  if(state.a) {
    return (
      <div tabIndex="0" css={styles.root}  ref={inputRef} className="context-menu" onBlur={handleBlur}>
        {props.children}
      </div>
    );
  }
  return null;
}
