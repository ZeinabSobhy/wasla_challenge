import arMessages from './ar.messages';
import enMessages from './en.messages';

export const getLocalizedMessages = (locale, paths) => {
	let tempMessage = locale === 'en' ? enMessages : arMessages;
	for (let i = 0; i < paths.length; i++) {
		tempMessage = tempMessage[paths[i]];
	}
	return tempMessage;
};
