import React from 'react';
import { Link } from 'react-router';

const Footer = ({}) => {
  return (
    <footer>
      <div className="wrap">
        <div className="footer--inner">
          <a href="/">
            <img src="/img/logo.png" alt="Craig Harvie" />
          </a>
          <p>Made my me &copy; {new Date().getFullYear()}</p>
          <ul className="icons">
            <li>
              <a href="https://twitter.com/CraigHarvie" className="fa fa-twitter" target="_blank">
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/charvie1" className="fa fa-facebook" target="_blank">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/charvie5/" className="fa fa-instagram" target="_blank">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/craigharvi3" className="fa fa-github" target="_blank">
                <span className="label">GitHub</span>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/craig-harvie-35ba9174/" className="fa fa-linkedin" target="_blank">
                <span className="label">LinkedIn</span>
              </a>
            </li>
        </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer;