import React from 'react';
import { Link } from 'react-router';

const Work = ({}) => {
  return (
    <div className="main work">
      <h1>What I've done</h1>
      <p>Just some examples.</p>
      <div className="wrap">
        <div className="main--inner">
          <ul className="grid">
            <li className="grid-item">
            	<div className="work-image fightfeed">
              	<a href="https://fightfeed.co.uk" target="_blank">
              		<img src="/img/fightfeed.png" alt="" />
              	</a>
              </div>
              <h2>FightFeed</h2>
              <p>
              	The personalised MMA news feed.
              	<br />
              	Built with Express, MongoDB, React and Redux.
              </p>
            </li>
            <li className="grid-item">
            	<div className="work-image audiospace">
              	<a href="https://audiospace.club" target="_blank">
              		<img src="/img/audiospace.jpg" alt="" />
              	</a>
              </div>
              <h2>AudioSpace</h2>
              <p>
              	The platform for music producers to share 
              	and collaborate on music projects and 
              	prototypes.
              	<br />
              	Built with Silex, ES6 and Sass.
              </p>
            </li>
            <li className="grid-item">
            	<div className="work-image mmaexperience">
              	<a href="https://mmaexperience.co.uk" target="_blank">
              		<img src="/img/mmaexperience.png" alt="" />
              	</a>
              </div>
              <h2>MMA Experience</h2>
              <p>
              	A personalised news hub for all things MMA.
              	<br />
              	Built with Silex, ES6 and Sass.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Work;