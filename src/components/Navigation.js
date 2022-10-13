import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
	return (
		<div className='navigation'>
			<ul>
				<NavLink
					to='/'
					end
					className={(nav) => (nav.isActive ? 'nav-active' : '')}
				>
					Accueil
				</NavLink>
				<NavLink
					to='/about'
					end
					className={(nav) => (nav.isActive ? 'nav-active' : '')}
				>
					A propos
				</NavLink>
			</ul>
		</div>
	);
}

export default Navigation;
