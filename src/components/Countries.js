import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';
import Spinner from './Spinner';

function Countries() {
	//! useState hooks
	const [data, setData] = useState([]);
	const [rangeValue, setRangeValue] = useState(36);
	const [selectedRadio, setSelectedRadio] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	//! Micro data
	const radios = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];

	//! useEffect hook
	useEffect(() => {
		setIsLoading(true);
		axios
			.get('https://restcountries.com/v3.1/all')
			.then((res) => setData(res.data) + setIsLoading(false))
			.catch(() => {
				console.log('Unable to fetch user list');
				setIsLoading(false);
			});
	}, []);

	//! Main App
	const renderCountries = (
		<div className='countries'>
			<ul className='radio-container'>
				<input
					type='range'
					min='1'
					max='250'
					defaultValue={rangeValue}
					onChange={(e) => setRangeValue(e.target.value)}
				/>
				<p>{rangeValue}</p>
				{radios.map((continent, index) => (
					<li key={index}>
						<input
							type='radio'
							id={continent}
							name='continentRadio'
							checked={continent === selectedRadio} // Pour éviter de garder le radio coché une fois la recherche annulée
							onChange={(e) => setSelectedRadio(e.target.id)}
						/>
						<label htmlFor={continent}>{continent}</label>
					</li>
				))}
			</ul>
			{selectedRadio && (
				<button onClick={() => setSelectedRadio('')}>All countries</button>
			)}
			<ul>
				{data
					.filter((country) => country.continents[0].includes(selectedRadio))
					.sort((a, b) => b.population - a.population)
					.slice(0, rangeValue)
					.map((country, index) => (
						<Card key={index} country={country} />
					))}
			</ul>
		</div>
	);

	//! Spinner while loading
	return isLoading ? <Spinner /> : renderCountries;
}

export default Countries;
