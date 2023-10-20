import type { Request as CFRequest } from '@cloudflare/workers-types';

export interface Env {}

export function handleRequest(request: CFRequest): Response {
	return new Response('Hello World!');
}

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		// the type does not match, but it should!
		return handleRequest(request);
	},
};
