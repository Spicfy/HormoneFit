"use server";

import { headers } from "next/headers";

import { stripe } from "../../lib/stripe";

export async function fetchClientSecret() {
	const origin = (await headers()).get("origin");

	// Create Checkout Sessions from body params.
	const session = await stripe.checkout.sessions.create({
		ui_mode: "embedded",
		line_items: [
			{
				price: "price_1RVwoo2Z21dnospbYB6ISyt8",
				quantity: 1,
			},
		],
		mode: "subscription",
		return_url: `${origin}/return?session_id={CHECKOUT_SESSION_ID}`,
		consent_collection: {
			payment_method_reuse_agreement: { position: "auto" },
		},
		automatic_tax: {
			enabled: true,
		},
	});

	return session.client_secret;
}
