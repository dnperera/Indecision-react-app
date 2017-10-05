import React from 'react';

export default class AddOptions extends React.Component {
	state ={
		error :undefined
	};


	handleSubmit = (e) => {
		e.preventDefault();
		const option = e.target.elements.option.value.trim();
		e.target.elements.option.value ="";

		const error = this.props.handleAddOption(option);
		this.setState(() =>({error}));
	}

	render(){
		return (
			<div>
				{this.state.error && <p>{this.state.error}</p>}
				<h4>Add a new item </h4>
				<form onSubmit={this.handleSubmit}>
					<input type='text' name='option' />
					<button> Add Option</button>
				</form>
			</div>
		)
	}
}