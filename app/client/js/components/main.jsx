import React from 'react';
import { Link } from 'react-router';

const Main = ({}) => {
  return (
    <main className="main" id="me">
      <h1>What I do</h1>
      <p>I try to do a little bit of everything.</p>
      <div className="wrap">
        <div className="main--inner">
          <ul className="grid">
            <li className="grid-item grid-item--third">
              <i className="icon fa fa-lightbulb-o" aria-hidden="true"></i>
              <h2>Ideas</h2>
              <p>
                I experiment with concepts non-stop. 
                I love music and sports so a lot of 
                the projects I do revolve around that.
                I'm always trying out new technology
                and expanding my knowledge.
              </p>
            </li>
            <li className="grid-item grid-item--third">
              <i className="icon fa fa-magic" aria-hidden="true"></i>
              <h2>UI</h2>
              <p>
                I try to make things look beautiful.
                Whenever I work on a website, I ensure 
                they are fully accessible and easy for 
                my users to navigate. The less they have
                to think... the better.
              </p>
            </li>
            <li className="grid-item grid-item--third">
              <i className="icon fa fa-code" aria-hidden="true"></i>
              <h2>Code</h2>
              <p>
                I love building things from scratch.
                I have a deep knowledge of Node.JS, 
                React.JS,  Javascript, SASS (CSS) and HTML5.
                I've also coded in ColdFusion, PHP, 
                MySQL and more.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </main>
  )
}

export default Main;