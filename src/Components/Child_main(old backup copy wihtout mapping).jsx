import React from 'react'
import './style.scss'
import GppGoodIcon from '@mui/icons-material/GppGood';
import GppBadIcon from '@mui/icons-material/GppBad';


const Child = (props) => {
  return (
    <div className='child'>
    <hr id="hr1"/>  
    <h3>{props.name}</h3> 
    {/* <h4>{props.type}</h4> */}
    <h4>{props.description}</h4>
    <h5>{props.value_type}</h5>
    {/* <h4>{props.schema}</h4> */}
    
    <GppGoodIcon className='col1'/>
    <GppBadIcon className='col2'/>

    </div>
  )
}

export default Child