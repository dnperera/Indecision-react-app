import React from 'react';

//Stateless Funcational Components
const Action = (props) => {
	return (<div>
				<button 
				onClick={props.handlePick}
				disabled ={!props.hasOptions}
				> 
				What should I do ?
				</button>
			</div>);
}

export default Action;