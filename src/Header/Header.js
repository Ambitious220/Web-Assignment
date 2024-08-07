import React from 'react'
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faSquarePollVertical, faHouse, faClipboardCheck, faWallet, faBagShopping, faWindowRestore } from '@fortawesome/free-solid-svg-icons'



export const Header = () => {
  return (
    <>
      <div className="container-fluid">
        <nav className="navbar navbar-dark bg-dark">
          <div className="vertical-container">
            <nav className="navbar navbar-dark bg-dark">
              <FontAwesomeIcon icon={faWindowRestore} />
              <FontAwesomeIcon icon={faHouse} />
              <FontAwesomeIcon icon={faSquarePollVertical} />
              <FontAwesomeIcon icon={faClipboardCheck} />
              <FontAwesomeIcon icon={faWallet} />
              <FontAwesomeIcon icon={faBagShopping} />
            </nav>
          </div>
        </nav>
        </div>
      </>
      )
}
