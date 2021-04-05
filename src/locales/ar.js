import flatten from 'flat';
import messages from "./ar.messages";

export default {
	messages: { ...flatten(messages) },
	locale: 'ar',
};
