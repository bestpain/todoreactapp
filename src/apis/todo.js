import axios from 'axios';

export default axios.create({
	baseURL:'https://todo-mysql-server.herokuapp.com'
})
