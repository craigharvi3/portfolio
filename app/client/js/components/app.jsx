import React from 'react';
import { Link } from 'react-router';
import Footer from './footer';
import SubFooter from './sub-footer';
import Main from './main';
import Work from './work';

const App = ({}) => {
	return (
		<div>
			<div className="fullscreen-hero">
				<div className="hero-container">
					<div className="hero-content">
						<img src="/img/logo.png" alt="Craig Harvie" />
						<h1>Hi, I'm Craig. I build things.</h1>
						<div className="learn-more">
							<a href="#me">Learn more about what I do
								<br />
								<i className="fa fa-chevron-down"></i>
							</a>
						</div>
					</div>
				</div>
			</div>
			<Main />
			<Work />
			<SubFooter />
			<Footer />
		</div>
	)
}

export default App;