import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {
   return (
      <div className='navbar'>
         <div className='navbar__links' >
            <Link to="/">главная</Link>
            <Link to="/Posts">Новости</Link>
            <Link to="/About">о нас</Link>
         </div>
      </div>
   );
};

export default Navbar;