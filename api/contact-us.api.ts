import axios from 'axios';
import { ContactMessageBody } from '../models/contact-us.model';

export const sendContactMessage = ({name, email, description}: ContactMessageBody) => {
	return axios.post("http://167.99.10.248:3014/api/v1/contact-us", {
		name,
		email,
		description
	});
}
