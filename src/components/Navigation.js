import React from "react";
import { Link } from 'react-router-dom';
import { BiArchiveIn } from 'react-icons/bi';
import { AiOutlineHome } from 'react-icons/ai';


function Navigation() {
    return (
      <nav className="navigation">
        <ul>
          <li>
            <Link to="/" title="Home Catatan"><AiOutlineHome/></Link>
          </li>
          <li>
            <Link to="/archives" title="Arsip Catatan"><BiArchiveIn/></Link>
          </li>
        </ul>
      </nav>
    );
  }
  
  export default Navigation;