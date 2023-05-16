import {Link} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import {IoMdClose} from 'react-icons/io'
import Popup from 'reactjs-popup'
import './index.css'

const Header = () => (
  <nav className="navbar">
    <div className="nav-items-container">
      <Link to="/">
        <img
          className="logo"
          alt="website logo"
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png "
        />
      </Link>
      <Popup
        trigger={
          <button
            data-testid="hamburgerIconButton"
            className="trigger-button"
            type="button"
          >
            <GiHamburgerMenu className="hamburger-menu-icon" />
          </button>
        }
        modal
      >
        {close => (
          <>
            <div className="modal-container">
              <div className="model-btn-container">
                <button
                  data-testid="closeButton"
                  type="button"
                  className="trigger-close-button"
                  onClick={() => close()}
                >
                  <IoMdClose className="close-icon" />
                </button>
              </div>
              <ul className="links-container">
                <Link to="/" className="link">
                  <li className="link-home-container">
                    <AiFillHome className="ha-icon" />
                    <p className="home-para">Home</p>
                  </li>
                </Link>
                <Link to="/about" className="link">
                  <li className="link-about-container">
                    <BsInfoCircleFill className="ha-icon" />
                    <p>About</p>
                  </li>
                </Link>
              </ul>
            </div>
          </>
        )}
      </Popup>
    </div>
  </nav>
)

export default Header
