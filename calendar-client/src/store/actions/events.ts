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
		url: body._id === '' ? '/events' : `/events/${body._id}`,
		method: body._id === '' ? 'POST' : 'PATCH',
		body: body,
	};
	return request(req);
}

function deleteEvent(_id: string) {
	const req = {
		type: 'SET-EVENTS',
		url: `/events/${_id}`,
		method: 'DELETE',
		body: null,
	};
	return request(req);
}

export default { getEvents, submitEvent, deleteEvent };
