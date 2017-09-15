class IndecisionApp extends React.Component {
	render(){
		const title ="Indecision App...";
		const subTitle = "Make your day more productive ...";
		const options =['Option 1','Option 2','Option 4'];
		return(
			<div>
				<Header title={title} subTitle={subTitle}/>
				<Action/>
				<Options options={options}/>
				<AddOptions/>
			</div>
		);
	}
}

class Header extends React.Component {
	render(){
		return(
			<div>
				<h1>{this.props.title}</h1>
				<h3>{this.props.subTitle}</h3>
			</div>
		); 
	}
}

class Action extends React.Component {
	handlePick(){
		alert("click me");
	}

	render(){
		return(
			<div>
				<button onClick={this.handlePick}> What should  I do ?</button>
			</div>
		);

	}
}


class Options extends React.Component{
	constructor(props){
		super(props);
		this.handleRemoveAll =this.handleRemoveAll.bind(this);
	}
	handleRemoveAll(){
		console.log(this.props.options);
	}

	render(){
		return(
			<div>
				<button onClick={this.handleRemoveAll}>Remove</button>
				{
					this.props.options.map((opt)=><Option key={opt} optionText={opt}/>)
				}
			</div>
		);
	}
}
class Option extends React.Component{
	render(){
		return(
			<div>
				{this.props.optionText}
			</div>
		);
	}
}

class AddOptions extends React.Component{
	handleAddOption(event){
		event.preventDefault();
		const value = event.target.elements.option.value.trim();
		if(value){
			alert(value);
			event.target.elements.option.value ="";
		}
	}
	
	render(){
		return(
			<div>
				<form onSubmit={this.handleAddOption}>
					<input type="text" name="option" placeholder="Enter your Option here"/>
					<button type="submit"> Add Option</button>
				</form>
			</div>
		);
	}
}

ReactDOM.render(<IndecisionApp/>,document.getElementById('app'));