import flatten from 'flat';
import messages from "./en.messages";

export default {
	messages: { ...flatten(messages) },
	locale: 'en',
};
