import { env } from '$env/dynamic/public';

export const APP_VERSION = env.PUBLIC_APP_VERSION ?? 'N/A';
export const APP_SHA = (env.PUBLIC_APP_SHA ?? '').substring(0, 7);
