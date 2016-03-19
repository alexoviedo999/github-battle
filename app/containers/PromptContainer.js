var React = require('react');
var Prompt = require('../components/Prompt');

var PromptContainer = React.createClass({
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},
	getInitialState: function () {
		return {
			username: ''
		}
	},
	handleOnUpdateUser: function (e) {
		this.setState({
			username: e.target.value
		});
	},
	handleOnSubmitUser: function (e) {
		e.preventDefault();
		var username = this.state.username;
		this.setState({
			username: ''
		});

		if (this.props.routeParams.playerOne) {
			console.log(this.context);
			this.context.router.push({
				pathname: '/battle',
				query: {
					playerOne: this.props.routeParams.playerOne,
					playerTwo: this.state.username
				}
			});
		} else {
			this.context.router.push('/playerTwo/' + this.state.username);
			console.log(this.context);
		}
	},
	render: function () {
		console.log(this);
		return (
			<Prompt
			 	onSubmitUser={this.handleOnSubmitUser}
				onUpdateUser={this.handleOnUpdateUser}
				header={this.props.route.header}
				username={this.state.username} />
		)
	}
});

module.exports = PromptContainer;
