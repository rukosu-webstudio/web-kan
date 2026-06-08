!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{};e.SENTRY_RELEASE={id:"1dc07b35b0583b43bc2361e999b8228f15f82ed0"};var n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="08d02549-e577-4ef8-b6a1-b4e4e99929aa",e._sentryDebugIdIdentifier="sentry-dbid-08d02549-e577-4ef8-b6a1-b4e4e99929aa");}catch(e){}}();import { af as sequence } from './chunks/params-and-props_CQL3fTpr.mjs';
import { onRequest as onRequest$1 } from '@sentry/astro/middleware';

const onRequest = sequence(
	onRequest$1,
	
	
);

export { onRequest };
