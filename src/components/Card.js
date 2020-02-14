import React from 'react';

const Card = ({name, email, id}) => {
    return (
        <section className='tc bg-light-green dib br3 pa5 ma3 grow bw2 shadow-5'>
	        <img alt ="card" src={`https://robohash.org/${id}?200x200'`} />
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</section>
    );
}


export default Card;