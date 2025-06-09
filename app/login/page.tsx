"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
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
				// Redirect to dashboard
				// window.location.href = "/dashboard";
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
		<div className="min-h-screen bg-[#FFEAEA] text-blacktxt">
			<Header />
			<main className="max-w-md mx-auto pt-8 pb-16 px-4">
				<h1 className="text-3xl font-bold text-center mb-8">
					Welcome Back
				</h1>

				<form onSubmit={handleSubmit} className="space-y-4">
					<div>
						<p className="px-1">
							Email Address
							<span className="text-red-700">*</span>
						</p>
						<input
							type="email"
							placeholder="Email Address"
							className="w-full px-4 py-3 rounded-xl bg-white/50 border-1 border-[#B1A8A8]/50 focus:outline-none focus:border-accent2"
							value={formData.email}
							onChange={(e) =>
								setFormData({
									...formData,
									email: e.target.value,
								})
							}
							required
						/>
					</div>

					<div>
						<p className="px-1">
							Password
							<span className="text-red-700">*</span>
						</p>
						<input
							type="password"
							placeholder="Password"
							className="w-full px-4 py-3 rounded-xl bg-white/50 border-1 border-[#B1A8A8]/50 focus:outline-none focus:border-accent2"
							value={formData.password}
							onChange={(e) =>
								setFormData({
									...formData,
									password: e.target.value,
								})
							}
							required
						/>
					</div>

					<div className="space-y-4">
						{/* Error Message */}
						{errorReason && (
							<div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-xl">
								Invalid email or password. Please try again.
							</div>
						)}

						{/* Success Message */}
						{successMessage && (
							<div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-xl">
								{successMessage}
							</div>
						)}

						<button
							type="submit"
							disabled={loading}
							className="w-full py-3 px-4 text-white rounded-xl bg-accent1 hover:bg-accent2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
						>
							{loading ? "Signing In..." : "Sign In"}
						</button>

						<div className="text-center">
							<Link
								href="/forgot-password"
								className="text-sm text-accent1 hover:text-accent2 transition-colors"
							>
								Forgot your password?
							</Link>
						</div>

						<div className="text-center">
							<p className="text-sm text-gray-600">
								Don't have an account?{" "}
								<Link
									href="/signup"
									className="text-accent1 hover:text-accent2 transition-colors font-semibold"
								>
									Create one here
								</Link>
							</p>
						</div>

						<p className="text-xs text-center text-gray-500">
							By signing in, you are agreeing to{" "}
							<Link
								href="/terms"
								className="text-accent1 hover:text-accent2 transition-colors"
							>
								Terms of Use
							</Link>{" "}
							and{" "}
							<Link
								href="/privacy"
								className="text-accent1 hover:text-accent2 transition-colors"
							>
								Privacy Policy
							</Link>
							.
						</p>

						<p className="text-xs text-center text-gray-500">
							Hormone Fit intake assessments do not constitute
							medical care. A Felix healthcare practitioner will
							be assigned to you after submission to approve your
							treatment.
						</p>
					</div>
				</form>
			</main>
		</div>
	);
}
