import React, { useContext } from 'react';
import './Header.css'
import { Link } from "react-router-dom";

const Header = () => {
  // const { toggleStaffView, toggleStudentView } = useContext(AppContext);

  return (
    <header className='header'>
        <img className='img2' src='src/assets/logo.png' alt='/'/>
        <h1>KEC PORTAL</h1>  
        <div className="menu">
           <Link to='/student'>Student</Link>
           <Link to='/staff'>Staff</Link>   
        </div>
                       
    </header>
  );
};

export default Header;