// This is your test secret API key.
const stripe = require("stripe")(
	"sk_test_51RVwVb2Z21dnospbdVCWTZLV9RxL6fXHXbACgAeFMiRMawEHzXJAWFopY6OL8t7tycOTxspPvcbFB6enGmPj243p00cpv7ic7L",
	{
		apiVersion: "2025-05-28.basil",
	},
);
const express = require("express");
const app = express();
app.use(express.static("public"));
app.use(express.json());

const YOUR_DOMAIN = "http://localhost:3000";

app.post("/create-checkout-session", async (req, res) => {
	const session = await stripe.checkout.sessions.create({
		ui_mode: "custom",
		line_items: [
			{
				price: "price_1RVwoo2Z21dnospbYB6ISyt8",
				quantity: 1,
			},
		],
		mode: "subscription",
		return_url: `${YOUR_DOMAIN}/return?session_id={CHECKOUT_SESSION_ID}`,
		consent_collection: {
			payment_method_reuse_agreement: { position: "auto" },
		},
		automatic_tax: {
			enabled: true,
		},
	});

	res.send({ clientSecret: session.client_secret });
});

app.get("/session-status", async (req, res) => {
	const session = await stripe.checkout.sessions.retrieve(
		req.query.session_id,
	);

	res.send({
		status: session.status,
		customer_email: session.customer_details.email,
	});
});

app.listen(4242, () => console.log("Running on port 4242"));
