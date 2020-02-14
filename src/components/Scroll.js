import React from 'react';

const Scroll = (props) => {
    return (
        <section style={{overflowY : 'scroll', border : '1px solid black', height : '800px' }}>
			{props.children}
		</section>
    );
};

export default Scroll;