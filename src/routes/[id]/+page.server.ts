import { error, fail, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from '../$types';

export const load = async function ({ fetch, params }) {
	const point = fetch(`https://kvdb.io/XwuAz5MyhpVjWQeHLV1oPi/${params.id}`).then((response) => {
		if (!response.ok) {
			throw error(400, 'Invalid ID');
		}
		return response.json();
	});
	return {
		point: {
			promise: point
		}
	};
} satisfies PageServerLoad;
