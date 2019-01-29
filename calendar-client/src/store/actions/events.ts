import request from '../../services/request';

function getEvents() {
	const req = {
		type: 'SET-EVENTS',
		url: '/events',
		method: 'GET',
		body: null,
	};
	return request(req);
}

function submitEvent(body: IEvent) {
	const req = {
		type: 'SET-EVENTS',
		url: '/events',
		method: 'POST',
		body: body,
	};
	return request(req);
}

export default { getEvents, submitEvent };
