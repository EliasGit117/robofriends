import React, {} from 'react';
import './card.css'

const Card = (props) => (
	<div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
		<img alt='robots' className='br-100 ba' style={{ backgroundColor: 'white' }} 
				 src={`https://robohash.org/${props.id}?size=200x200`} height={200} width={200} />
		<div>
			<h2>{props.name}</h2>
			<p>{props.email}</p>
		</div>
	</div>
);

export default Card;