import React from 'react';
import { Link } from 'react-router-dom';
import manImg from '../../images/man.png';
import './Header.scss';

function Header() {
  return (
    <div className="header">
      <Link to={'/'}>
        <div className="logo">Movie App</div>
      </Link>

      <div className="user-image">
        <img
          src={manImg}
          height={38}
          width={50}
          alt="user"
          className=" bg-slate-400 rounded-full "
        />
      </div>
    </div>
  );
}

export default Header;
