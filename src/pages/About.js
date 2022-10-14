import React from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

function About() {
	return (
		<div>
			<Logo />
			<Navigation />
			<h1>About</h1>
			<p>
				An exercice to fetch an API ( https://restcountries.com/v3.1/all ) in
				order to display various segments of data. First of all, the name of the
				country, its capital and population amount and the flag.
			</p>
			<br />
			<p>
				To build this app, i've used : <br />
				+ React <br />
				+ React Router Dom <br />
				+ Sass <br />
				+ Axios <br />
				<br />
				The API fetch, done with axios, has... <br />
				...a filter function that matches the radio buttons for the continent,
				<br />
				...a sort function to display the countries mostly populated towards the
				less populated, <br />
				...a slice function to adapt the number of coutries to be displayed
				according to the user's choice, <br />
				...a spinner to show the user that the data is currently being fetched.
			</p>
		</div>
	);
}

export default About;
