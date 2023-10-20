import type { Response as CFResponse } from '@cloudflare/workers-types';
import { expectTypeOf, test } from 'vitest';
import { handleRequest } from '.';

test('check response type', () => {
	expectTypeOf(handleRequest).toBeFunction();
	// the type does not match, but it should!
	expectTypeOf(handleRequest).returns.toMatchTypeOf<CFResponse>();
});
