import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';

const Layout =(props)=>{
	return (
		<div>
			<p>Header </p>
			{props.children}
			<p>Footer</p>
		</div>
	);
}

const template =(
		<div>
			<h1>Dayan Portfolio </h1>
			<p>This is my projects</p>
		</div>
	);

ReactDOM.render(<Layout>
					<div>
						<h1>Dayan Portfolio </h1>
						<p>This is my projects</p>
					</div>
				</Layout>,document.getElementById('app'));

