"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
<<<<<<< HEAD
import Header from "@/components/Header";
=======
>>>>>>> master
import Link from "next/link";
import axios from "axios";

export default function Login() {
	const Router = useRouter();
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});
	const [errorReason, setErrorReason] = useState(false);
	const [successMessage, setSuccessMessage] = useState("");
	const [loading, setLoading] = useState(false);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setLoading(true);
		setErrorReason(false);
		setSuccessMessage("");

		try {
			const response = await axios.post(
				"http://localhost:4000/api/auth/login",
				{
					email: formData.email,
					password: formData.password,
				},
				{
					withCredentials: true,
				},
			);

			if (response.status === 200 && response.data.success) {
				setSuccessMessage("Login successful!");
				Router.push("/dashboard");
			} else {
				setErrorReason(true);
				console.error("Login failed:", response.data.message);
			}
		} catch (error) {
			console.error("Error during login:", error);
			setErrorReason(true);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="min-h-screen bg-primary flex flex-col">
			{/* Brand at top left */}
			<header className="w-full flex items-center justify-start px-8 py-6">
				<span className="text-2xl font-bold text-accent1 tracking-tight select-none">Hormone Plus</span>
			</header>

			{/* Centered login form */}
			<main className="flex-1 flex flex-col items-center justify-center">
				<div className="w-full max-w-md bg-whitetxt/80 rounded-2xl shadow-md px-8 py-10">
					<h1 className="text-4xl font-semibold text-center mb-8 text-blacktxt">Welcome back</h1>
					<form onSubmit={handleSubmit} className="space-y-5">
						<div>
							<input
								type="email"
								placeholder="Email"
								className="w-full px-4 py-3 rounded-xl bg-whitetxt border border-accent1/50 focus:outline-none focus:border-accent2 text-blacktxt"
								value={formData.email}
								onChange={(e) => setFormData({ ...formData, email: e.target.value })}
								required
							/>
						</div>
						<div>
							<input
								type="password"
								placeholder="Password"
								className="w-full px-4 py-3 rounded-xl bg-whitetxt border border-accent1/50 focus:outline-none focus:border-accent2 text-blacktxt"
								value={formData.password}
								onChange={(e) => setFormData({ ...formData, password: e.target.value })}
								required
							/>
						</div>
						{errorReason && (
<<<<<<< HEAD
							<div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-xl">
=======
							<div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-xl text-center">
>>>>>>> master
								Invalid email or password. Please try again.
							</div>
						)}
						{successMessage && (
							<div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-xl text-center">
								{successMessage}
							</div>
						)}
						<button
							type="submit"
							disabled={loading}
							className="w-full py-3 px-4 text-white rounded-xl bg-accent1 hover:bg-accent2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-lg font-semibold"
						>
							{loading ? "Signing In..." : "Log in"}
						</button>
					</form>

					<div className="mt-6 space-y-3">
						<div className="text-center">
							<Link
								href="/forgot-password"
								className="text-sm text-accent1 hover:text-accent2 transition-colors"
							>
								Forgot your password?
							</Link>
						</div>
						<div className="text-center">
							<p className="text-sm text-secondarytxt">
								Don't have an account?{' '}
								<Link
									href="/signup"
									className="text-accent1 hover:text-accent2 transition-colors font-semibold"
								>
									Create one here
								</Link>
							</p>
						</div>
						<p className="text-xs text-center text-secondarytxt/70">
							By signing in, you are agreeing to{' '}
							<Link href="/terms" className="text-accent1 hover:text-accent2 transition-colors">Terms of Use</Link>{' '}and{' '}
							<Link href="/privacy" className="text-accent1 hover:text-accent2 transition-colors">Privacy Policy</Link>.
						</p>
						<p className="text-xs text-center text-secondarytxt/70">
							Hormone Fit intake assessments do not constitute medical care. A Felix healthcare practitioner will be assigned to you after submission to approve your treatment.
						</p>
					</div>
				</div>
			</main>
		</div>
	);
}
