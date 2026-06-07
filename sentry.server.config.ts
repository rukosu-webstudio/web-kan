import { init } from "@sentry/astro";

init({
  dsn: import.meta.env.SENTRY_DSN,
  // Add other server-side options here
});
