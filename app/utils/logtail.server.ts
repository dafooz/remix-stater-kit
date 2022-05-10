import { Logtail } from '@logtail/node';

const logtail = new Logtail(process.env.LOGTAIL_SOURCE_TOKEN || '');

export const log = logtail.log;
export const logError = logtail.error;
export const logInfo = logtail.info;
export const logDebug = logtail.debug;
export const logWarn = logtail.warn;
