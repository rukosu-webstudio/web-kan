import { init } from "@sentry/astro";

init({
  dsn: import.meta.env.PUBLIC_SENTRY_DSN || import.meta.env.SENTRY_DSN,
  // Add other client-side options here
});
