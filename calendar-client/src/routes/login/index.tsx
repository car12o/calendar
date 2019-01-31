import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Input, Button } from 'semantic-ui-react';
import './style.css';
import actions from '../../store/actions';
const { userAc } = actions;

class Login extends React.Component<ILoginProps> {
	public render() {
		const { user, setUsername, setPassword, login, register } = this.props;
		if (user.logged) {
			return <Redirect to={{ pathname: '/' }} />
		}

		return (
			<div className="login-container">
				<div className="input-container">
					<span className="input-label">Username:</span>
					<Input type="text" className="input-element" placeholder="Username..." value={user.username}
						onChange={(e) => setUsername(e.target.value)} />
				</div>

				<div className="input-container">
					<span className="input-label">Password:</span>
					<Input type="password" className="input-element" placeholder="Password..." value={user.password}
						onChange={(e) => setPassword(e.target.value)} />
				</div>

				<div>
					<Button className="ui primary button" onClick={() => login(user.username, user.password)}>Login</Button>
					<Button className="ui secondary button" onClick={() => register(user.username, user.password)}>Register</Button>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state: IState) => ({
	user: state.user,
})

const mapDispatchToProps = (dispatch: Function) => ({
	setUsername: (username: string) => dispatch(userAc.setUsername(username)),
	setPassword: (password: string) => dispatch(userAc.setPassword(password)),
	login: (username: string, password: string) => dispatch(userAc.login(username, password)),
	register: (username: string, password: string) => dispatch(userAc.register(username, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
