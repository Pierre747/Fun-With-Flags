import React from 'react';

function Logo() {
	return (
		<div className='logo'>
			<img src='./earth-png.gif' alt='logo react' />
			{/* Pour l'import des images React pense que l'on se situe dans le répertoire public */}
			<h3>React World</h3>
		</div>
	);
}

export default Logo;
