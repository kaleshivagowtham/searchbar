import React, { useState } from 'react';
import classes from './App.module.css';
import srchIcon from './search-icon.svg';
import info from './data.json';

export default function App({props}) {

  const [srchInp , setSrchInp] = useState('');

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
            info.filter((val)=>{
              if(srchInp === '')
                return null;
              else if (srchInp.toLowerCase() === 'all')
                return val;
              else if (val.name.toLowerCase().includes(srchInp.toLowerCase()))
                return val;
            }).map((item) => {
              return (
                <a href={item.link} target='_blank'><p className={classes.ddList}>{item.name}</p></a>
              )
            })
          }
      </div>
    </div>
  );
}
