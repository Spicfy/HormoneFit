"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

interface RegisterFormData {
	first_name: string;
	last_name: string;
	email: string;
	password: string;
	confirmPassword: string;
	date_of_birth: string;
	gender: "male" | "female" | "other";
}

interface RegisterFormProps {
	onSuccess?: () => void;
	onSwitchToLogin: () => void;
}

export default function RegisterForm({
	onSuccess,
	onSwitchToLogin,
}: RegisterFormProps) {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<RegisterFormData>();

	const watchPassword = watch("password");

	const onSubmit = async (data: RegisterFormData) => {
		setIsLoading(true);
		setError("");

		try {
			// Remove confirmPassword from the data sent to backend
			const { confirmPassword, ...registerData } = data;

			const response = await axios.post(
				"http://localhost:3000/api/auth/register",
				registerData,
				{
					withCredentials: true,
				},
			);

			if (response.data.success) {
				onSuccess?.();
			} else {
				setError(response.data.message || "Registration failed");
			}
		} catch (err: any) {
			setError(
				err.response?.data?.message ||
					"An error occurred during registration",
			);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className="w-full max-w-md mx-auto">
			<div className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
				<h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
					Create Account
				</h2>

				{error && (
					<div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
						{error}
					</div>
				)}

				<form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
					<div className="grid grid-cols-2 gap-4">
						<div>
							<label
								htmlFor="first_name"
								className="block text-gray-700 text-sm font-bold mb-2"
							>
								First Name
							</label>
							<input
								{...register("first_name", {
									required: "First name is required",
								})}
								type="text"
								id="first_name"
								className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
								placeholder="First name"
							/>
							{errors.first_name && (
								<p className="text-red-500 text-xs italic mt-1">
									{errors.first_name.message}
								</p>
							)}
						</div>

						<div>
							<label
								htmlFor="last_name"
								className="block text-gray-700 text-sm font-bold mb-2"
							>
								Last Name
							</label>
							<input
								{...register("last_name", {
									required: "Last name is required",
								})}
								type="text"
								id="last_name"
								className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
								placeholder="Last name"
							/>
							{errors.last_name && (
								<p className="text-red-500 text-xs italic mt-1">
									{errors.last_name.message}
								</p>
							)}
						</div>
					</div>

					<div>
						<label
							htmlFor="email"
							className="block text-gray-700 text-sm font-bold mb-2"
						>
							Email
						</label>
						<input
							{...register("email", {
								required: "Email is required",
								pattern: {
									value: /^\S+@\S+$/i,
									message: "Invalid email address",
								},
							})}
							type="email"
							id="email"
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
							placeholder="Enter your email"
						/>
						{errors.email && (
							<p className="text-red-500 text-xs italic mt-1">
								{errors.email.message}
							</p>
						)}
					</div>

					<div>
						<label
							htmlFor="date_of_birth"
							className="block text-gray-700 text-sm font-bold mb-2"
						>
							Date of Birth
						</label>
						<input
							{...register("date_of_birth", {
								required: "Date of birth is required",
							})}
							type="date"
							id="date_of_birth"
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
						/>
						{errors.date_of_birth && (
							<p className="text-red-500 text-xs italic mt-1">
								{errors.date_of_birth.message}
							</p>
						)}
					</div>

					<div>
						<label
							htmlFor="gender"
							className="block text-gray-700 text-sm font-bold mb-2"
						>
							Gender
						</label>
						<select
							{...register("gender", {
								required: "Gender is required",
							})}
							id="gender"
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
						>
							<option value="">Select gender</option>
							<option value="male">Male</option>
							<option value="female">Female</option>
							<option value="other">Other</option>
						</select>
						{errors.gender && (
							<p className="text-red-500 text-xs italic mt-1">
								{errors.gender.message}
							</p>
						)}
					</div>

					<div>
						<label
							htmlFor="password"
							className="block text-gray-700 text-sm font-bold mb-2"
						>
							Password
						</label>
						<input
							{...register("password", {
								required: "Password is required",
								minLength: {
									value: 6,
									message:
										"Password must be at least 6 characters",
								},
							})}
							type="password"
							id="password"
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
							placeholder="Enter your password"
						/>
						{errors.password && (
							<p className="text-red-500 text-xs italic mt-1">
								{errors.password.message}
							</p>
						)}
					</div>

					<div>
						<label
							htmlFor="confirmPassword"
							className="block text-gray-700 text-sm font-bold mb-2"
						>
							Confirm Password
						</label>
						<input
							{...register("confirmPassword", {
								required: "Please confirm your password",
								validate: (value) =>
									value === watchPassword ||
									"Passwords do not match",
							})}
							type="password"
							id="confirmPassword"
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
							placeholder="Confirm your password"
						/>
						{errors.confirmPassword && (
							<p className="text-red-500 text-xs italic mt-1">
								{errors.confirmPassword.message}
							</p>
						)}
					</div>

					<button
						type="submit"
						disabled={isLoading}
						className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:opacity-50 disabled:cursor-not-allowed"
					>
						{isLoading ? "Creating Account..." : "Create Account"}
					</button>
				</form>

				<div className="text-center mt-4">
					<p className="text-gray-600 text-sm">
						Already have an account?{" "}
						<button
							onClick={onSwitchToLogin}
							className="text-blue-500 hover:text-blue-700 font-medium"
						>
							Sign in here
						</button>
					</p>
				</div>
			</div>
		</div>
	);
}
