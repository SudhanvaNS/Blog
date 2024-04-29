import React, { useContext } from 'react'
import logo from '../img/profile_pic.webp';
import {Link} from 'react-router-dom';
import {AuthContext} from '../context/authContext.js';
export default function Navbar() {
  const {currentUser ,logout} = useContext(AuthContext);
  
  return (
    <>
      <div className='navbar'>
          <div className='container'>
            <div className='logo'>
             <Link to='/'>
             
             <img src={logo} className='behappy' alt ="not found"></img> 
             </Link> 
             </div>
                <div className='links'>
                  <Link className='link' to="/?cat=art"><h6>ART</h6></Link>
                  <Link className='link' to='/?cat=science'><h6>SCIENCE</h6></Link>
                  <Link className='link' to='/?cat=technology'><h6>TECHNOLOGY</h6></Link>
                  <Link className='link' to='/?cat=cinema'><h6>CINEMA</h6></Link>
                  <Link className='link' to='/?cat=design'><h6>DESIGN</h6></Link>
                  <Link className='link' to='/?cat=food'><h6>FOOD</h6></Link>
                  <span> {currentUser?.username}  </span>
                  {currentUser? (
                  <span onClick={logout}> 
                    LOGOUT 
                  </span>
                   ):(
                   <Link className='link' to='/login'>
                    Login
                    </Link>
                  )}
                  <span className='write'> 
                    <Link to='/write'> Write </Link>
                  </span>

                </div>
              </div>
      
      </div>
    </>
    
  )
}
