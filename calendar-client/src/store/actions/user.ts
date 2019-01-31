import request from '../../services/request';

function setUsername(username: string) {
	return {
		type: 'SET-USERNAME',
		username
	}
}

function setPassword(password: string) {
	return {
		type: 'SET-PASSWORD',
		password
	}
}

function login(username: string, password: string) {
	const req = {
		type: 'SUBMIT-LOGIN',
		url: '/login',
		method: 'POST',
		body: { username, password },
	};
	return request(req);
}

function register(username: string, password: string) {
	const req = {
		type: 'SUBMIT-REGISTER',
		url: '/users',
		method: 'POST',
		body: { username, password },
	};
	return request(req);
}

export default { setUsername, setPassword, login, register };
