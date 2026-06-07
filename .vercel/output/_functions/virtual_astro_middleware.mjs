!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{};e.SENTRY_RELEASE={id:"d8c12cfbe17f71e1e77220f656d682661c0862ff"};var n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="08d02549-e577-4ef8-b6a1-b4e4e99929aa",e._sentryDebugIdIdentifier="sentry-dbid-08d02549-e577-4ef8-b6a1-b4e4e99929aa");}catch(e){}}();import { af as sequence } from './chunks/params-and-props_D_OjNncc.mjs';
import { onRequest as onRequest$1 } from '@sentry/astro/middleware';

const onRequest = sequence(
	onRequest$1,
	
	
);

export { onRequest };
