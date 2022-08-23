import React from 'react'
import "../CSS/Navbar.css"
import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <div className='navbar'>
            <h1 className='brand'>imageGallery</h1>
            <Link to='/' className='link'>Home</Link>
            <Link to='/gallery' className='link'>Gallery</Link>
           
            
           
    </div>
  )
}

export default Navbar