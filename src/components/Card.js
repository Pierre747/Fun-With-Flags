import React from 'react';

function Card({ country }) {
	return (
		<div>
			<li className='card'>
				<img src={country.flags.svg} alt={'flag of ' + country.name.common} />
				<div className='infos'>
					<h2>{country.name.common}</h2>
					<h4>{country.capital}</h4>
					<p>Pop. {country.population.toLocaleString()}</p>
				</div>
			</li>
		</div>
	);
}

export default Card;
