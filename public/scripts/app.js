'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

console.log('App.js is running');
//JSX
var app = {
	title: 'In Decision App',
	subTitle: 'This is a react app',
	options: []
};

var onFormSubmit = function onFormSubmit(e) {
	e.preventDefault();
	var option = e.target.elements.option.value;
	console.log('entered option', option);

	if (option) {
		app.options.push(option);
		e.target.elements.option.value = "";
		renderApp();
	}
};

var onMakeDecision = function onMakeDecision() {
	var number = Math.floor(Math.random() * app.options.length);
	alert(app.options[number]);
};
var visibility = false;

var toggleVisibility = function toggleVisibility() {
	visibility = !visibility;
	renderApp();
};

var Person = function () {
	function Person() {
		var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Anonymous';
		var age = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

		_classCallCheck(this, Person);

		this.name = name;
		this.age = age;
	}

	_createClass(Person, [{
		key: 'getGreetings',
		value: function getGreetings() {
			return 'Hi . I am ' + this.name + ' and ' + this.age + ' years old !!!';
			//return 'Hi. I am '+this.name+' and '+this.age+' years old !!!!'
		}
	}]);

	return Person;
}();

//subclasses


var Student = function (_Person) {
	_inherits(Student, _Person);

	function Student(name, age, major) {
		_classCallCheck(this, Student);

		var _this = _possibleConstructorReturn(this, (Student.__proto__ || Object.getPrototypeOf(Student)).call(this, name, age));

		_this.major = major;
		return _this;
	}

	_createClass(Student, [{
		key: 'hasMajor',
		value: function hasMajor() {
			return !!this.major;
		}
	}]);

	return Student;
}(Person);

var person1 = new Student('Dayan Perera', 43, 'Maths & Physics');
console.log(person1);
console.log(person1.hasMajor());
var person2 = new Student();
console.log(person2.hasMajor());
console.log(person2.getGreetings());

var renderApp = function renderApp() {
	var i = 0;
	var template = React.createElement(
		'div',
		null,
		React.createElement(
			'h1',
			null,
			app.title ? app.title : "Title does not exist !!"
		),
		app.subTitle && React.createElement(
			'p',
			null,
			app.subTitle
		),
		app.options && app.options.length > 0 && React.createElement(
			'p',
			null,
			'Options :',
			app.options[0],
			',',
			app.options[1]
		),
		React.createElement(
			'button',
			{ disabled: app.options.length === 0, onClick: onMakeDecision },
			'What Should I Do ? '
		),
		React.createElement(
			'ul',
			null,
			app.options.map(function (opt) {
				i++;
				return React.createElement(
					'li',
					{ key: i },
					opt
				);
			})
		),
		React.createElement(
			'form',
			{ onSubmit: onFormSubmit },
			React.createElement('input', { type: 'text', name: 'option' }),
			React.createElement(
				'button',
				null,
				'Add a option'
			)
		),
		React.createElement(
			'button',
			{ onClick: toggleVisibility },
			visibility ? 'Hide Details' : 'Show Details'
		),
		visibility && React.createElement(
			'h1',
			null,
			'Here is the details you expect to see .'
		)
	);

	ReactDOM.render(template, document.getElementById("app"));
};

renderApp();
