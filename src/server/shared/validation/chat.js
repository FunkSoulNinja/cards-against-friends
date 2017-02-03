import { Validator } from './index';

export const MESSAGE_LENGTH_LIMIT = 50;
export function validateMessage(message) {
	if (message.length > MESSAGE_LENGTH_LIMIT) {
		return Validator.fail(`Messages must be under ${MESSAGE_LENGTH_LIMIT} characters long`);
	}

	return Validator.succeed();
}
