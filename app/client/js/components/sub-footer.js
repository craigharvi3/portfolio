import React from 'react';
import { Link } from 'react-router';

const SubFooter = ({}) => {
  return (
    <div className="sub-footer main">
      <div className="wrap">
        <div className="sub-footer--inner">
          <h1>Want to work together?</h1>
          <a href="mailto:craig@craigharvie.me?subject=Hey Craig!" className="button">Get in touch</a>
        </div>
      </div>
    </div>
  )
}

export default SubFooter;