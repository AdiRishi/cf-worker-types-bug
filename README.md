### Bug Description

- First install packages with `pnpm install`
- If you open `index.ts` you will see a type error

```
Argument of type 'Request' is not assignable to parameter of type 'Request<unknown, CfProperties<unknown>>'.
  Property 'fetcher' is missing in type 'Request' but required in type 'Request<unknown, CfProperties<unknown>>'
```

For some reason, as soon as you import `vitest` anywhere in the project, the default type of `Request` changes from the type in `@cloudflare/worker-types` to the standard `Request` type from `@types/node`. This is a problem because the `Request` type from `@types/node` is not compatible with the `Request` type from `@cloudflare/worker-types`.

You can confirm this behavior by commenting out everything in `index.test-d.ts` and running `pnpm run typecheck`. You will see that the type error goes away.
