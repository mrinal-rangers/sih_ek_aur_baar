import React from 'react'
import './style.scss'
import GppGoodIcon from '@mui/icons-material/GppGood';
import GppBadIcon from '@mui/icons-material/GppBad';


const Child = (props) => {
  return (
    <div className='child'>
    <hr id="hr1"/>
    <h3>{props.name}</h3> 
    < GppGoodIcon className='col1'/ >
    <h4>{props.s1}</h4>
    <h5>{props.s2}</h5>
    <h5>{props.s3}</h5>
    
    <GppBadIcon className='col2'/>
    <h4>{props.s4}</h4>
    </div>
  )
}

export default Child