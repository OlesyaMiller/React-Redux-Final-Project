import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
        <NavLink
            to="/home"
            exact
            activeStyle={{
                color: 'black'
            }}
            >Home
        </NavLink> |

        <NavLink
            to="/about"
            activeStyle={{
                color: 'black'
            }}
            > About 
        </NavLink> |

        <NavLink
          to="/"
          activeStyle={{
            color: 'black'
          }}
        > All listings </NavLink> |

        <NavLink
          to="/new-listing"
          activeStyle={{
            color: 'black'
          }}
        > New Listing </NavLink>
    </div>

  )
}

export default NavBar;