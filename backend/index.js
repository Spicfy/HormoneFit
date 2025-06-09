import express from "express";
import cors from "cors"; //to enable CORS for the backend server
import sessions from "client-sessions";
import connectDB from "./configs/db.js";
import "dotenv/config"; //to load environment variables from .env file
import authRoutes from "./routes/authRoutes.js"; //importing auth routes
import userRoutes from "./routes/userRoutes.js"; //importing user routes

connectDB();
//connect to cloudinary for image uploads
//load environment variables from .env file
const app = express();

// Middleware setup
app.use(express.json());
app.use(
	cors({
		origin: "http://localhost:3000", // Your frontend URL
		credentials: true,
	}),
);

// Session middleware configuration
app.use(
	sessions({
		cookieName: "session", // cookie name dictates the key name added to the request object
		secret: process.env.COOKIE_SECRET,
		duration: 30 * 60 * 1000, // 30 minutes
		activeDuration: 5 * 60 * 1000, // 5 minutes
		cookie: {
			path: "/",
			ephemeral: false, // when true, cookie expires when the browser closes
			httpOnly: true, // when true, cookie is not accessible from javascript
			secure: process.env.NODE_ENV === "production", // when true, cookie will only be sent over HTTPS
			sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
		},
	}),
);

const PORT = process.env.PORT || 4000;

//API endpoints for testing
app.get("/", (req, res) => {
	console.log("API is working");
	res.send("Hello, World");
});
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
	console.log();
});
