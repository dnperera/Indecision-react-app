class IndecisionApp extends React.Component {
	constructor(props){
		super(props);
		this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
		this.handlePick = this.handlePick.bind(this);
		this.handleAddOption = this.handleAddOption.bind(this);
		this.state ={
			options:[]
		}
	}

	handleDeleteOptions(){
		this.setState(()=>{
			return {
				options:[]
			};
		});
	}

	handlePick(){
		const randomIndex = Math.floor(Math.random()*this.state.options.length);
		alert('random index -->'+this.state.options[randomIndex]);
	}

	handleAddOption(option){
		if(!option){
			return "Enter valid value as an Option !";
		}
		else if(this.state.options.indexOf(option) >-1){
			return "You can not have dulicate values !";
		}

		this.setState((prevState)=>{
			//prevState.options.push(option);
			return{
				options:prevState.options.concat(option)
			};
		});
	}

	render(){
		const title ="Indecision App...";
		const subTitle = "Make your day more productive ...";
		return(
			<div>
				<Header title={title} subTitle={subTitle}/>
				<Action hasOptions={this.state.options.length>0}
				handlePick ={this.handlePick}/>
				<Options options={this.state.options}
				handleDeleteOptions={this.handleDeleteOptions}/>
				<AddOptions 
				handleAddOption={this.handleAddOption}/>
			</div>
		);
	}
}

//Stateless Functional Components
const Header =(props)=> {
	return(
		<div>
			<h1>{props.title}</h1>
			<h3>{props.subTitle}</h3>
		</div>
	); 
}

//Class Base Components
// class Header extends React.Component {
// 	render(){
// 		return(
// 			<div>
// 				<h1>{this.props.title}</h1>
// 				<h3>{this.props.subTitle}</h3>
// 			</div>
// 		); 
// 	}
// }
//Stateless Functional Component
const Action =(props)=>{
		return(
			<div>
				<button onClick={props.handlePick}
				disabled={!props.hasOptions}

				> What should  I do ?</button>
			</div>
		);
}

//Class Based Components
// class Action extends React.Component {

// 	render(){
// 		return(
// 			<div>
// 				<button onClick={this.props.handlePick}
// 				disabled={!this.props.hasOptions}

// 				> What should  I do ?</button>
// 			</div>
// 		);

// 	}
// }


// class Options extends React.Component{
// 	render(){
// 		return(
// 			<div>
// 				<button onClick={this.props.handleDeleteOptions}>Remove</button>
// 				{
// 					this.props.options.map((opt)=><Option key={opt} optionText={opt}/>)
// 				}
// 			</div>
// 		);
// 	}
// }

const Options= (props) =>{
	return(
		<div>
			<button onClick={props.handleDeleteOptions}>Remove</button>
			{
				props.options.map((opt)=><Option key={opt} optionText={opt}/>)
			}
		</div>
	);
}

// class Option extends React.Component{
// 	render(){
// 		return(
// 			<div>
// 				{this.props.optionText}
// 			</div>
// 		);
// 	}
// }

const Option = (props) =>{
	return(
		<div>
			{props.optionText}
		</div>
	);
}

class AddOptions extends React.Component{
	constructor(props){
		super(props);
		this.handleAddItem = this.handleAddItem.bind(this);
		this.state ={
			error:undefined
		};
	}

	handleAddItem(event){
		event.preventDefault();
		const value = event.target.elements.option.value.trim();
		const error = this.props.handleAddOption(value);
		this.setState(()=>{
			return {error};
		});
		event.target.elements.option.value ="";
	}
	
	render(){
		return(
			<div>
				{this.state.error && <p>{this.state.error}</p>}
				<form onSubmit={this.handleAddItem}>
					<input type="text" name="option" placeholder="Enter your Option here"/>
					<button type="submit"> Add Option</button>
				</form>
			</div>
		);
	}
}


ReactDOM.render(<IndecisionApp/>,document.getElementById('app'));