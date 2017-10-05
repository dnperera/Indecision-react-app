class IndecisionApp extends React.Component {
	constructor(props){
		super(props);
		this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
		this.handlePick = this.handlePick.bind(this);
		this.handleAddOption = this.handleAddOption.bind(this);
		this.handleDeleteOption =this.handleDeleteOption.bind(this);
		this.state={
			options :props.options
		};
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

	handleDeleteOptions(){
		this.setState(()=>({options:[]}));
	}

	handleDeleteOption(optionRemoved){
		this.setState((prevState)=>({
			options:prevState.options.filter((option)=> optionRemoved != option)
		}));
	}

	handlePick(){
		const randomIndex = Math.floor(Math.random()*this.state.options.length);
		const option = this.state.options[randomIndex];
		alert(option);
	}

	handleAddOption(option){
		if(!option){
			return "Enter Valid Value To Add";
		}else if (this.state.options.indexOf(option) > -1){
			return "This option already exists !";
		}

		this.setState((prevState)=>({options:prevState.options.concat(option)}));
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

IndecisionApp.defaultProps ={
	options :[]
};

// class Header extends React.Component {
// 	render(){
// 		return (<div>
// 				<h1>{this.props.title}</h1>
// 				<h2>{this.props.subTitle}</h2>
// 			</div>);
// 	}
// }

const Header =(props) =>{
	return (<div>
			<h1>{props.title}</h1>
			{props.subTitle && <h2>{props.subTitle}</h2>}
		</div>);
}

Header.defaultProps ={
	title:'Indecision App Title!!!!!!'

};

const Action =(props)=>{
	return (<div>
			<button 
			onClick={props.handlePick}
			disabled ={!props.hasOptions}
			> 
			What should I do ?
			</button>
			</div>
		);
}
// class Action extends React.Component {

// 	render(){
// 		return (<div>
// 					<button 
// 					onClick={this.props.handlePick}
// 					disabled ={!this.props.hasOptions}
// 					> 
// 					What should I do ?
// 					</button>
// 				</div>);
// 	}
// }

//Stateless Funcational Components
const Options = (props) => {
	return (

		<div>
			<button onClick={props.handleDeleteOptions}>Remove All</button>
			{props.options.length ===0 && <p>Please add an option to get started !.</p>}
			{
				props.options.map((option) => (<Option 
					key={option} 
					optionText={option}
					handleDeleteOption ={props.handleDeleteOption}
					/>
				))
			}
		</div>
	);
}

// class Option extends React.Component {
// 	render(){
// 		return (
// 			<div>
// 				{this.props.optionText}
// 			</div>
// 			);
// 	}
// }

const Option =(props) => {
	return (
		<div>
			{props.optionText}
			<button 
			onClick={(e) =>{
				props.handleDeleteOption(props.optionText);
			}}
			>
			Remove
			</button>
		</div>
	);
}

class AddOptions extends React.Component {
	constructor(props){
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.state ={
			error :undefined
		}
	}

	handleSubmit(e){
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



ReactDOM.render(<IndecisionApp/>,document.getElementById('app'));