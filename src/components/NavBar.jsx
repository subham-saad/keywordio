import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className='navbar'>
      <div className='logo'>APP LOGO</div>
      <ul className='navlinks'>
        <li>
          <Link to="/">DASHBOARD</Link>
        </li>
        <li>
          <Link to="/ad-creation">CREATE ADS</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
