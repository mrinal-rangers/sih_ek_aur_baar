import React from 'react'
import './style.scss'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import CropFreeIcon from '@mui/icons-material/CropFree';


const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='div1'>
           <img src="https://i.ibb.co/RSXvYjZ/logo.png" alt=""/> 
           <span>Customize Setting</span>
        </div>
        <div className='div2'>
       <RemoveOutlinedIcon/>
       <CropFreeIcon/>
       <CloseOutlinedIcon/>
        </div>
    </div>
  )
  
}

export default Navbar