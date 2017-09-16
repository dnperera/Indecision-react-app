"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
	_inherits(IndecisionApp, _React$Component);

	function IndecisionApp(props) {
		_classCallCheck(this, IndecisionApp);

		var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

		_this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
		_this.handlePick = _this.handlePick.bind(_this);
		_this.handleAddOption = _this.handleAddOption.bind(_this);
		_this.state = {
			options: []
		};
		return _this;
	}

	_createClass(IndecisionApp, [{
		key: "handleDeleteOptions",
		value: function handleDeleteOptions() {
			this.setState(function () {
				return {
					options: []
				};
			});
		}
	}, {
		key: "handlePick",
		value: function handlePick() {
			var randomIndex = Math.floor(Math.random() * this.state.options.length);
			alert('random index -->' + this.state.options[randomIndex]);
		}
	}, {
		key: "handleAddOption",
		value: function handleAddOption(option) {
			if (!option) {
				return "Enter valid value as an Option !";
			} else if (this.state.options.indexOf(option) > -1) {
				return "You can not have dulicate values !";
			}

			this.setState(function (prevState) {
				//prevState.options.push(option);
				return {
					options: prevState.options.concat(option)
				};
			});
		}
	}, {
		key: "render",
		value: function render() {
			var title = "Indecision App...";
			var subTitle = "Make your day more productive ...";
			return React.createElement(
				"div",
				null,
				React.createElement(Header, { title: title, subTitle: subTitle }),
				React.createElement(Action, { hasOptions: this.state.options.length > 0,
					handlePick: this.handlePick }),
				React.createElement(Options, { options: this.state.options,
					handleDeleteOptions: this.handleDeleteOptions }),
				React.createElement(AddOptions, {
					handleAddOption: this.handleAddOption })
			);
		}
	}]);

	return IndecisionApp;
}(React.Component);

//Stateless Functional Components


var Header = function Header(props) {
	return React.createElement(
		"div",
		null,
		React.createElement(
			"h1",
			null,
			props.title
		),
		React.createElement(
			"h3",
			null,
			props.subTitle
		)
	);
};

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
var Action = function Action(props) {
	return React.createElement(
		"div",
		null,
		React.createElement(
			"button",
			{ onClick: props.handlePick,
				disabled: !props.hasOptions

			},
			" What should  I do ?"
		)
	);
};

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

var Options = function Options(props) {
	return React.createElement(
		"div",
		null,
		React.createElement(
			"button",
			{ onClick: props.handleDeleteOptions },
			"Remove"
		),
		props.options.map(function (opt) {
			return React.createElement(Option, { key: opt, optionText: opt });
		})
	);
};

// class Option extends React.Component{
// 	render(){
// 		return(
// 			<div>
// 				{this.props.optionText}
// 			</div>
// 		);
// 	}
// }

var Option = function Option(props) {
	return React.createElement(
		"div",
		null,
		props.optionText
	);
};

var AddOptions = function (_React$Component2) {
	_inherits(AddOptions, _React$Component2);

	function AddOptions(props) {
		_classCallCheck(this, AddOptions);

		var _this2 = _possibleConstructorReturn(this, (AddOptions.__proto__ || Object.getPrototypeOf(AddOptions)).call(this, props));

		_this2.handleAddItem = _this2.handleAddItem.bind(_this2);
		_this2.state = {
			error: undefined
		};
		return _this2;
	}

	_createClass(AddOptions, [{
		key: "handleAddItem",
		value: function handleAddItem(event) {
			event.preventDefault();
			var value = event.target.elements.option.value.trim();
			var error = this.props.handleAddOption(value);
			this.setState(function () {
				return { error: error };
			});
			event.target.elements.option.value = "";
		}
	}, {
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				null,
				this.state.error && React.createElement(
					"p",
					null,
					this.state.error
				),
				React.createElement(
					"form",
					{ onSubmit: this.handleAddItem },
					React.createElement("input", { type: "text", name: "option", placeholder: "Enter your Option here" }),
					React.createElement(
						"button",
						{ type: "submit" },
						" Add Option"
					)
				)
			);
		}
	}]);

	return AddOptions;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));
