import { STRIPE_SECRET_KEY } from '$env/static/private';
import Stripe from 'stripe';
import { error, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import { currentBooking } from '$lib/store';

const stripe = new Stripe(STRIPE_SECRET_KEY);

export const actions: Actions = {
	checkout: async ({ request }) => {
		let sessionUrl: string | null;

		// get params
		const formData = await request.formData();
		const seatBooking = formData.get('seatBooking')?.toString() || '';

		try {
			const session = await stripe.checkout.sessions.create({
				line_items: [
					{
						price: 'price_1PWEf0JIiOwtKCnpmM5D19jW',
						quantity: 1
					}
				],
				mode: 'payment',
				payment_method_types: ['promptpay'],
				success_url: `${request.headers.get('origin')}/?success`,
				cancel_url: `${request.headers.get('origin')}/?cancelled`
			});

			sessionUrl = session.url;

			currentBooking.set({
				session_id: session.id,
				created: Date.now(),
				status: 'pending',
				seat: seatBooking ? seatBooking : ''
			});

			currentBooking.subscribe((booking) => console.log(booking));
		} catch (err) {
			console.error(err);
			throw error(500, 'Stripe error');
		}

		if (sessionUrl) {
			console.log(sessionUrl);
			throw redirect(303, sessionUrl);
		}
	}
};
