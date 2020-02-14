import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
    return (
        <section id="searchbox" className="pa2">
		<input type="search" placeholder="Search Robots" className="pa3 ba b--green bg-lightest-blue" onChange={searchChange}/>
	</section>
    );
}

export default SearchBox;