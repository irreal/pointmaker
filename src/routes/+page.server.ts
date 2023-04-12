import type { Actions } from './$types';
import shortuid from 'short-uuid';
import { error, redirect } from '@sveltejs/kit';

export const actions = {
	default: async ({ request, fetch }) => {
		const data = await request.formData();
		const point = data.get('point');
		const id = shortuid.generate();
		const time = new Date().toISOString();

		const response = await fetch(`https://kvdb.io/XwuAz5MyhpVjWQeHLV1oPi/${id}`, {
			method: 'POST',
			body: JSON.stringify({ point, time })
		});
		if (!response.ok) {
			throw error(500, 'Unable to save point');
		}
		throw redirect(303, `/${id}?created=1`);
	}
} satisfies Actions;
