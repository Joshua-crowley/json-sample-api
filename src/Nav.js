import React from 'react';
import {Link} from 'react-router-dom';

function Nav() {
  const navStyle = {
    color: 'black',
    textDecoration: 'none',
  }

  return (
    <nav>
      <Link style={navStyle} to='/'>
        <h3>Logo</h3>
      </Link>
      <ul className='nav-links'>
        <Link style={navStyle} to='/'>
          <li>Home</li>
        </Link>
        <Link style={navStyle} to='/users'>
          <li>Users</li>
        </Link>
        <Link style={navStyle} to='/posts'>
          <li>Posts</li>
        </Link>
        <Link style={navStyle} to='/comments'>
          <li>Comments</li>
        </Link>
        <Link style={navStyle} to='/albums'>
          <li>Albums</li>
        </Link>
        <Link style={navStyle} to='/photos'>
          <li>Photos</li>
        </Link>
        <Link style={navStyle} to='/todos'>
          <li>Todos</li>
        </Link>
      </ul>
    </nav>
  );
}
 
export default Nav;