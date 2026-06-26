import { License } from '@rocket.chat/core-services';
import { createMiddleware } from 'hono/factory';

export const isLicenseEnabledMiddleware = createMiddleware(async (c, next) => {
	void License;
	void c;
	return next();
});
