import React from 'react';
import PropTypes from 'prop-types';
//import {Link} from 'react-router-dom'; 


// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component


/**
 * 
 */
const Navbar = (props) => {
    return  <nav className={`navbar navbar-expand-lg  navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <a className="navbar-brand" href="#">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          {/*<li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
          </li> */}
         {/* <li className="nav-item">
            <a className="nav-link" href="/about">{props.aboutText}</a>
          </li>
          */}
          </ul>
          <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
          <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
        </div>
      </div>
    </div>
  </nav>;
}


// #endregion
//#  proptypes define the type of data in that variable . Ex: title has string data type
Navbar.propTypes={title: PropTypes.string.isRequired,
                aboutText: PropTypes.string
}

//# set the deafult proptypes
Navbar.defaultProps={
    title:"Set title here",
    aboutText:"Provide AboutText"
}
export default Navbar;