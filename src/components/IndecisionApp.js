import React from 'react';

import AddOptions from './AddOptions';
import Options from './Options';
import Header from './Header';
import Action from './Action';

export default class IndecisionApp extends React.Component {
	state = {
			options :[]
	};

	handleDeleteOptions =() => {
		this.setState(()=>({options:[]}));
	}

	handleDeleteOption =(optionRemoved) =>{
		this.setState((prevState)=>({
			options:prevState.options.filter((option)=> optionRemoved != option)
		}));
	}

	handlePick = () => {
		const randomIndex = Math.floor(Math.random()*this.state.options.length);
		const option = this.state.options[randomIndex];
		alert(option);
	}

	handleAddOption =(option) => {
		if(!option){
			return "Enter Valid Value To Add";
		}else if (this.state.options.indexOf(option) > -1){
			return "This option already exists !";
		}

		this.setState((prevState)=>({options:prevState.options.concat(option)}));
	}
	
	componentDidMount(){
		try{
			const jsonOptions = localStorage.getItem('options');
			const options = JSON.parse(jsonOptions);
			if(options){
				this.setState(() =>({options}));
			}
		}catch (e){
			//do nothing
		}
	}

	componentDidUpdate(prevProps,prevState){
		if(prevState.options.length != this.state.options.length) {
			const jsonOptions = JSON.stringify(this.state.options);
			localStorage.setItem('options',jsonOptions);
		}
	}


	render() {
		//const title = 'Indecision App Title';
		const subTitle = 'Put your life in the hands of REACT';
		return (
			<div>
				<Header subTitle={subTitle}/>
				<Action hasOptions={this.state.options.length >0}
						handlePick = {this.handlePick}
				/>
				<Options 
					options={this.state.options}
					handleDeleteOptions={this.handleDeleteOptions}
					handleDeleteOption={this.handleDeleteOption}
				/>
				<AddOptions 
					handleAddOption={this.handleAddOption}/>
			</div>
			);
	}
}
