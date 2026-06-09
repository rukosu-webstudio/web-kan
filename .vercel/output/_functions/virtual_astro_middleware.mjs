!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{};e.SENTRY_RELEASE={id:"fc0a3215185208421c8509241fe46789d2fcc797"};var n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="89a9f991-9385-4739-855a-81b62384675a",e._sentryDebugIdIdentifier="sentry-dbid-89a9f991-9385-4739-855a-81b62384675a");}catch(e){}}();import { af as sequence } from './chunks/params-and-props_DEd3TzkK.mjs';
import { onRequest as onRequest$1 } from '@sentry/astro/middleware';

const onRequest = sequence(
	onRequest$1,
	
	
);

export { onRequest };
