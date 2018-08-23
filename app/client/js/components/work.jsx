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
            <li className="grid-item grid-item--third">
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
            <li className="grid-item grid-item--third">
            	<div className="work-image">
              	<a href="https://ufcbrowser.com" target="_blank">
              		<img src="/img/ufcbrowser.png" alt="" />
              	</a>
              </div>
              <h2>UFC Browser</h2>
              <p>
              	The ultimate UFC platform. Explore events, 
                fighters, weight classes and techniques.
              	<br />
              	Built with Node.JS, React and MongoDB.
              </p>
            </li>
            <li className="grid-item grid-item--third">
            	<div className="work-image">
              	<a href="https://bbc.co.uk/radio" target="_blank">
              		<img src="/img/iplayer.jpg" alt="" />
              	</a>
              </div>
              <h2>iPlayer Radio</h2>
              <p>
              	Listen to live BBC Radio or catch up on programmes on demand.
                <br />
                Current Senior Software Engineer
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Work;