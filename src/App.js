import React, { useState } from 'react';
import classes from './App.module.css';
import srchIconBlack from './search-icon-black.png';
import srchIconWhite from './search-icon-white.png';


export default function App(props) {

  const [srchInp , setSrchInp] = useState('');
  // const [info , setInfo] = useState([{name : "" , link : ""}]);

  const srchHandler = (e) => {
    setSrchInp(e.target.value);
  }

  return (
    <div className={classes.wholeCont} 
      style={
      {
        width : props.SearchBarWidth ? props.SearchBarWidth : "80vh" ,
        height : props.SearchBarHeight ? props.SearchBarHeight : "7vh" ,
        fontFamily : props.searchFontStyle ? props.searchFontStyle : "'Open Sans', sans-serif" , 
        border : props.borderLine ? props.borderLine : "1px solid rgb(219, 219, 219)" ,
      }}>

        <input className={classes.srchInput} onChange={srchHandler} style={{}} />

        <button className={classes.srchIconCont}
          style={{ backgroundColor : props.searchBackgroundColor ? props.searchBackgroundColor : "#FBC02D"}}>

            <img src={props.searchIconColor === "black" ? srchIconBlack :srchIconWhite} 
                alt="search Icon" className={classes.srchIcon} />

        </button>

      { srchInp && <div className={classes.srchDD}>
          {
              (props.data).filter((val)=>{
                if(srchInp === '')
                  return null;
                else if (srchInp.toLowerCase() === 'all')
                  return val;
                else if (val.name.toLowerCase().includes(srchInp.toLowerCase()))
                  return val;
              }).map((item) => {
                return (
                  <a href={item.link} className={classes.ddList} target='_blank' rel="noreferrer">
                    <p style={{margin:"0"}}>{item.name}</p>
                  </a>
                )
              })
          }
      </div>
      }

    </div>
  );
}

/*
  props.searchBackgroundColor -> background color of search button
  props.searchFontStyle -> font family
  props.borderLine -> "line width   line style(solid/dashed)   line color "
  props.searchIconColor -> white/black
  props.data -> pass data as an object
  props.SearchBarWidth -> width of the whole component
  props.SearchBarHeight -> height of the whole component without dropdown
*/