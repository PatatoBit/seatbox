import { STRIPE_SECRET_KEY } from '$env/static/private';
import Stripe from 'stripe';
import { error, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

const stripe = new Stripe(STRIPE_SECRET_KEY);

export const actions: Actions = {
	checkout: async ({ request }) => {
		let url: string | null;

		try {
			const session = await stripe.checkout.sessions.create({
				line_items: [
					{
						price: 'price_1PWEf0JIiOwtKCnpmM5D19jW',
						quantity: 1
					}
				],
				mode: 'payment',
				success_url: `${request.headers.get('origin')}/?success`,
				cancel_url: `${request.headers.get('origin')}/?cancelled`
			});

			url = session.url;
		} catch (err) {
			console.error(err);
			throw error(500, 'Stripe error');
		}

		if (url) {
			console.log(url);
			throw redirect(303, url);
		}
	}
};
