import React, { useState } from 'react';
import classes from './App.module.css';
import srchIcon from './search-icon.svg';
import data from './data.json';

export default function App({props}) {

  const [srchInp , setSrchInp] = useState();

  const srchHandler = (e) => {
    setSrchInp(e.target.value);
  }

  return (
    <div className={classes.wholeCont}>
      <input className={classes.srchInput} onChange={srchHandler} style={{}} />
      <button className={classes.srchIconCont}>
        <img src={srchIcon} className={classes.srchIcon} style={{}} />
      </button>
      <div className={classes.srchDD}>
          {
            data.filter((val)=>{
              if(srchInp === ""){
                return null;
              }
              else if(srchInp.toLowerCase() === "all"){
                return val;
              }
              else if(val.name.toLowerCase().includes(srchInp.toLowerCase())){
                return val;
              }
            }).map((val , key) => {
              return (
                <p className={classes.ddList}>{val.name}</p>
              )
            })}
      </div>
    </div>
  );
}
