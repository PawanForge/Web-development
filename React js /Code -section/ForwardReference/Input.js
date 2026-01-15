import React,{forwardRef} from 'react';
const Input=forwardRef((props,ref)=>{
  return <input ref={ref} placeholder={props.placeholder}/>;
});
export default Input ;
