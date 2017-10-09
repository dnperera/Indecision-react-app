import React from 'react';

const Header =(props) =>(
	<div className='header'>
		<h1 className='header__title'>{props.title}</h1>
		{props.subTitle && <h2 className='header___subtitle'>{props.subTitle}</h2>}
	</div>);


Header.defaultProps ={
	title:'Indecision App Title!!!!!!'

};

export default Header;