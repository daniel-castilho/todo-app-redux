import axios from 'axios';

const URL = "http://localhost:3000/api/todos"

export const changeDescription = (event) => ({
	type: "DESCRIPTION_CHANGED",
	payload: event.target.value,
});

export const search = () => {
	const req = axios.get(`${URL}?sort=-createdAt${search}`)
	return {
		type: 'TODO_SEARCHED',
		payload: req
	}
}